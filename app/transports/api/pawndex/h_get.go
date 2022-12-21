package pawndex

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	user := chi.URLParam(r, "user")
	repo := chi.URLParam(r, "repo")

	p, exists, err := s.store.Get(fmt.Sprintf("%s/%s", user, repo))
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	if !exists {
		web.StatusNotFound(w, nil)
		return
	}

	web.Write(w, p) //nolint:errcheck
}
