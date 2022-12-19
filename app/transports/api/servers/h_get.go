package servers

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	result, err := s.storer.GetByAddress(r.Context(), chi.URLParam(r, "address"))
	if err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to get server"))
		return
	}
	web.Write(w, result)
}
