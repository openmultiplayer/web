package thread

import (
	"context"
	"time"

	"github.com/openmultiplayer/web/server/src/resources/forum/post"
)

type Repository interface {
	CreateThread(
		ctx context.Context,
		title, body, authorID, categoryName string,
		tags []string,
	) (*post.Post, error)

	GetThreads(
		ctx context.Context,
		tags []string, category string, query string,
		before time.Time, sort string, max int,
		includePosts bool,
		includeDeleted bool,
		includeAdmin bool,
	) ([]post.Post, error)

	GetPostCounts(ctx context.Context) (map[string]int, error)

	Update(ctx context.Context, id string, title, category *string, pinned *bool) (*post.Post, error)

	Delete(ctx context.Context, id, authorID string) (int, error)

	CreateLegacyThread(
		ctx context.Context,
		title string,
		category string,
		tags []string,
		first post.Post,
		replies []post.Post,
	) (*post.Post, error)
}
