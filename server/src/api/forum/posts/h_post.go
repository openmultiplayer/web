package posts

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type postBody struct {
	Body    string `json:"body"   valid:"required,stringlength(1|65535)"`
	ReplyTo string `json:"replyTo"`
}

func (s *service) post(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var b postBody
	if !web.ParseBody(w, r, &b) {
		return
	}

	post, err := s.repo.CreatePost(r.Context(), b.Body, info.Cookie.UserID, id, b.ReplyTo)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(post)
}
