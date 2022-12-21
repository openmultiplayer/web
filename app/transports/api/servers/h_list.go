package servers

import (
	"net/http"

	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) list(w http.ResponseWriter, r *http.Request) {
	list, err := s.storer.GetAll(r.Context())
	if err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to get list of servers"))
		return
	}

	essential := []server.Essential{}
	for _, item := range list {
		essential = append(essential, item.Core)
	}

	web.Write(w, essential)
}
