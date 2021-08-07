package forum

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/web"
)

type getParams struct {
	Max  int `qstring:"max"  valid:"range(1|50)"`
	Skip int `qstring:"skip"`
}

func (s *ForumService) get(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	var p getParams
	if !web.ParseQuery(w, r, &p) {
		return
	}

	if p.Max == 0 {
		p.Max = 50
	} else if p.Max > 100 {
		p.Max = 100
	}

	posts, err := s.repo.GetPosts(r.Context(), id, p.Max, p.Skip)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(posts)
}
