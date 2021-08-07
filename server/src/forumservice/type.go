package forumservice

import (
	"time"

	"github.com/openmultiplayer/web/server/src/db"
)

type Post struct {
	ID          string     `json:"id"`
	Title       *string    `json:"title"`
	Slug        *string    `json:"slug"`
	Body        string     `json:"body"`
	Short       string     `json:"short"`
	First       bool       `json:"first"`
	CreatedAt   time.Time  `json:"createdAt"`
	UpdatedAt   time.Time  `json:"updatedAt"`
	DeletedAt   *time.Time `json:"deletedAt"`
	UserID      string     `json:"userId"`
	ReplyPostID *string    `json:"replyPostId"`
	RootPostID  *string    `json:"rootPostId"`
}

func FromModel(u *db.PostModel) (w *Post) {
	return &Post{
		ID:          u.InnerPost.ID,
		Slug:        u.InnerPost.Slug,
		Title:       u.InnerPost.Title,
		Body:        u.InnerPost.Body,
		Short:       u.InnerPost.Short,
		First:       u.InnerPost.First,
		CreatedAt:   u.InnerPost.CreatedAt,
		UpdatedAt:   u.InnerPost.UpdatedAt,
		DeletedAt:   u.InnerPost.DeletedAt,
		UserID:      u.InnerPost.UserID,
		ReplyPostID: u.InnerPost.ReplyPostID,
		RootPostID:  u.InnerPost.RootPostID,
	}
}

func (w *Post) ToModel() *db.PostModel {
	return &db.PostModel{
		InnerPost: db.InnerPost{
			ID:          w.ID,
			Slug:        w.Slug,
			Title:       w.Title,
			Body:        w.Body,
			Short:       w.Short,
			First:       w.First,
			CreatedAt:   w.CreatedAt,
			UpdatedAt:   w.UpdatedAt,
			DeletedAt:   w.DeletedAt,
			UserID:      w.UserID,
			ReplyPostID: w.ReplyPostID,
			RootPostID:  w.RootPostID,
		},
	}
}
