package react

import "github.com/openmultiplayer/web/server/src/db"

type React struct {
	ID    string `json:"id"`
	Emoji string `json:"emoji"`
	User  string `json:"user"`
	Post  string `json:"Post"`
}

func FromModel(model *db.ReactModel) *React {
	return &React{
		ID:    model.ID,
		Emoji: string(rune(model.Emoji)),
		User:  model.RelationsReact.User.ID,
		Post:  model.RelationsReact.Post.ID,
	}
}
