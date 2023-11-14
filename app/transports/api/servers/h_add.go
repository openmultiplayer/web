package servers

import (
	"encoding/json"
	"net/http"

	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/internal/web"
)

type addPayload struct {
	IP string `json:"ip"`
}

func (s *service) add(w http.ResponseWriter, r *http.Request) {
	var address string
	switch r.Header.Get("Content-Type") {
	case "application/json":
		var p addPayload
		if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
			web.StatusBadRequest(w, errors.New("failed to read body"))
			return
		}
		address = p.IP
	case "application/x-www-form-urlencoded":
		address = r.FormValue("address")

	default:
		web.StatusBadRequest(w, errors.Errorf("cannot handle content type %s", r.Header.Get("Content-Type")))
		return
	}
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
	web.Write(w, ss)
}
