package users

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/web"
)

type banstatusBody struct {
	Banned bool `json:"banned"`
}

func (s *service) banstatus(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")

	var p banstatusBody
	if err := web.DecodeBody(r, &p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	if p.Banned {
		user, err := s.repo.Ban(r.Context(), id)
		if err != nil {
			web.StatusInternalServerError(w, err)
			return
		}
		json.NewEncoder(w).Encode(user)
	} else {
		user, err := s.repo.Unban(r.Context(), id)
		if err != nil {
			web.StatusInternalServerError(w, err)
			return
		}
		json.NewEncoder(w).Encode(user)
	}
}
