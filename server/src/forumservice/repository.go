package forumservice

import (
	"context"
	"time"
)

type Repository interface {
	CreateThread(
		ctx context.Context,
		title, body, authorID string,
		tags []string,
	) (*Post, error)

	CreatePost(
		ctx context.Context,
		body, authorID string,
		parentID string,
	) (*Post, error)

	EditPost(ctx context.Context, authorID, postID string, title *string, body *string) (*Post, error)

	DeletePost(ctx context.Context, authorID, postID string) error

	GetThreads(ctx context.Context, tags []string, before time.Time, sort string, max int) ([]Post, error)
	GetPosts(ctx context.Context, slug string, max, skip int) ([]Post, error)
}
