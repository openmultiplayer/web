package categories

import (
	"encoding/json"
	"errors"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/web"
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
		if errors.Is(err, db.ErrNotFound) {
			web.StatusNotFound(w, err)
		} else {
			web.StatusInternalServerError(w, err)
		}
		return
	}

	json.NewEncoder(w).Encode(deleted)
}
