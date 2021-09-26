package forum

import (
	"context"
	"time"
)

type Repository interface {
	CreateThread(
		ctx context.Context,
		title, body, authorID, categoryID string,
		tags []string,
	) (*Post, error)

	CreatePost(
		ctx context.Context,
		body, authorID,
		parentID string,
	) (*Post, error)

	EditPost(ctx context.Context, authorID, postID string, title *string, body *string) (*Post, error)

	DeletePost(ctx context.Context, authorID, postID string, force bool) (*Post, error)

	GetThreads(ctx context.Context, tags []string, before time.Time, sort string, max int, deleted bool) ([]Post, error)
	GetPosts(ctx context.Context, slug string, max, skip int, deleted bool) ([]Post, error)
	GetCategories(ctx context.Context) ([]Category, error)
}
