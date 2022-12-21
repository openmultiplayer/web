package subscriptions

import (
	"net/http"

	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	notifications, err := s.repo.GetSubscriptionsForUser(r.Context(), info.Cookie.UserID)
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
