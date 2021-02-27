package authentication

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/bwmarrin/discordgo"
	"github.com/patrickmn/go-cache"
	"github.com/pkg/errors"
	"github.com/thanhpk/randstr"
	"golang.org/x/oauth2"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/mailreg"
	"github.com/openmultiplayer/web/server/src/mailworker"
)

var _ OAuthProvider = &DiscordProvider{}

type DiscordProvider struct {
	db     *db.PrismaClient
	cache  *cache.Cache
	oaconf *oauth2.Config
}

var endpoint = oauth2.Endpoint{
	AuthURL:  "https://discord.com/api/oauth2/authorize",
	TokenURL: "https://discord.com/api/oauth2/token",
}

func NewDiscordProvider(db *db.PrismaClient, clientID, clientSecret string) *DiscordProvider {
	return &DiscordProvider{
		db:    db,
		cache: cache.New(10*time.Minute, 20*time.Minute),
		oaconf: &oauth2.Config{
			ClientID:     clientID,
			ClientSecret: clientSecret,
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
func (p *DiscordProvider) Login(ctx context.Context, state, code string) (*db.UserModel, error) {
	// check if the state is one this API sent out.
	if _, ok := p.cache.Get(state); !ok {
		return nil, ErrStateMismatch
	}
	p.cache.Delete(state)

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

	// Attempt to find a user via their associated Discord profile
	if userdc, err := p.db.Discord.FindOne(
		db.Discord.Email.Equals(email),
	).With(
		db.Discord.User.Fetch(),
	).Exec(ctx); err == nil {
		u := userdc.User()
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
		// Create a new account with the authentication method set to "Discord"
		user, err = p.db.User.CreateOne(
			db.User.Email.Set(fmt.Sprint(email)),
			db.User.AuthMethod.Set(db.AuthMethodDISCORD),
			db.User.Name.Set(dcuser.Username),
		).Exec(ctx)
		if err != nil {
			return nil, errors.Wrap(err, "failed to create user account")
		}
	}

	// Create their Discord record and link it to the account that was either
	// found or created above.
	_, err = p.db.Discord.CreateOne(
		db.Discord.User.Link(db.User.ID.Equals(user.ID)),
		db.Discord.AccountID.Set(dcuser.ID),
		db.Discord.Username.Set(dcuser.Username),
		db.Discord.Email.Set(email),
	).Exec(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "failed to create user Discord relationship")
	}

	if err := mailworker.Enqueue(
		dcuser.Username,
		dcuser.Email,
		"Welcome to open.mp!",
		mailreg.TemplateID("welcome"),
		struct{}{},
	); err != nil {
		return nil, err
	}

	return &user, nil
}
