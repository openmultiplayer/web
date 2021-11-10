package categories

import (
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

	web.Write(w, categories)
}
