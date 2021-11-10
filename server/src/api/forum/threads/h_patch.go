package threads

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/resources/forum/post"
	"github.com/openmultiplayer/web/server/src/web"
)

type patchBody post.Post

func (s *service) patch(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")

	var b patchBody
	if !web.ParseBody(w, r, &b) {
		return
	}

	post, err := s.threads.Update(r.Context(), id, b.Title, &b.Category.ID, &b.Pinned)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	web.Write(w, post)
}
