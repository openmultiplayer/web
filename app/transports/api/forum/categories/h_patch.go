package categories

import (
	"net/http"

	"github.com/openmultiplayer/web/app/resources/forum/category"
	"github.com/openmultiplayer/web/internal/web"
)

type patchBody category.Category

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

	web.Write(w, updated)
}
