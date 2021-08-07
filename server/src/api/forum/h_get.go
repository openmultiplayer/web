package forum

import (
	"encoding/json"
	"net/http"

	"github.com/Southclaws/qstring"
	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/web"
)

type getParams struct {
	Max  int `qstring:"max"`
	Skip int `qstring:"skip"`
}

func (s *ForumService) get(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	var p getParams
	if err := qstring.Unmarshal(r.URL.Query(), &p); err != nil {
		web.StatusBadRequest(w, err)
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
