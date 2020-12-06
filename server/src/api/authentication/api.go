package authentication

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/api/authentication/discord"
	"github.com/openmultiplayer/web/server/src/api/authentication/github"
	"github.com/openmultiplayer/web/server/src/auth"
)

type service struct {
	auth *auth.Authentication
}

// Routes provides service routes
func New(a *auth.Authentication, githuboa auth.OAuthProvider, discordoa auth.OAuthProvider) *chi.Mux {
	rtr := chi.NewRouter()
	// svc := service{
	// 	auth: a,
	// }

	// rtr.Post("/login", http.HandlerFunc(svc.login))
	// rtr.Post("/register", http.HandlerFunc(svc.register))
	// rtr.Post("/verify", http.HandlerFunc(svc.verify))
	// rtr.Post("/reverify", http.HandlerFunc(svc.reverify))
	// rtr. //With(auth.MustBeAuthenticated).
	// 	Patch("/passchange", http.HandlerFunc(svc.passchange))

	// rtr.Mount("/token/", token.New(a))

	// TODO: Support for more OAuth providers maybe with a router interface
	rtr.Mount("/github", github.New(a, githuboa))
	rtr.Mount("/discord", discord.New(a, discordoa))

	return rtr
}
