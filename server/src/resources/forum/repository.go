package forum

import (
	"context"
	"time"
)

type Repository interface {
	CreateThread(
		ctx context.Context,
		title, body, authorID, categoryName string,
		tags []string,
	) (*Post, error)

	CreatePost(
		ctx context.Context,
		body, authorID,
		parentID, replyToID string,
	) (*Post, error)

	EditPost(ctx context.Context, authorID, postID string, title *string, body *string) (*Post, error)

	DeletePost(ctx context.Context, authorID, postID string, force bool) (*Post, error)

	GetThreads(
		ctx context.Context,
		tags []string, category string, query string,
		before time.Time, sort string, max int,
		includePosts bool,
		includeDeleted bool,
	) ([]Post, error)

	GetPosts(ctx context.Context, slug string, max, skip int, deleted bool) ([]Post, error)
	GetCategories(ctx context.Context) ([]Category, error)
	GetTags(ctx context.Context, query string) ([]Tag, error)
}
