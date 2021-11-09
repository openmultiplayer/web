package users

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type patchPayload struct {
	Email *string `json:"email"`
	Name  *string `json:"name"`
	Bio   *string `json:"bio"`
}

func (s *service) patch(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	ai, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	if ai.Cookie.UserID != id && !ai.Cookie.Admin {
		web.StatusUnauthorized(w, errors.New("not authorised to modify user"))
		return
	}

	var p patchPayload
	if !web.ParseBody(w, r, &p) {
		return
	}

	user, err := s.repo.UpdateUser(r.Context(), ai.Cookie.UserID, p.Email, p.Name, p.Bio)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(user) //nolint:errcheck
}
