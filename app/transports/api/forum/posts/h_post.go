package posts

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/app/resources/notification"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
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
	if post == nil {
		web.StatusNotFound(w, nil)
		return
	}

	var link string
	if post.Slug != nil {
		link = s.publicAddress + "/discussion/" + *post.Slug
	}

	s.notifications.Notify(
		r.Context(),
		notification.NotificationTypeForumPostResponse,
		id,
		info.Cookie.UserID,
		"Reply",
		fmt.Sprintf("%s: %s", post.Author.Name, post.Short),
		link)

	web.Write(w, post)
}
