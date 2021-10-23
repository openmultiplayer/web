package forum

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type postThreadBody struct {
	Title      string   `json:"title"      valid:"required,stringlength(1|64)"`
	Body       string   `json:"body"       valid:"required,stringlength(1|65535)"`
	Tags       []string `json:"tags"       valid:"required"`
	CategoryID string   `json:"categoryId" valid:"required"`
}

func (s *service) postThread(w http.ResponseWriter, r *http.Request) {
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var b postThreadBody
	if !web.ParseBody(w, r, &b) {
		return
	}

	post, err := s.repo.CreateThread(r.Context(), b.Title, b.Body, info.Cookie.UserID, b.CategoryID, b.Tags)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(post)
}
