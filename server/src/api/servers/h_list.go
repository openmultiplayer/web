package servers

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/server"
	"github.com/openmultiplayer/web/server/src/web"
	"github.com/pkg/errors"
)

func (s *ServersService) list(w http.ResponseWriter, r *http.Request) {
	list, err := s.storer.GetAll(r.Context())
	if err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to get list of servers"))
		return
	}

	essential := []server.Essential{}
	for _, item := range list {
		essential = append(essential, item.Core)
	}

	if err := json.NewEncoder(w).Encode(essential); err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to write response"))
	}
}
