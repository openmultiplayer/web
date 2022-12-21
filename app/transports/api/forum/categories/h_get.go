package categories

import (
	"net/http"

	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	categories, err := s.repo.GetCategories(r.Context(), authentication.IsRequestAdmin(r))
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	web.Write(w, categories)
}
