package authentication

import (
	"bytes"
	"context"
	"encoding/json"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/bwmarrin/discordgo"
	"github.com/patrickmn/go-cache"
	"github.com/pkg/errors"
	"github.com/thanhpk/randstr"
	"golang.org/x/oauth2"

	"github.com/openmultiplayer/web/app/resources/user"
	"github.com/openmultiplayer/web/internal/config"
)

var _ OAuthProvider = &DiscordProvider{}

type DiscordProvider struct {
	repo user.Repository
	as   *State

	cache  *cache.Cache
	oaconf *oauth2.Config
}

var endpoint = oauth2.Endpoint{
	AuthURL:  "https://discord.com/api/oauth2/authorize",
	TokenURL: "https://discord.com/api/oauth2/token",
}

func NewDiscordProvider(repo user.Repository, as *State, cfg config.Config) *DiscordProvider {
	return &DiscordProvider{
		repo:  repo,
		as:    as,
		cache: cache.New(10*time.Minute, 20*time.Minute),
		oaconf: &oauth2.Config{
			ClientID:     cfg.DiscordClientID,
			ClientSecret: cfg.DiscordClientSecret,
			Scopes:       []string{"identify", "email"},
			Endpoint:     endpoint,
		},
	}
}

func (p *DiscordProvider) Link() string {
	state := randstr.String(16)
	//nolint:errcheck // because the key is random, it cannot collide
	p.cache.Add(state, struct{}{}, 10*time.Minute)
	return p.oaconf.AuthCodeURL(state, oauth2.AccessTypeOffline)
}

// Login is called when the callback URL is hit by a user who has successfully
// authenticated against Discord. `code` is the query parameter passed back by
// the provider. It is exchanged for a token which is used to look up the user
// in our DB or create their account if it doesn't exist.
func (p *DiscordProvider) Login(ctx context.Context, state, code string) (*user.User, error) {
	// check if the state is one this API sent out.
	if _, ok := p.cache.Get(state); !ok {
		return nil, ErrStateMismatch
	}

	// Exchange the code for a token, this makes an API call to Discord.
	token, err := p.oaconf.Exchange(ctx, code)
	if err != nil {
		return nil, errors.Wrap(err, "failed to perform OAuth2 token exchange")
	}

	req, err := http.NewRequest("GET", "https://discordapp.com/api/users/@me", nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Accept", "application/json")
	req.Header.Set("Authorization", "Bearer "+token.AccessToken)
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		if resp != nil {
			resp.Body.Close()
		}
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, errors.Errorf("discord responded with %d", resp.StatusCode)
	}

	content, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var dcuser discordgo.User
	err = json.NewDecoder(bytes.NewReader(content)).Decode(&dcuser)
	if err != nil {
		return nil, err
	}

	email := dcuser.Email
	if email == "" {
		// this should probably never happen!
		return nil, errors.New("email missing from Discord account data")
	}

	u, err := p.repo.GetUserByEmail(ctx, email, false)
	if err != nil {
		return nil, err
	}
	if u != nil {
		// This user account may exist but not be linked to Discord yet.
		if u.Discord == nil {
			if err := p.repo.LinkDiscord(ctx, u.ID, dcuser.ID, dcuser.Username, dcuser.Email); err != nil {
				return nil, errors.Wrap(err, "failed to create user Discord relationship")
			}
		}
		return u, err
	}

	// Check if this request came from a user who was already logged in. If they
	// are, get their existing account. If not, create a new account.
	u, err = p.as.GetOrCreateFromContext(ctx, email, "DISCORD", dcuser.Username)
	if err != nil {
		return nil, err
	}

	if err := p.repo.LinkDiscord(ctx, u.ID, dcuser.ID, dcuser.Username, dcuser.Email); err != nil {
		return nil, errors.Wrap(err, "failed to create user Discord relationship")
	}

	return u, nil
}
