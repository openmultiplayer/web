package authentication

import (
	"net/http"

	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) register(w http.ResponseWriter, r *http.Request) {
	name := r.PostFormValue(FormKeyName)
	identifier := r.PostFormValue(FormKeyIdentifier)
	authorizer := r.PostFormValue(FormKeyAuthorizer)

	user, err := s.auth.Register(r.Context(), name, identifier, authorizer)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	s.auth.EncodeAuthCookie(w, *user)
}
