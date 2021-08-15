package users

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type patchPayload struct {
	Email *string `json:"email"`
	Name  *string `json:"name"`
}

func (s *service) patch(w http.ResponseWriter, r *http.Request) {
	ai, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var p patchPayload
	if !web.ParseBody(w, r, &p) {
		return
	}

	user, err := s.repo.UpdateUser(r.Context(), ai.Cookie.UserID, p.Email, p.Name)
	if err != nil {
		web.StatusInternalServerError(w, err)
	}

	json.NewEncoder(w).Encode(user) //nolint:errcheck
}
