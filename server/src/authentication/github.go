package authentication

import (
	"context"
	"fmt"
	"time"

	"github.com/google/go-github/v28/github"
	"github.com/patrickmn/go-cache"
	"github.com/pkg/errors"
	"github.com/thanhpk/randstr"
	"golang.org/x/oauth2"
	githuboa "golang.org/x/oauth2/github"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/mailreg"
	"github.com/openmultiplayer/web/server/src/mailworker"
)

var _ OAuthProvider = &GitHubProvider{}

var (
	ErrStateMismatch = errors.New("state nonce mismatch")
	ErrOAuthNoEmail  = errors.New("missing email address on OAuth provider account")
)

type GitHubProvider struct {
	db     *db.PrismaClient
	cache  *cache.Cache
	oaconf *oauth2.Config
}

func NewGitHubProvider(db *db.PrismaClient, clientID, clientSecret string) *GitHubProvider {
	return &GitHubProvider{
		db:    db,
		cache: cache.New(10*time.Minute, 20*time.Minute),
		oaconf: &oauth2.Config{
			ClientID:     clientID,
			ClientSecret: clientSecret,
			Scopes:       []string{"read:user", "user:email"},
			Endpoint:     githuboa.Endpoint,
		},
	}
}

func (p *GitHubProvider) Link() string {
	state := randstr.String(16)
	//nolint:errcheck // because the key is random, it cannot collide
	p.cache.Add(state, struct{}{}, 10*time.Minute)
	return p.oaconf.AuthCodeURL(state, oauth2.AccessTypeOffline)
}

// Login is called when the callback URL is hit by a user who has successfully
// authenticated against GitHub. `code` is the query parameter passed back by
// the provider. It is exchanged for a token which is used to look up the user
// in our DB or create their account if it doesn't exist.
func (p *GitHubProvider) Login(ctx context.Context, state, code string) (*db.UserModel, error) {
	// check if the state is one this API sent out.
	if _, ok := p.cache.Get(state); !ok {
		return nil, ErrStateMismatch
	}
	p.cache.Delete(state)

	// Exchange the code for a token, this makes an API call to GitHub.
	token, err := p.oaconf.Exchange(ctx, code)
	if err != nil {
		return nil, errors.Wrap(err, "failed to perform OAuth2 token exchange")
	}

	// Use the token to create a GitHub client and request the user's account.
	client := github.NewClient(oauth2.NewClient(ctx, oauth2.StaticTokenSource(&oauth2.Token{AccessToken: token.AccessToken})))
	githubUser, _, err := client.Users.Get(ctx, "")
	if err != nil {
		return nil, errors.Wrap(err, "failed to get GitHub user data")
	}

	email := githubUser.GetEmail()
	if email == "" {
		// this should probably never happen!
		return nil, errors.New("email missing from GitHub account data")
	}

	// Attempt to find a user via their associated GitHub profile
	if usergh, err := p.db.GitHub.FindOne(
		db.GitHub.Email.Equals(email),
	).With(
		db.GitHub.User.Fetch(),
	).Exec(ctx); err == nil {
		u := usergh.User()
		return &u, err
	}

	// Check if this request came from a user who was already logged in. If they
	// are, get their existing account. If not, create a new account.
	var user db.UserModel
	if existing, ok := GetAuthenticationInfoFromContext(ctx); ok && existing.Authenticated {
		user, err = p.db.User.FindOne(
			db.User.ID.Equals(existing.Cookie.UserID),
		).Exec(ctx)
		if err != nil {
			return nil, errors.Wrap(err, "failed to find user account")
		}
	} else {
		// Create a new account with the authentication method set to "GitHub"
		user, err = p.db.User.CreateOne(
			db.User.Email.Set(fmt.Sprint(email)),
			db.User.AuthMethod.Set(db.AuthMethodGITHUB),
			db.User.Name.Set(githubUser.GetLogin()),
		).Exec(ctx)
		if err != nil {
			return nil, errors.Wrap(err, "failed to create user account")
		}
	}

	// Create their GitHub record and link it to the newly created user account
	_, err = p.db.GitHub.CreateOne(
		db.GitHub.User.Link(db.User.ID.Equals(user.ID)),
		db.GitHub.AccountID.Set(fmt.Sprint(githubUser.GetID())),
		db.GitHub.Username.Set(githubUser.GetLogin()),
		db.GitHub.Email.Set(email),
	).Exec(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "failed to create user GitHub relationship")
	}

	if err := mailworker.Enqueue(
		githubUser.GetName(),
		githubUser.GetEmail(),
		"Welcome to open.mp!",
		mailreg.TemplateID("welcome"),
		struct{}{},
	); err != nil {
		return nil, err
	}

	return &user, nil
}
