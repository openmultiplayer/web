package forum

import (
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/transports/api/forum/categories"
	"github.com/openmultiplayer/web/app/transports/api/forum/posts"
	"github.com/openmultiplayer/web/app/transports/api/forum/reacts"
	"github.com/openmultiplayer/web/app/transports/api/forum/tags"
	"github.com/openmultiplayer/web/app/transports/api/forum/threads"
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
