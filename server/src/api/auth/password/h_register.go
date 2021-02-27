package password

import (
	"net/http"

	"github.com/openmultiplayer/web/server/src/web"
)

type registerPayload struct {
	Username   string `json:"username" schema:"username"`
	Identifier string `json:"identifier" schema:"identifier"`
	Authorizer string `json:"authorizer" schema:"authorizer"`
}

func (s *service) register(w http.ResponseWriter, r *http.Request) {
	var p registerPayload
	if err := web.DecodeBody(r, &p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	user, err := s.auth.Register(r.Context(), p.Username, p.Identifier, p.Authorizer)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	s.auth.EncodeAuthCookie(w, *user)
}
