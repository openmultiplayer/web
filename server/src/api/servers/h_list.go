package servers

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/server-index/server/src/web"
	"github.com/pkg/errors"
)

func (s *service) list(w http.ResponseWriter, r *http.Request) {
	list, err := s.storer.GetAll(r.Context())
	if err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to get list of servers"))
		return
	}

	if err := json.NewEncoder(w).Encode(list); err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to write response"))
	}
}
