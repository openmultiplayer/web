package forum

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/web"
)

type listParams struct {
	Tags   []string  `qstring:"tags"`
	Before time.Time `qstring:"before"`
	Sort   string    `qstring:"sort"`
	Max    int       `qstring:"max"`
}

func (s *service) list(w http.ResponseWriter, r *http.Request) {
	var p listParams
	if !web.ParseQuery(w, r, &p) {
		return
	}

	if p.Before.IsZero() {
		p.Before = time.Now()
	}
	if p.Sort == "" {
		p.Sort = "desc"
	}
	if p.Max == 0 {
		p.Max = 50
	} else if p.Max > 100 {
		p.Max = 100
	}

	// Admins get to see deleted posts
	isAdmin := authentication.IsRequestAdmin(r)

	posts, err := s.repo.GetThreads(r.Context(), p.Tags, p.Before, p.Sort, p.Max, isAdmin)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	type Author struct {
		ID        string    `json:"id"`
		Name      string    `json:"name"`
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

	var data []Post
	for _, post := range posts {
		data = append(data, Post{
			ID:          post.ID,
			Title:       post.Title,
			Slug:        post.Slug,
			Body:        post.Body,
			Short:       post.Short,
			First:       post.First,
			CreatedAt:   post.CreatedAt,
			UpdatedAt:   post.UpdatedAt,
			DeletedAt:   post.DeletedAt,
			UserID:      post.UserID,
			ReplyPostID: post.ReplyPostID,
			RootPostID:  post.ReplyPostID,
			Author: Author{
				ID:        post.Author.ID,
				Name:      post.Author.Name,
				CreatedAt: post.Author.CreatedAt,
				UpdatedAt: post.Author.UpdatedAt,
			},
		})
	}

	json.NewEncoder(w).Encode(data)
}
