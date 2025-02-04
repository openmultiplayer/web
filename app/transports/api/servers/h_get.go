package servers

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/internal/db"
	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	// This used to be for getting servers from database directly
	// result, err := s.storer.GetByAddress(r.Context(), chi.URLParam(r, "address"))

	// Let's use cached servers, instead of getting them directly from database
	// This way we can save a lot DB processing
	result, err := s.storer.GetByAddressCached(r.Context(), chi.URLParam(r, "address"))
	if err != nil {
		if errors.Is(err, db.ErrNotFound) {
			web.StatusNotFound(w, err)
		} else {
			// web.StatusInternalServerError(w, errors.Wrap(err, "failed to get server"))
		}
		return
	}

	w.Header().Add("Content-Type", "application/json")
	web.Write(w, result)
}
