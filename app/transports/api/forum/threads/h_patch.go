package threads

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/app/resources/forum/post"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

type patchBody post.Post

func (s *service) patch(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var b patchBody
	if !web.ParseBody(w, r, &b) {
		return
	}

	post, err := s.threads.Update(r.Context(), info.Cookie.UserID, id, b.Title, &b.Category.ID, &b.Pinned)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}
	if post == nil {
		web.StatusNotFound(w, nil)
		return
	}

	web.Write(w, post)
}
