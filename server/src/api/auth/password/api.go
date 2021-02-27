package password

import (
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
)

type service struct {
	auth *authentication.State
}

// Routes provides service routes
func New(
	a *authentication.State,
	githuboa authentication.OAuthProvider,
	discordoa authentication.OAuthProvider,
) *chi.Mux {
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
