package react

import "github.com/openmultiplayer/web/internal/db"

type React struct {
	ID    string `json:"id"`
	Emoji string `json:"emoji"`
	User  string `json:"user"`
	Post  string `json:"post"`
}

func FromModel(model *db.ReactModel, postID string) *React {
	return &React{
		ID:    model.ID,
		Emoji: model.Emoji,
		User:  model.RelationsReact.User.ID,
		Post:  postID,
	}
}
