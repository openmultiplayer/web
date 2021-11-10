package reacts

import (
	"errors"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/resources/forum/react"
	"github.com/openmultiplayer/web/server/src/web"
)

type postBody struct {
	Emoji string `json:"emoji"`
}

func (s *service) post(w http.ResponseWriter, r *http.Request) {
	postID := chi.URLParam(r, "post_id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var b postBody
	if err := web.DecodeBody(r, &b); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	reaction, err := s.reacts.Add(r.Context(), info.Cookie.UserID, postID, b.Emoji)
	if err != nil {
		if errors.Is(err, db.ErrNotFound) {
			web.StatusNotFound(w, err)
		} else if errors.Is(err, react.ErrAlreadyReacted) {
			// 200 OK - nothing to do.
			return
		} else {
			web.StatusInternalServerError(w, err)
		}
		return
	}

	web.Write(w, reaction)
}
