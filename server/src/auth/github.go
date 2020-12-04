package auth

import (
	"context"
	"errors"
	"fmt"

	"github.com/google/go-github/v28/github"
	"golang.org/x/oauth2"
	githuboa "golang.org/x/oauth2/github"

	"github.com/openmultiplayer/web/server/src/db"
)

var _ OAuthProvider = &Provider{}

var (
	ErrOAuthNoEmail = errors.New("missing email address on OAuth provider account")
)

type Provider struct {
	db     *db.PrismaClient
	oaconf *oauth2.Config
}

func NewGitHubProvider(db *db.PrismaClient, clientID, clientSecret string) *Provider {
	return &Provider{
		db: db,
		oaconf: &oauth2.Config{
			ClientID:     clientID,
			ClientSecret: clientSecret,
			Scopes:       []string{"read:user", "user:email"},
			Endpoint:     githuboa.Endpoint,
		},
	}
}

func (p *Provider) Link() string {
	// TODO: State nonce persistence
	return p.oaconf.AuthCodeURL("state", oauth2.AccessTypeOffline)
}

func (p *Provider) Login(ctx context.Context, code string) (*db.UserModel, error) {
	token, err := p.oaconf.Exchange(ctx, code)
	if err != nil {
		return nil, err
	}

	client := github.NewClient(oauth2.NewClient(ctx, oauth2.StaticTokenSource(&oauth2.Token{AccessToken: token.AccessToken})))
	ghuser, _, err := client.Users.Get(ctx, "")
	if err != nil {
		return nil, err
	}

	user, err := p.db.User.FindOne(
		db.User.AuthID.Equals(fmt.Sprint(ghuser.GetID())),
	).Exec(ctx)
	if err == nil {
		return &user, nil
	}

	// Create a new account and link the associated OAuth provider
	user, err = p.db.User.CreateOne(
		db.User.AuthID.Set(fmt.Sprint(ghuser.GetID())),
		db.User.AuthMethod.Set(db.AuthMethodGITHUB),
		db.User.Name.Set(ghuser.GetName()),
	).Exec(ctx)
	if err != nil {
		return nil, err
	}

	return &user, nil
}
