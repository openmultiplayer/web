package password

import (
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/auth"
)

type service struct {
	auth *auth.Authentication
}

// Routes provides service routes
func New(a *auth.Authentication, githuboa auth.OAuthProvider, discordoa auth.OAuthProvider) *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{
		auth: a,
	}

	rtr.Post("/login", http.HandlerFunc(svc.login))
	rtr.Post("/register", http.HandlerFunc(svc.register))
	rtr.Post("/verify", http.HandlerFunc(svc.verify))
	rtr.Post("/reverify", http.HandlerFunc(svc.reverify))

	return rtr
}
