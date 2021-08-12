package forum

import (
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

	if err := s.repo.DeletePost(r.Context(), info.Cookie.UserID, id); err != nil {
		web.StatusInternalServerError(w, err)
	}
}
