package posts

import (
	"errors"
	"html"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

type getParams struct {
	Max  int `qstring:"max"  valid:"range(1|50)"`
	Skip int `qstring:"skip"`
}

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	slug := chi.URLParam(r, "slug")
	var p getParams
	if !web.ParseQuery(w, r, &p) {
		return
	}

	if p.Max == 0 {
		p.Max = 1000
	}

	isAdmin := authentication.IsRequestAdmin(r)

	posts, err := s.repo.GetPosts(r.Context(), slug, p.Max, p.Skip, isAdmin, isAdmin)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}
	if posts == nil {
		web.StatusNotFound(w, web.WithDescription(errors.New("not found"), "No posts were found with that ID"))
		return
	}

	// TODO: move this post body html escape elsewhere...
	for i, p := range posts {
		posts[i].Body = html.EscapeString(p.Body)
	}

	web.Write(w, posts)
}
