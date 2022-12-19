package posts

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
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
	if post == nil {
		web.StatusNotFound(w, nil)
		return
	}

	web.Write(w, post)
}
