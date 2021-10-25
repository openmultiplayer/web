package forum

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/gosimple/slug"

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
	title, body, authorID, categoryID string,
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
			db.Post.Category.Link(db.Category.ID.Equals(categoryID)),
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

func (d *DB) GetThreads(
	ctx context.Context,
	tags []string,
	category string,
	query string,
	before time.Time,
	sort string,
	max int,
	deleted bool,
) ([]Post, error) {
	filters := []db.PostWhereParam{
		db.Post.First.Equals(true),
	}

	if !before.IsZero() {
		filters = append(filters, db.Post.CreatedAt.Before(before))
	}
	if category != "" {
		filters = append(filters, db.Post.Category.Where(db.Category.Name.Equals(category)))
	}
	if query != "" {
		filters = append(filters, db.Post.Title.Contains(query))
	}
	if len(tags) > 0 {
		for _, v := range tags {
			filters = append(filters, db.Post.Tags.Some(db.Tag.Name.Equals(v)))
		}
	}
	if max < 1 {
		max = 1
	}
	if max > 100 {
		max = 100
	}

	posts, err := d.db.Post.
		FindMany(filters...).
		With(
			db.Post.Author.Fetch(),
			db.Post.Tags.Fetch(),
			db.Post.Category.Fetch(),
		).
		Take(max).
		OrderBy(db.Post.CreatedAt.Order(db.Direction(sort))).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	result := []Post{}
	for _, p := range posts {
		// if "show deleted" is false, then filter out posts with a deleted date
		if deleted == false && p.InnerPost.DeletedAt != nil {
			continue
		}

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
		).
		With(
			db.Post.Author.Fetch(),
			db.Post.Category.Fetch(),
		).
		Take(max).
		Skip(skip).
		OrderBy(db.Post.CreatedAt.Order(db.ASC)).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	if len(posts) == 0 {
		return nil, nil
	}

	result := []Post{}
	for _, p := range posts {
		// if "show deleted" is false, then filter out posts with a deleted date
		if deleted == false && p.InnerPost.DeletedAt != nil {
			continue
		}

		result = append(result, *FromModel(&p))
	}

	return result, nil
}

func (d *DB) GetCategories(ctx context.Context) ([]Category, error) {
	categories, err := d.db.Category.FindMany().Exec(ctx)
	if err != nil {
		return nil, err
	}

	if len(categories) == 0 {
		return nil, nil
	}

	result := []Category{}
	for _, c := range categories {
		result = append(result, Category{
			ID:   c.ID,
			Name: c.Name,
		})
	}

	return result, nil
}

func (d *DB) GetTags(ctx context.Context, query string) ([]Tag, error) {
	var tags []Tag
	err := d.db.Prisma.Raw.QueryRaw(`
		select
			t.id, t.name, count(*) as posts
		from
			"_TagToPost" ttp
		inner join
			"Tag" t on ttp."B" = t.id
		inner join
			"Post" p on ttp."A" = p.id
		where t.name like $1
		group by t.id
	`, query+"%").Exec(ctx, &tags)
	if err != nil {
		return nil, err
	}

	if len(tags) == 0 {
		return nil, nil
	}

	return tags, nil
}
