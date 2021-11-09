package forum

import (
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/api/forum/categories"
	"github.com/openmultiplayer/web/server/src/api/forum/posts"
	"github.com/openmultiplayer/web/server/src/api/forum/reacts"
	"github.com/openmultiplayer/web/server/src/api/forum/tags"
	"github.com/openmultiplayer/web/server/src/api/forum/threads"
)

func Build() fx.Option {
	return fx.Options(
		categories.Build(),
		posts.Build(),
		threads.Build(),
		tags.Build(),
		reacts.Build(),
	)
}
