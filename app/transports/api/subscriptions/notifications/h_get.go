package notifications

import (
	"net/http"
	"time"

	"github.com/Southclaws/qstring"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

type getParams struct {
	Read  bool      `qstring:"read" json:"read"`
	After time.Time `qstring:"after" json:"after"`
}

func (s *service) get(w http.ResponseWriter, r *http.Request) {
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var p getParams
	if err := qstring.Unmarshal(r.URL.Query(), &p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	notifications, err := s.repo.GetNotifications(r.Context(), info.Cookie.UserID, p.Read, p.After)
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
