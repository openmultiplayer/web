package categories

import (
	"net/http"

	"github.com/openmultiplayer/web/app/resources/forum/category"
	"github.com/openmultiplayer/web/internal/web"
)

type patchAllBody []category.Category

func (s *service) patchAll(w http.ResponseWriter, r *http.Request) {
	var p patchAllBody
	if err := web.DecodeBody(r, &p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	result := []category.Category{}
	for _, c := range p {
		newCategory, err := s.repo.UpdateCategory(r.Context(), c.ID, &c.Name, &c.Description, &c.Colour, &c.Sort, &c.Admin)
		if err != nil {
			return
		}
		result = append(result, *newCategory)
	}

	web.Write(w, result)
}
