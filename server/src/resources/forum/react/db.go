package react

import (
	"context"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/resources/forum/post"
)

type DB struct {
	db *db.PrismaClient
}

func New(db *db.PrismaClient) Repository {
	return &DB{db}
}

func (d *DB) Add(ctx context.Context, userID, postID, emojiID string) (*post.Post, error) {
	react, err := d.db.React.
		CreateOne(
			db.React.Emoji.Set(0),
			db.React.User.Link(
				db.User.ID.Equals(userID),
			),
			db.React.Post.Link(
				db.Post.ID.Equals(postID),
			),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	p, err := d.db.Post.
		FindUnique(db.Post.ID.Equals(postID)).
		Update(
			db.Post.Reacts.Link(
				db.React.ID.Equals(react.ID),
			),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return post.FromModel(p), nil
}

func (d *DB) Remove(ctx context.Context, postID, reactID string) (*post.Post, error) {
	p, err := d.db.React.
		FindUnique(
			db.React.ID.Equals(reactID),
		).
		With(
			db.React.Post.Fetch(),
		).
		Delete().
		Exec(ctx)
	if err != nil {
		return nil, err
	}
	return post.FromModel(p.RelationsReact.Post), nil
}
