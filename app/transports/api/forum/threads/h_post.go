package threads

import (
	"errors"
	"net/http"

	"github.com/openmultiplayer/web/app/resources/forum"
	"github.com/openmultiplayer/web/app/resources/notification"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
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
		if errors.Is(err, forum.ErrTagNameTooLong) {
			web.StatusBadRequest(w, web.WithSuggestion(err,
				"The name of one of the tags is too long",
				"The character limit for a tag is 24, delete any tags longer than this and retry."))
		} else {
			web.StatusInternalServerError(w, err)
		}
		return
	}

	s.notifications.Subscribe(r.Context(), info.Cookie.UserID, notification.NotificationTypeForumPostResponse, post.ID)

	web.Write(w, post)
}
