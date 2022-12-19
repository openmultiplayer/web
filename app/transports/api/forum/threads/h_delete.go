package threads

import (
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) delete(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	count, err := s.threads.Delete(r.Context(), id, info.Cookie.UserID)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	web.Write(w, map[string]int{"count": count})
}
