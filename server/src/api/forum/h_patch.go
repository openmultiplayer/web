package forum

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type patchBody struct {
	Title string `json:"parent" valid:"stringlength(1|64)"`
	Body  string `json:"body"   valid:"stringlength(1|65535)"`
}

func (s *ForumService) patch(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var b patchBody
	if !web.ParseBody(w, r, b) {
		return
	}

	post, err := s.repo.EditPost(r.Context(), info.Cookie.UserID, id, &b.Title, &b.Body)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	json.NewEncoder(w).Encode(post)
}
