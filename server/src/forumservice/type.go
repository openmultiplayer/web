package forumservice

import (
	"time"

	"github.com/openmultiplayer/web/server/src/db"
)

type Author struct {
	ID        string    `json:"id"`
	Email     string    `json:"email"`
	Name      string    `json:"name"`
	Bio       *string   `json:"bio"`
	Admin     bool      `json:"admin"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

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
	Author      Author     `json:"author"`
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
		Author: Author{
			ID:        u.RelationsPost.Author.InnerUser.ID,
			Email:     u.RelationsPost.Author.InnerUser.Email,
			Name:      u.RelationsPost.Author.InnerUser.Name,
			Bio:       u.RelationsPost.Author.InnerUser.Bio,
			Admin:     u.RelationsPost.Author.InnerUser.Admin,
			CreatedAt: u.RelationsPost.Author.InnerUser.CreatedAt,
			UpdatedAt: u.RelationsPost.Author.InnerUser.UpdatedAt,
		},
	}
}
