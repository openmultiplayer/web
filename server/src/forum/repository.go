package forum

import "context"

type Repository interface {
	CreatePost(
		ctx context.Context,
		title, body, authorID string,
		parent *string,
		tags []string,
	) (*Post, error)

	EditPost(ctx context.Context, id string, title *string, body *string) (*Post, error)

	DeletePost(ctx context.Context, id string) error
}
