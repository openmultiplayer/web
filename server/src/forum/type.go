package forum

import (
	"time"

	"github.com/openmultiplayer/web/server/src/db"
)

type Post struct {
	ID        string     `json:"id"`
	Slug      string     `json:"slug"`
	Title     string     `json:"title"`
	Body      string     `json:"body"`
	Short     string     `json:"short"`
	CreatedAt time.Time  `json:"createdAt"`
	UpdatedAt time.Time  `json:"updatedAt"`
	DeletedAt *time.Time `json:"deletedAt"`
	UserID    string     `json:"userId"`
	TopicID   *string    `json:"topicId"`
	PostID    *string    `json:"postId"`
}

func FromModel(u *db.PostModel) (w *Post) {
	return &Post{
		ID:        u.ID,
		Slug:      u.Slug,
		Title:     u.Title,
		Body:      u.Body,
		Short:     u.Short,
		CreatedAt: u.CreatedAt,
		UpdatedAt: u.UpdatedAt,
		DeletedAt: u.InnerPost.DeletedAt,
		UserID:    u.UserID,
		TopicID:   u.InnerPost.TopicID,
		PostID:    u.InnerPost.PostID,
	}
}

func (w *Post) ToModel() *db.PostModel {
	return &db.PostModel{
		InnerPost: db.InnerPost{
			ID:        w.ID,
			Slug:      w.Slug,
			Title:     w.Title,
			Body:      w.Body,
			Short:     w.Short,
			CreatedAt: w.CreatedAt,
			UpdatedAt: w.UpdatedAt,
			DeletedAt: w.DeletedAt,
			UserID:    w.UserID,
			TopicID:   w.TopicID,
			PostID:    w.PostID,
		},
	}
}
