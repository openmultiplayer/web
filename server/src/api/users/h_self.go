package users

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) self(w http.ResponseWriter, r *http.Request) {
	ai, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	user, err := s.repo.GetUser(r.Context(), ai.Cookie.UserID, false)
	if err != nil {
		// a "not found" in this context is still an internal server error
		// because the user *should* exist in order for the auth middleware to
		// allow the code to reach this point.
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(user) //nolint:errcheck
}
