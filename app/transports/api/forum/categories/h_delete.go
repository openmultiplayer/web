package categories

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/internal/web"
)

type deleteBody struct {
	MoveTo string `json:"moveTo" valid:"required"`
}

func (s *service) delete(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")

	var p deleteBody
	if err := web.DecodeBody(r, &p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	deleted, err := s.repo.DeleteCategory(r.Context(), id, p.MoveTo)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}
	if deleted == nil {
		web.StatusNotFound(w, nil)
		return
	}

	web.Write(w, deleted)
}
