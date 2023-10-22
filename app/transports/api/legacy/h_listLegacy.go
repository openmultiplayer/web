package legacy

import (
	"net/http"
	"strconv"
	"time"

	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) listLegacy(w http.ResponseWriter, r *http.Request) {
	queries := r.URL.Query()
	since, err := strconv.Atoi(queries.Get("activeSince"))
	if err != nil {
		since = 3
	}

	// This used to be for getting servers from database directly
	// list, err := s.storer.GetAll(r.Context(), time.Duration(-since)*time.Hour)

	// Let's use cached servers, instead of getting them directly from database
	// This way we can save a lot DB processing
	list, err := s.storer.GetAllCached(r.Context(), time.Duration(-since)*time.Hour)
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
