package servers

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/server-index/server/src/web"
	"github.com/pkg/errors"
)

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	result, err := s.storer.GetByAddress(r.Context(), chi.URLParam(r, "address"))
	if err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to get server"))
		return
	}
	if err := json.NewEncoder(w).Encode(result); err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to write response"))
		return
	}
}
