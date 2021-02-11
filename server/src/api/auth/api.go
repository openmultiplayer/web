package auth

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/api/auth/discord"
	"github.com/openmultiplayer/web/server/src/api/auth/github"
)

// Routes provides service routes
func New() *chi.Mux {
	rtr := chi.NewRouter()

	rtr.Mount("/github", github.New())
	rtr.Mount("/discord", discord.New())

	return rtr
}
