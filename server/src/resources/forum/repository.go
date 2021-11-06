package forum

import (
	"context"

	"github.com/openmultiplayer/web/server/src/resources/forum/post"
)

type Repository interface {
	GetTags(ctx context.Context, query string) ([]post.Tag, error)
}
