package servers

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/server"
	"github.com/openmultiplayer/web/server/src/web"
	"github.com/pkg/errors"
)

type addPayload struct {
	IP string `json:"ip"`
}

func (s *service) add(w http.ResponseWriter, r *http.Request) {
	p := addPayload{}
	if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
		web.StatusBadRequest(w, errors.Wrap(err, "failed to decode body as JSON"))
		return
	}

	ss := server.HydrateDomain(r.Context(), server.TransformQueryResult(s.queryer.Query(r.Context(), p.IP)))
	if ss.IP == "" {
		web.StatusNotFound(w, errors.New("The specified IP did not resolve to a SA-MP server."))
		return
	}

	if err := s.storer.Upsert(r.Context(), ss); err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to upsert server information"))
		return
	}

	//nolint:errcheck
	json.NewEncoder(w).Encode(ss)
}
