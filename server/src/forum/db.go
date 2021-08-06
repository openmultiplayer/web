package forum

import (
	"context"

	"github.com/gosimple/slug"

	"github.com/openmultiplayer/web/server/src/db"
)

type DB struct {
	db *db.PrismaClient
}

func New(db *db.PrismaClient) Repository {
	return &DB{db}
}

func (d *DB) CreatePost(
	ctx context.Context,
	title, body, authorID string,
	parent *string,
	tags []string,
) (*Post, error) {
	slug := slug.Make(title)
	short := makeShortBody(body)

	post, err := d.db.Post.CreateOne(
		db.Post.Slug.Set(slug),
		db.Post.Title.Set(title),
		db.Post.Body.Set(body),
		db.Post.Short.Set(short),
		db.Post.Author.Link(db.User.ID.Equals(authorID)),
	).Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(post), nil
}

func (d *DB) EditPost(ctx context.Context, id string, title *string, body *string) (*Post, error) {
	post, err := d.db.Post.FindUnique(db.Post.ID.Equals(id)).Update(
		db.Post.Title.SetIfPresent(title),
		db.Post.Body.SetIfPresent(body),
	).Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(post), err
}

func (d *DB) DeletePost(ctx context.Context, id string) error {
	_, err := d.db.Post.FindUnique(db.Post.ID.Equals(id)).Delete().Exec(ctx)
	return err
}
