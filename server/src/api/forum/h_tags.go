package forum

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/web"
)

type tagsParams struct {
	Query string `qstring:"query"`
}

func (s *service) tags(w http.ResponseWriter, r *http.Request) {
	var p tagsParams
	if !web.ParseQuery(w, r, &p) {
		return
	}

	tags, err := s.repo.GetTags(r.Context(), p.Query)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(tags)
}
