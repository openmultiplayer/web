package pawndex

import (
	"net/http"

	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) list(w http.ResponseWriter, r *http.Request) {
	all, err := s.store.GetAll()
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	web.Write(w, all) //nolint:errcheck
}
