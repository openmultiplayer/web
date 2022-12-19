package legacy

import (
	"net/http"

	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) listLegacy(w http.ResponseWriter, r *http.Request) {
	list, err := s.storer.GetAll(r.Context())
	if err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to get list of servers"))
		return
	}

	w.Header().Set("Content-Type", "text/plain")

	for _, s := range list {
		if _, err := w.Write([]byte(s.IP)); err != nil {
			return
		}
		if _, err := w.Write([]byte{10}); err != nil {
			return
		}
	}
}
