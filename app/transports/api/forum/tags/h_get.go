package tags

import (
	"net/http"

	"github.com/openmultiplayer/web/internal/web"
)

type tagsParams struct {
	Query string `qstring:"query"`
}

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	var p tagsParams
	if !web.ParseQuery(w, r, &p) {
		return
	}

	tags, err := s.tags.GetTags(r.Context(), p.Query)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	web.Write(w, tags)
}
