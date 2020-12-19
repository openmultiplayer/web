package auth

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/api/auth/discord"
	"github.com/openmultiplayer/web/server/src/api/auth/github"
	"github.com/openmultiplayer/web/server/src/authentication"
)

// Routes provides service routes
func New(
	a *authentication.State,
	githuboa authentication.OAuthProvider,
	discordoa authentication.OAuthProvider,
) *chi.Mux {
	rtr := chi.NewRouter()

	rtr.Mount("/github", github.New(a, githuboa))
	rtr.Mount("/discord", discord.New(a, discordoa))

	return rtr
}
