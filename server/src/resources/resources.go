package resources

import (
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/resources/forum/category"
	"github.com/openmultiplayer/web/server/src/resources/forum/post"
	"github.com/openmultiplayer/web/server/src/resources/forum/react"
	"github.com/openmultiplayer/web/server/src/resources/forum/tag"
	"github.com/openmultiplayer/web/server/src/resources/forum/thread"
	"github.com/openmultiplayer/web/server/src/resources/notification"
	"github.com/openmultiplayer/web/server/src/resources/pawndex"
	"github.com/openmultiplayer/web/server/src/resources/server"
	"github.com/openmultiplayer/web/server/src/resources/user"
)

func Build() fx.Option {
	return fx.Provide(
		server.New,
		category.New,
		post.New,
		tag.New,
		thread.New,
		user.New,
		pawndex.New,
		react.New,
		notification.New,
	)
}
