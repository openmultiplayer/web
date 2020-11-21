package authentication

import (
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/auth"
)

type service struct {
	auth *auth.Authentication
}

// Routes provides service routes
func New(a *auth.Authentication) *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{
		auth: a,
	}

	rtr.Post("/login", http.HandlerFunc(svc.login))
	rtr.Post("/register", http.HandlerFunc(svc.register))
	rtr.Post("/verify", http.HandlerFunc(svc.verify))
	rtr.Post("/reverify", http.HandlerFunc(svc.reverify))
	// rtr. //With(auth.MustBeAuthenticated).
	// 	Patch("/passchange", http.HandlerFunc(svc.passchange))

	// rtr.Mount("/token/", token.New(a))

	return rtr
}
