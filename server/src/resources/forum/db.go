package forum

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/gosimple/slug"
	"github.com/prisma/prisma-client-go/runtime/types"

	"github.com/openmultiplayer/web/server/src/db"
)

var (
	ErrNoTitle      = errors.New("missing title")
	ErrNoBody       = errors.New("missing body")
	ErrUnauthorised = errors.New("unauthorised")
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

	post, err := d.db.Post.
		CreateOne(
			db.Post.Body.Set(body),
			db.Post.Short.Set(short),
			db.Post.First.Set(true),
			db.Post.Author.Link(db.User.ID.Equals(authorID)),

			db.Post.Title.Set(title),
		).
		With(db.Post.Author.Fetch()).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	post, err = d.db.Post.
		FindUnique(
			db.Post.ID.Equals(post.ID),
		).
		With(db.Post.Author.Fetch()).
		Update(
			db.Post.Slug.Set(fmt.Sprintf("%s-%s", post.ID, slug)),
		).
		Exec(ctx)
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

	post, err := d.db.Post.
		CreateOne(
			db.Post.Body.Set(body),
			db.Post.Short.Set(short),
			db.Post.First.Set(false),
			db.Post.Author.Link(db.User.ID.Equals(authorID)),

			db.Post.Root.Link(db.Post.ID.Equals(parentID)),
		).
		With(db.Post.Author.Fetch()).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(post), nil
}

func (d *DB) EditPost(ctx context.Context, authorID, id string, title *string, body *string) (*Post, error) {
	// This could probably be optimised. I am too lazy to do it rn.
	post, err := d.db.Post.
		FindUnique(
			db.Post.ID.Equals(id),
		).
		With(db.Post.Author.Fetch()).
		Exec(ctx)
	if err != nil {
		return nil, err
	}
	if post.Author().ID != authorID {
		return nil, ErrUnauthorised
	}

	post, err = d.db.Post.
		FindUnique(
			db.Post.ID.Equals(id),
		).
		With(db.Post.Author.Fetch()).
		Update(
			db.Post.Title.SetIfPresent(title),
			db.Post.Body.SetIfPresent(body),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(post), err
}

func (d *DB) DeletePost(ctx context.Context, authorID, postID string, force bool) (*Post, error) {
	// This could probably be optimised. I am too lazy to do it rn.
	post, err := d.db.Post.
		FindUnique(
			db.Post.ID.Equals(postID),
		).
		With(db.Post.Author.Fetch()).
		Exec(ctx)
	if err != nil {
		return nil, err
	}
	if force == false {
		if post.Author().ID != authorID {
			return nil, ErrUnauthorised
		}
	}

	_, err = d.db.Post.
		FindUnique(db.Post.ID.Equals(postID)).
		Update(
			db.Post.DeletedAt.Set(time.Now()),
		).
		Exec(ctx)

	return FromModel(post), err
}

func (d *DB) GetThreads(ctx context.Context, tags []string, before time.Time, sort string, max int, deleted bool) ([]Post, error) {
	posts, err := d.db.Post.
		FindMany(
			db.Post.First.Equals(true),
			db.Post.Tags.Every(db.Tag.Name.In(tags)),
			db.Post.CreatedAt.Before(before),
			db.Post.DeletedAt.AfterEqualsIfPresent(timeOrNil(!deleted)),
		).
		With(db.Post.Author.Fetch()).
		Take(max).
		OrderBy(db.Post.CreatedAt.Order(types.Direction(sort))).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	result := []Post{}
	for _, p := range posts {
		p.Body = ""
		result = append(result, *FromModel(&p))
	}

	return result, nil
}

func (d *DB) GetPosts(ctx context.Context, slug string, max, skip int, deleted bool) ([]Post, error) {
	posts, err := d.db.Post.
		FindMany(
			db.Post.Or(
				db.Post.And(
					db.Post.First.Equals(true),
					db.Post.Slug.Equals(slug),
				),
				db.Post.And(
					db.Post.First.Equals(false),
					db.Post.Root.Where(db.Post.Slug.Equals(slug)),
				),
			),
			db.Post.DeletedAt.AfterEqualsIfPresent(timeOrNil(!deleted)),
		).
		With(db.Post.Author.Fetch()).
		Take(max).
		Skip(skip).
		OrderBy(db.Post.CreatedAt.Order(types.ASC)).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	if len(posts) == 0 {
		return nil, nil
	}

	result := []Post{}
	for _, p := range posts {
		result = append(result, *FromModel(&p))
	}

	return result, nil
}
