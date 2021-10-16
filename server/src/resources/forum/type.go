package forum

import (
	"time"

	"github.com/openmultiplayer/web/server/src/db"
)

type Author struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Admin     bool      `json:"admin"`
	CreatedAt time.Time `json:"createdAt"`
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
	Tags        []string   `json:"tags"`
	Category    Category   `json:"category"`
}

type Category struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type Tag struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Posts int    `json:"posts"`
}

func FromModel(u *db.PostModel) (w *Post) {
	tags := []string{}
	for _, t := range u.RelationsPost.Tags {
		tags = append(tags, t.Name)
	}

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
			Name:      u.RelationsPost.Author.InnerUser.Name,
			Admin:     u.RelationsPost.Author.InnerUser.Admin,
			CreatedAt: u.RelationsPost.Author.InnerUser.CreatedAt,
		},
		Tags: tags,
		Category: Category{
			ID:   u.RelationsPost.Category.ID,
			Name: u.RelationsPost.Category.Name,
		},
	}
}
