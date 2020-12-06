package discord

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/auth"
	"github.com/openmultiplayer/web/server/src/web"
)

type service struct {
	auth *auth.Authentication
	oa2  auth.OAuthProvider
}

func New(a *auth.Authentication, oa2 auth.OAuthProvider) *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{
		auth: a,
		oa2:  oa2,
	}

	rtr.Get("/link", http.HandlerFunc(svc.link))
	rtr.Get("/callback", http.HandlerFunc(svc.callback))

	return rtr
}

type linkPayload struct {
	URL string `json:"url"`
}

func (s *service) link(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(linkPayload{URL: s.oa2.Link()}) //nolint:errcheck
}

func (s *service) callback(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()
	if err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	state := r.Form["state"][0]
	if state == "" {
		web.StatusBadRequest(w, errors.New("missing state nonce in request"))
		return
	}

	code := r.Form["code"][0]
	if state == "" {
		web.StatusBadRequest(w, errors.New("missing oauth2 code in request"))
		return
	}

	user, err := s.oa2.Login(r.Context(), state, code)
	if err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	s.auth.EncodeAuthCookie(w, *user)
	json.NewEncoder(w).Encode(user) //nolint:errcheck
}
