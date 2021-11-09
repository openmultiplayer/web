package react

import (
	"context"
	"errors"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/resources/forum/post"
	"github.com/prisma/prisma-client-go/runtime/types"
	"golang.org/x/exp/utf8string"
)

var ErrInvalidEmoji = errors.New("invalid emoji codepoint")

type DB struct {
	db *db.PrismaClient
}

func New(db *db.PrismaClient) Repository {
	return &DB{db}
}

func (d *DB) Add(ctx context.Context, userID, postID, emojiID string) (*post.Post, error) {
	s := utf8string.NewString(emojiID)
	var emoji int64
	if s.RuneCount() == 1 {
		// Emoji is a Unicode emoji, store the codepoint integer.
		emoji = int64(s.At(0))
	} else {
		// Custom emojis aren't supported yet.
		return nil, ErrInvalidEmoji
	}

	react, err := d.db.React.
		CreateOne(
			db.React.Emoji.Set(types.BigInt(emoji)),
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
