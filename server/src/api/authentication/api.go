package authentication

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/api/authentication/discord"
	"github.com/openmultiplayer/web/server/src/api/authentication/github"
	"github.com/openmultiplayer/web/server/src/auth"
)

// Routes provides service routes
func New(a *auth.Authentication, githuboa auth.OAuthProvider, discordoa auth.OAuthProvider) *chi.Mux {
	rtr := chi.NewRouter()

	rtr.Mount("/github", github.New(a, githuboa))
	rtr.Mount("/discord", discord.New(a, discordoa))

	return rtr
}
