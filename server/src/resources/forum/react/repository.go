package react

import (
	"context"

	"github.com/openmultiplayer/web/server/src/resources/forum/post"
)

type Repository interface {
	Add(ctx context.Context, userID, postID, emojiID string) (*post.Post, error)
	Remove(ctx context.Context, postID, reactID string) (*post.Post, error)
}
