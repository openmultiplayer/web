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

	"github.com/openmultiplayer/web/app/resources/user"
	"github.com/openmultiplayer/web/internal/config"
)

var _ OAuthProvider = &GitHubProvider{}

var (
	ErrStateMismatch = errors.New("state nonce mismatch")
	ErrOAuthNoEmail  = errors.New("missing email address on OAuth provider account")
)

type GitHubProvider struct {
	repo   user.Repository
	as     *State
	cache  *cache.Cache
	oaconf *oauth2.Config
}

func NewGitHubProvider(repo user.Repository, as *State, cfg config.Config) *GitHubProvider {
	return &GitHubProvider{
		repo:  repo,
		as:    as,
		cache: cache.New(10*time.Minute, 20*time.Minute),
		oaconf: &oauth2.Config{
			ClientID:     cfg.GithubClientID,
			ClientSecret: cfg.GithubClientSecret,
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
func (p *GitHubProvider) Login(ctx context.Context, state, code string) (*user.User, error) {
	// check if the state is one this API sent out.
	if _, ok := p.cache.Get(state); !ok {
		return nil, ErrStateMismatch
	}

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

	u, err := p.repo.GetUserByEmail(ctx, email, false)
	if err != nil {
		return nil, err
	}
	if u != nil {
		// This user account may exist but not be linked to GitHub yet.
		if u.Github == nil {
			if err := p.repo.LinkGitHub(ctx, u.ID, fmt.Sprint(githubUser.GetID()), githubUser.GetLogin(), githubUser.GetEmail()); err != nil {
				return nil, errors.Wrap(err, "failed to create user GitHub relationship")
			}
		}
		return u, err
	}

	// Check if this request came from a user who was already logged in. If they
	// are, get their existing account. If not, create a new account.
	u, err = p.as.GetOrCreateFromContext(ctx, email, "GITHUB", githubUser.GetLogin())
	if err != nil {
		return nil, err
	}

	if err := p.repo.LinkGitHub(ctx, u.ID, fmt.Sprint(githubUser.GetID()), githubUser.GetLogin(), githubUser.GetEmail()); err != nil {
		return nil, errors.Wrap(err, "failed to create user GitHub relationship")
	}

	return u, nil
}
