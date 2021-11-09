package users

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")

	// context is public, hide sensitive PII like email
	public := true
	if auth, ok := authentication.GetAuthenticationInfoFromContext(r.Context()); ok {
		if auth.Cookie.UserID == id || auth.Cookie.Admin {
			// context is owner/admin, reveal sensitive PII
			public = false
		}
	}

	user, err := s.repo.GetUser(r.Context(), id, public)
	if err != nil {
		if errors.Is(err, db.ErrNotFound) {
			web.StatusNotFound(w, err)
		} else {
			web.StatusInternalServerError(w, err)
		}
		return
	}

	json.NewEncoder(w).Encode(user) //nolint:errcheck
}
