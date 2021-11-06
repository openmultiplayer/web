package thread

import (
	"context"
	"fmt"
	"time"

	"github.com/gosimple/slug"
	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/resources/forum"
	"github.com/openmultiplayer/web/server/src/resources/forum/post"
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
	title, body, authorID, categoryName string,
	tags []string,
) (*post.Post, error) {
	slug := slug.Make(title)
	short := forum.MakeShortBody(body)

	tagset, err := d.createTags(ctx, tags)
	if err != nil {
		return nil, errors.Wrap(err, "failed to upsert tags for linking to post")
	}

	additional := []db.PostSetParam{
		db.Post.Title.Set(title),
		db.Post.Category.Link(db.Category.Name.Equals(categoryName)),
		db.Post.Tags.Link(tagset...),
	}

	p, err := d.db.Post.
		CreateOne(
			db.Post.Body.Set(body),
			db.Post.Short.Set(short),
			db.Post.First.Set(true),
			db.Post.Author.Link(db.User.ID.Equals(authorID)),

			additional...,
		).
		With(db.Post.Author.Fetch()).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	p, err = d.db.Post.
		FindUnique(
			db.Post.ID.Equals(p.ID),
		).
		With(
			db.Post.Author.Fetch(),
			db.Post.Category.Fetch(),
			db.Post.Tags.Fetch(),
		).
		Update(
			db.Post.Slug.Set(fmt.Sprintf("%s-%s", p.ID, slug)),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return post.FromModel(p), nil
}

func (d *DB) createTags(ctx context.Context, tags []string) ([]db.TagWhereParam, error) {
	setters := []db.TagWhereParam{}
	for _, tag := range tags {
		_, err := d.db.Tag.
			UpsertOne(db.Tag.Name.Equals(tag)).
			Update().
			Create(db.Tag.Name.Set(tag)).
			Exec(ctx)
		if err != nil {
			return nil, errors.Wrap(err, "failed to upsert tag")
		}
		setters = append(setters, db.Tag.Name.Equals(tag))
	}
	return setters, nil
}

func (d *DB) CreateLegacyThread(
	ctx context.Context,
	title string,
	categoryName string,
	tags []string,
	first post.Post,
	replies []post.Post,
) (*post.Post, error) {
	slug := slug.Make(title)
	short := forum.MakeShortBody(first.Body)

	var firstUpdatedAt *time.Time
	if !first.UpdatedAt.IsZero() {
		firstUpdatedAt = &first.UpdatedAt
	} else {
		firstUpdatedAt = &first.CreatedAt
	}

	tagset, err := d.createTags(ctx, tags)
	if err != nil {
		return nil, errors.Wrap(err, "failed to upsert tags for linking to post")
	}

	additional := []db.PostSetParam{
		db.Post.Title.Set(title),
		db.Post.Category.Link(db.Category.Name.Equals(categoryName)),
		db.Post.Tags.Link(tagset...),

		db.Post.CreatedAt.Set(first.CreatedAt),
		db.Post.UpdatedAt.SetIfPresent(firstUpdatedAt),
	}

	p, err := d.db.Post.
		CreateOne(
			db.Post.Body.Set(first.Body),
			db.Post.Short.Set(short),
			db.Post.First.Set(true),
			db.Post.Author.Link(db.User.ID.Equals(first.Author.ID)),

			additional...,
		).
		With(db.Post.Author.Fetch()).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	_, err = d.db.Post.
		FindUnique(db.Post.ID.Equals(p.ID)).
		Update(
			db.Post.Slug.Set(fmt.Sprintf("%s-%s", p.ID, slug)),
			db.Post.UpdatedAt.SetIfPresent(&first.CreatedAt), // keep the updated date old
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	parentID := p.ID

	for _, r := range replies {
		short := forum.MakeShortBody(r.Body)

		var updatedAt *time.Time
		if !r.UpdatedAt.IsZero() {
			updatedAt = &r.UpdatedAt
		} else {
			updatedAt = &r.CreatedAt
		}

		optional := []db.PostSetParam{
			db.Post.Root.Link(db.Post.ID.Equals(parentID)),

			db.Post.CreatedAt.Set(r.CreatedAt),
			db.Post.UpdatedAt.SetIfPresent(updatedAt),
		}

		_, err = d.db.Post.
			CreateOne(
				db.Post.Body.Set(r.Body),
				db.Post.Short.Set(short),
				db.Post.First.Set(false),
				db.Post.Author.Link(db.User.ID.Equals(r.Author.ID)),

				optional...,
			).
			With(db.Post.Author.Fetch()).
			Exec(ctx)
		if err != nil {
			return nil, err
		}

	}

	return post.FromModel(p), nil
}

func (d *DB) GetThreads(
	ctx context.Context,
	tags []string,
	category string,
	query string,
	before time.Time,
	sort string,
	max int,
	includePosts bool,
	includeDeleted bool,
	includeAdmin bool,
) ([]post.Post, error) {
	filters := []db.PostWhereParam{}

	if !before.IsZero() {
		filters = append(filters, db.Post.CreatedAt.Before(before))
	}
	if category != "" {
		filters = append(filters, db.Post.Category.Where(db.Category.Name.Equals(category)))
	}
	if query != "" {
		filters = append(filters, db.Post.Title.Search(query), db.Post.Body.Search(query))
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
	if !includePosts {
		filters = append(filters, db.Post.First.Equals(true))
	}
	if includeDeleted {
		filters = append(filters, db.Post.Or(
			db.Post.DeletedAt.Lte(time.Now()),
			db.Post.DeletedAt.IsNull()),
		)
	} else {
		filters = append(filters, db.Post.DeletedAt.IsNull())
	}
	if !includeAdmin {
		filters = append(filters, db.Post.Category.Where(
			db.Category.Admin.Equals(false),
		))
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

	counts, err := d.GetPostCounts(ctx)
	if err != nil {
		return nil, err
	}

	result := []post.Post{}
	for _, p := range posts {
		p.Body = ""
		newpost := *post.FromModel(&p)
		newpost.Posts = counts[p.ID]
		result = append(result, newpost)
	}

	return result, nil
}

func (d *DB) GetPostCounts(ctx context.Context) (map[string]int, error) {
	type PostCount struct {
		PostID string `json:"rootPostId"`
		Count  int    `json:"count"`
	}

	var counts []PostCount
	err := d.db.Prisma.Raw.QueryRaw(`
		with recursive counts AS(
			select id, "rootPostId"
			from public."Post"
			where "rootPostId" is not null

			union

			select s.id, s."rootPostId"
			from public."Post" s
			inner join counts c on c.id = s."rootPostId"
		) select "rootPostId", count(*) from counts
		group by "rootPostId"`).
		Exec(ctx, &counts)
	if err != nil {
		return nil, err
	}

	result := make(map[string]int)
	for _, c := range counts {
		result[c.PostID] = c.Count
	}

	return result, nil
}
