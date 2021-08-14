package forum

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) delete(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	post, err := s.repo.DeletePost(r.Context(), info.Cookie.UserID, id, info.Cookie.Admin)
	if err != nil {
		web.StatusInternalServerError(w, err)
	}

	json.NewEncoder(w).Encode(post)
}
