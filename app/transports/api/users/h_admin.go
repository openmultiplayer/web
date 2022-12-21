package users

import (
	"errors"
	"net/http"

	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) patchAdmin(w http.ResponseWriter, r *http.Request) {
	type queryParams struct {
		UserId string `json:"userId"`
		Status bool   `json:"status"`
	}
	var p queryParams
	if !web.ParseBody(w, r, &p) {
		return
	}
	if p.UserId == "" {
		web.StatusBadRequest(w, errors.New("invalid query: missing userId field"))
		return
	}

	done, err := s.repo.SetAdmin(r.Context(), p.UserId, p.Status)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	if !done {
		web.StatusNotFound(w, errors.New("failed to update user"))
		return
	}
}
