package forum

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) categories(w http.ResponseWriter, r *http.Request) {
	categories, err := s.repo.GetCategories(r.Context())
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(categories)
}
