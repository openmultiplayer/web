package servers

import (
	"net/http"
	"time"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/internal/web"
)

type DeletedPayload struct {
	Time *time.Time `json:"time"`
}

func (s *service) deleted(w http.ResponseWriter, r *http.Request) {
	var p DeletedPayload
	if ok := web.ParseBody(w, r, &p); !ok {
		return
	}

	result, err := s.storer.SetDeleted(r.Context(), chi.URLParam(r, "address"), p.Time)
	if err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to set server deleted status"))
		return
	}

	web.Write(w, result)
}
