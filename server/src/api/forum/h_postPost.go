package forum

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type postPostBody struct {
	Body    string `json:"body"   valid:"required,stringlength(1|65535)"`
	ReplyTo string `json:"replyTo"`
}

func (s *service) postPost(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var b postPostBody
	if !web.ParseBody(w, r, &b) {
		return
	}

	post, err := s.posts.CreatePost(r.Context(), b.Body, info.Cookie.UserID, id, b.ReplyTo)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(post)
}
