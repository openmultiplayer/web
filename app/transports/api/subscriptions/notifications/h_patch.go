package notifications

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/app/resources/notification"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

type patchParams notification.Notification

func (s *service) patch(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var p patchParams
	if err := web.DecodeBody(r, &p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	notifications, err := s.repo.SetReadState(r.Context(), info.Cookie.UserID, id, p.Read)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}
	if notifications == nil {
		web.StatusNotFound(w, err)
		return
	}

	web.Write(w, notifications)
}
