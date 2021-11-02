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

type PostMeta struct {
	Author string `json:"author"`
	PostID string `json:"postId"`
}

type Post struct {
	ID         string     `json:"id"`
	Title      *string    `json:"title"`
	Slug       *string    `json:"slug"`
	Body       string     `json:"body"`
	Short      string     `json:"short"`
	First      bool       `json:"first"`
	CreatedAt  time.Time  `json:"createdAt"`
	UpdatedAt  time.Time  `json:"updatedAt"`
	DeletedAt  *time.Time `json:"deletedAt"`
	UserID     string     `json:"userId"`
	RootPostID *string    `json:"rootPostId"`
	Author     Author     `json:"author"`
	Tags       []string   `json:"tags"`
	Category   Category   `json:"category"`
	Posts      int        `json:"posts"`
	ReplyTo    *PostMeta  `json:"replyTo"`
}

type Category struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Colour      string `json:"colour"`
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

	category := Category{}
	if u.RelationsPost.Category != nil {
		category = Category{
			ID:          u.RelationsPost.Category.ID,
			Name:        u.RelationsPost.Category.Name,
			Description: u.RelationsPost.Category.Description,
			Colour:      u.RelationsPost.Category.Colour,
		}
	}

	var replyTo *PostMeta
	if u.RelationsPost.ReplyTo != nil {
		replyTo = &PostMeta{
			Author: u.RelationsPost.Author.Name,
			PostID: u.RelationsPost.ReplyTo.ID,
		}
	}

	return &Post{
		ID:         u.InnerPost.ID,
		Slug:       u.InnerPost.Slug,
		Title:      u.InnerPost.Title,
		Body:       u.InnerPost.Body,
		Short:      u.InnerPost.Short,
		First:      u.InnerPost.First,
		CreatedAt:  u.InnerPost.CreatedAt,
		UpdatedAt:  u.InnerPost.UpdatedAt,
		DeletedAt:  u.InnerPost.DeletedAt,
		UserID:     u.InnerPost.UserID,
		RootPostID: u.InnerPost.RootPostID,
		Author: Author{
			ID:        u.RelationsPost.Author.InnerUser.ID,
			Name:      u.RelationsPost.Author.InnerUser.Name,
			Admin:     u.RelationsPost.Author.InnerUser.Admin,
			CreatedAt: u.RelationsPost.Author.InnerUser.CreatedAt,
		},
		Tags:     tags,
		Category: category,
		ReplyTo:  replyTo,
	}
}
