package reacts

import (
	"errors"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/app/resources/forum/react"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
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
		if errors.Is(err, react.ErrAlreadyReacted) {
			web.Write(w, b)
			return
		} else if errors.Is(err, react.ErrInvalidEmoji) {
			web.StatusBadRequest(w, web.WithSuggestion(err,
				"The emoji ID sent to the server was invalid.",
				"This may be an issue with the emoji picker menu, please report this to a site administrator and include the exact emoji you tried to react with."))
			return
		} else {
			web.StatusInternalServerError(w, err)
		}
		return
	}
	if reaction == nil {
		web.StatusNotFound(w, nil)
		return
	}

	web.Write(w, reaction)
}
