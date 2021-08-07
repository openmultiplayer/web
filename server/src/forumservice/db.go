package forumservice

import (
	"context"
	"fmt"
	"time"

	"github.com/gosimple/slug"
	"github.com/prisma/prisma-client-go/runtime/types"

	"github.com/openmultiplayer/web/server/src/db"
)

type DB struct {
	db *db.PrismaClient
}

func New(db *db.PrismaClient) Repository {
	return &DB{db}
}

func (d *DB) CreateThread(
	ctx context.Context,
	title, body, authorID string,
	tags []string,
) (*Post, error) {
	slug := slug.Make(title)
	short := makeShortBody(body)

	post, err := d.db.Post.CreateOne(
		db.Post.Body.Set(body),
		db.Post.Short.Set(short),
		db.Post.First.Set(true),
		db.Post.Author.Link(db.User.ID.Equals(authorID)),

		db.Post.Title.Set(title),
	).Exec(ctx)
	if err != nil {
		return nil, err
	}

	post, err = d.db.Post.FindUnique(
		db.Post.ID.Equals(post.ID),
	).Update(
		db.Post.Slug.Set(fmt.Sprintf("%s-%s", post.ID, slug)),
	).Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(post), nil
}

func (d *DB) CreatePost(
	ctx context.Context,
	body, authorID string,
	parentID string,
) (*Post, error) {
	short := makeShortBody(body)

	post, err := d.db.Post.CreateOne(
		db.Post.Body.Set(body),
		db.Post.Short.Set(short),
		db.Post.First.Set(false),
		db.Post.Author.Link(db.User.ID.Equals(authorID)),

		db.Post.Root.Link(db.Post.ID.Equals(parentID)),
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
	_, err := d.db.Post.
		FindUnique(db.Post.ID.Equals(id)).
		Update(
			db.Post.DeletedAt.Set(time.Now()),
		).
		Exec(ctx)
	return err
}

func (d *DB) GetThreads(ctx context.Context, tags []string, before time.Time, sort string, max int) ([]Post, error) {
	posts, err := d.db.Post.
		FindMany(
			db.Post.First.Equals(true),
			db.Post.Tags.Every(db.Tag.Name.In(tags)),
			db.Post.CreatedAt.Before(before),
			db.Post.DeletedAt.IsNull(),
		).
		Take(max).
		OrderBy(db.Post.CreatedAt.Order(types.Direction(sort))).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	result := []Post{}
	for _, p := range posts {
		result = append(result, *FromModel(&p))
	}

	return result, nil
}

func (d *DB) GetPosts(ctx context.Context, threadID string, max, skip int) ([]Post, error) {
	posts, err := d.db.Post.
		FindMany(
			db.Post.Or(
				db.Post.And(
					db.Post.First.Equals(true),
					db.Post.ID.Equals(threadID),
				),
				db.Post.And(
					db.Post.First.Equals(false),
					db.Post.Root.Where(db.Post.ID.Equals(threadID)),
				),
			),
			db.Post.DeletedAt.IsNull(),
		).
		Take(max).
		Skip(skip).
		OrderBy(db.Post.CreatedAt.Order(types.ASC)).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	result := []Post{}
	for _, p := range posts {
		result = append(result, *FromModel(&p))
	}

	return result, nil
}
