package servers

import (
	"encoding/json"
	"net/http"

	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/server/src/server"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) add(w http.ResponseWriter, r *http.Request) {
	address := r.FormValue("address")
	if address == "" {
		web.StatusBadRequest(w, errors.New("no address specified"))
		return
	}

	normalised, errs := server.AddressFromString(address)
	if errs != nil {
		web.StatusBadRequest(w, errors.Errorf("%v", errs))
		return
	}

	ss := server.HydrateDomain(r.Context(), server.TransformQueryResult(s.queryer.Query(r.Context(), normalised)))
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
