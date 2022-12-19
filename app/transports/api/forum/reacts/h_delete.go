package reacts

import (
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) delete(w http.ResponseWriter, r *http.Request) {
	reactID := chi.URLParam(r, "react_id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	reaction, err := s.reacts.Remove(r.Context(), info.Cookie.UserID, reactID)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}
	if reaction == nil {
		web.StatusNotFound(w, nil)
		return
	}

	web.Write(w, reaction)
}
