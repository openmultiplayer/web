package categories

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	categories, err := s.repo.GetCategories(r.Context(), authentication.IsRequestAdmin(r))
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(categories)
}
