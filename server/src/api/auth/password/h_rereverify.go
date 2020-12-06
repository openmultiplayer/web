package password

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/web"
)

type reverifyPayload struct {
	Email string `json:"email"`
}

func (s *service) reverify(w http.ResponseWriter, r *http.Request) {
	var p reverifyPayload
	if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	if err := s.auth.ReRequestVerification(r.Context(), p.Email); err != nil {
		web.StatusInternalServerError(w, err)
	}
}
