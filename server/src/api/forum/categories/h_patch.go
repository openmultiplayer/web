package categories

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/resources/forum"
	"github.com/openmultiplayer/web/server/src/web"
)

type patchBody forum.Category

func (s *service) patch(w http.ResponseWriter, r *http.Request) {
	var p patchBody
	if err := web.DecodeBody(r, &p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	updated, err := s.repo.UpdateCategory(r.Context(), p.ID, &p.Name, &p.Description, &p.Colour, &p.Sort, &p.Admin)
	if err != nil {
		return
	}

	json.NewEncoder(w).Encode(updated)
}
