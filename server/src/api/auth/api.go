package auth

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/api/auth/discord"
	"github.com/openmultiplayer/web/server/src/api/auth/github"
	"github.com/openmultiplayer/web/server/src/authentication"
)

type AuthService struct {
	R chi.Router
}

// Routes provides service routes
func New(
	auth *authentication.State,
	gh *authentication.GitHubProvider,
	dc *authentication.DiscordProvider,

) *AuthService {
	svc := &AuthService{chi.NewRouter()}

	svc.R.Mount("/github", github.New(auth, gh))
	svc.R.Mount("/discord", discord.New(auth, dc))

	return svc
}
