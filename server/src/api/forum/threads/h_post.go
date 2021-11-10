package threads

import (
	"net/http"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type postBody struct {
	Title    string   `json:"title"      valid:"required,stringlength(1|64)"`
	Body     string   `json:"body"       valid:"required,stringlength(1|65535)"`
	Tags     []string `json:"tags"       valid:"required"`
	Category string   `json:"category"   valid:"required"`
}

func (s *service) post(w http.ResponseWriter, r *http.Request) {
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var b postBody
	if !web.ParseBody(w, r, &b) {
		return
	}

	post, err := s.threads.CreateThread(r.Context(), b.Title, b.Body, info.Cookie.UserID, b.Category, b.Tags)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	web.Write(w, post)
}
