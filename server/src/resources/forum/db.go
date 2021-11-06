package forum

import (
	"context"
	"fmt"
	"time"

	"github.com/gosimple/slug"
	"github.com/pkg/errors"

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
	title, body, authorID, categoryName string,
	tags []string,
) (*Post, error) {
	slug := slug.Make(title)
	short := makeShortBody(body)

	tagset, err := d.createTags(ctx, tags)
	if err != nil {
		return nil, errors.Wrap(err, "failed to upsert tags for linking to post")
	}

	additional := []db.PostSetParam{
		db.Post.Title.Set(title),
		db.Post.Category.Link(db.Category.Name.Equals(categoryName)),
		db.Post.Tags.Link(tagset...),
	}

	post, err := d.db.Post.
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

	post, err = d.db.Post.
		FindUnique(
			db.Post.ID.Equals(post.ID),
		).
		With(
			db.Post.Author.Fetch(),
			db.Post.Category.Fetch(),
			db.Post.Tags.Fetch(),
		).
		Update(
			db.Post.Slug.Set(fmt.Sprintf("%s-%s", post.ID, slug)),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(post), nil
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

func (d *DB) CreatePost(
	ctx context.Context,
	body, authorID string,
	parentID, replyToID string,
) (*Post, error) {
	short := makeShortBody(body)

	optional := []db.PostSetParam{
		db.Post.Root.Link(db.Post.ID.Equals(parentID)),
	}

	if replyToID != "" {
		optional = append(optional, db.Post.ReplyTo.Link(db.Post.ID.Equals(replyToID)))
	}

	post, err := d.db.Post.
		CreateOne(
			db.Post.Body.Set(body),
			db.Post.Short.Set(short),
			db.Post.First.Set(false),
			db.Post.Author.Link(db.User.ID.Equals(authorID)),

			optional...,
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
		With(
			db.Post.Author.Fetch(),
			db.Post.Tags.Fetch(),
			db.Post.Category.Fetch(),
		).
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
	includePosts bool,
	includeDeleted bool,
	includeAdmin bool,
) ([]Post, error) {
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

	result := []Post{}
	for _, p := range posts {
		p.Body = ""
		post := *FromModel(&p)
		post.Posts = counts[post.ID]
		result = append(result, post)
	}

	return result, nil
}

func (d *DB) GetPosts(ctx context.Context, slug string, max, skip int, deleted, admin bool) ([]Post, error) {
	filters := []db.PostWhereParam{
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
	}

	if !admin {
		filters = append(filters, db.Post.Category.Where(
			db.Category.Admin.Equals(false),
		))
	}

	posts, err := d.db.Post.
		FindMany(filters...).
		With(
			db.Post.Author.Fetch(),
			db.Post.Category.Fetch(),
			db.Post.Tags.Fetch(),
			db.Post.ReplyTo.Fetch().With(
				db.Post.Author.Fetch(),
			),
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

func (d *DB) GetCategories(ctx context.Context, admin bool) ([]Category, error) {
	filters := []db.CategoryWhereParam{}

	if !admin {
		filters = append(filters, db.Category.Admin.Equals(false))
	}

	categories, err := d.db.Category.
		FindMany(filters...).
		OrderBy(
			db.Category.Sort.Order(db.SortOrderAsc),
		).
		With(
			db.Category.Posts.
				Fetch(
					db.Post.First.Equals(true),
					db.Post.DeletedAt.IsNull(),
				).
				With(
					db.Post.Author.Fetch(),
				).
				Take(5).
				OrderBy(db.Post.UpdatedAt.Order(db.SortOrderDesc)),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	if len(categories) == 0 {
		return nil, nil
	}

	// NOTE:
	// Lazy two queries because Prisma doesn't yet support Count aggregations.
	// I could write the above query as raw SQL too but... screw that. Joins are
	// super annoying to get nested data out of because SQL is awful. So for now
	// there are two separate queries and the data is joined below. Besides,
	// there won't be many categories anyway so it's not going to affect
	// performance much.
	type CategoryPostCount struct {
		ID    string `json:"id"`
		Name  string `json:"name"`
		Sort  string `json:"sort"`
		Posts int    `json:"posts"`
	}
	var categoryPostsList []CategoryPostCount
	d.db.Prisma.QueryRaw(`
		select c.id, c.name, c.sort, count(*) as posts
		from "Category" c
		inner join "Post" p on c.id = p."categoryId"
		group by c.id
		order by c.sort asc
	`).Exec(ctx, &categoryPostsList)
	categoryPosts := make(map[string]int)
	for _, c := range categoryPostsList {
		categoryPosts[c.ID] = c.Posts
	}

	result := []Category{}
	for _, c := range categories {
		category := CategoryFromModel(&c)
		category.PostCount = categoryPosts[c.ID]
		result = append(result, *category)
	}

	return result, nil
}

func (d *DB) DeleteCategory(ctx context.Context, id string, moveto string) (*Category, error) {
	movePosts := d.db.Post.
		FindMany(
			db.Post.Category.Where(
				db.Category.ID.Equals(id),
			),
		).
		Update(
			db.Post.CategoryID.Set(moveto),
		).
		Tx()

	deleteCategory := d.db.Category.
		FindUnique(
			db.Category.ID.Equals(id),
		).
		Delete().
		Tx()

	err := d.db.Prisma.Transaction(
		movePosts,
		deleteCategory,
	).Exec(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "failed to perform move+delete transaction")
	}

	return CategoryFromModel(deleteCategory.Result()), nil
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

func (d *DB) CreateCategory(ctx context.Context, name, desc, colour string, admin bool) (*Category, error) {
	c, err := d.db.Category.
		UpsertOne(db.Category.Name.Equals(name)).
		Create(
			db.Category.Name.Set(name),
			db.Category.Description.Set(desc),
			db.Category.Colour.Set(colour),
			db.Category.Admin.Set(admin),
		).
		Update(
			db.Category.Name.Set(name),
			db.Category.Description.Set(desc),
			db.Category.Colour.Set(colour),
			db.Category.Admin.Set(admin),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}
	return CategoryFromModel(c), nil
}

func (d *DB) UpdateCategory(ctx context.Context, id string, name, desc, colour *string, sort *int) (*Category, error) {
	c, err := d.db.Category.
		FindUnique(db.Category.ID.Equals(id)).
		Update(
			db.Category.Name.SetIfPresent(name),
			db.Category.Description.SetIfPresent(desc),
			db.Category.Colour.SetIfPresent(colour),
			db.Category.Sort.SetIfPresent(sort),
		).
		Exec(ctx)

	return CategoryFromModel(c), err
}

func (d *DB) CreateLegacyThread(
	ctx context.Context,
	title string,
	categoryName string,
	first Post,
	replies []Post,
) (*Post, error) {
	slug := slug.Make(title)
	short := makeShortBody(first.Body)

	var firstUpdatedAt *time.Time
	if !first.UpdatedAt.IsZero() {
		firstUpdatedAt = &first.UpdatedAt
	} else {
		firstUpdatedAt = &first.CreatedAt
	}

	additional := []db.PostSetParam{
		db.Post.Title.Set(title),
		db.Post.Category.Link(db.Category.Name.Equals(categoryName)),

		db.Post.CreatedAt.Set(first.CreatedAt),
		db.Post.UpdatedAt.SetIfPresent(firstUpdatedAt),
	}

	post, err := d.db.Post.
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
		FindUnique(db.Post.ID.Equals(post.ID)).
		Update(
			db.Post.Slug.Set(fmt.Sprintf("%s-%s", post.ID, slug)),
			db.Post.UpdatedAt.SetIfPresent(&first.CreatedAt), // keep the updated date old
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	parentID := post.ID

	for _, r := range replies {
		short := makeShortBody(r.Body)

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

	return FromModel(post), nil
}
