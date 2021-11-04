package categories

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/resources/forum"
	"github.com/openmultiplayer/web/server/src/web"
)

type patchBody []forum.Category

func (s *service) patch(w http.ResponseWriter, r *http.Request) {
	var p patchBody
	if err := web.DecodeBody(r, &p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	result := []forum.Category{}
	for _, c := range p {
		newCategory, err := s.repo.UpdateCategory(r.Context(), c.ID, &c.Name, &c.Description, &c.Colour, &c.Sort)
		if err != nil {
			return
		}
		result = append(result, *newCategory)
	}

	json.NewEncoder(w).Encode(result)
}
