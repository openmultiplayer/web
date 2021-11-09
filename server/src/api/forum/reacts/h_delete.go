package reacts

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) delete(w http.ResponseWriter, r *http.Request) {
	reactID := chi.URLParam(r, "react_id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	reaction, err := s.reacts.Remove(r.Context(), info.Cookie.UserID, reactID)
	if err != nil {
		if errors.Is(err, db.ErrNotFound) {
			web.StatusNotFound(w, err)
		} else {
			web.StatusInternalServerError(w, err)
		}
		return
	}

	json.NewEncoder(w).Encode(reaction)
}
