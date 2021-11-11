package subscriptions

import (
	"net/http"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/resources/notification"
	"github.com/openmultiplayer/web/server/src/web"
)

type postBody notification.Subscription

func (s *service) post(w http.ResponseWriter, r *http.Request) {
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var b postBody
	if !web.ParseBody(w, r, &b) {
		return
	}

	sub, err := s.repo.Subscribe(r.Context(), info.Cookie.UserID, b.RefersType, b.RefersTo)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	web.Write(w, sub)
}
