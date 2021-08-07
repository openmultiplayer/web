package forum

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type postPostBody struct {
	Body string `json:"body"   valid:"required,stringlength(1|65535)"`
}

func (s *ForumService) postPost(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var b postPostBody
	if !web.ParseBody(w, r, &b) {
		return
	}

	post, err := s.repo.CreatePost(r.Context(), b.Body, info.Cookie.UserID, id)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(post)
}
