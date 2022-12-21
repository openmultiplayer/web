package subscriptions

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

type deleteResponse struct {
	Deleted int `json:"deleted"`
}

func (s *service) delete(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	deleted, err := s.repo.Unsubscribe(r.Context(), info.Cookie.UserID, id)
	if err != nil {
		web.StatusInternalServerError(w, err)
	}

	web.Write(w, deleteResponse{deleted})
}
