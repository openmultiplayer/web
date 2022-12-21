package resources

import (
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/resources/forum/category"
	"github.com/openmultiplayer/web/app/resources/forum/post"
	"github.com/openmultiplayer/web/app/resources/forum/react"
	"github.com/openmultiplayer/web/app/resources/forum/tag"
	"github.com/openmultiplayer/web/app/resources/forum/thread"
	"github.com/openmultiplayer/web/app/resources/notification"
	"github.com/openmultiplayer/web/app/resources/pawndex"
	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/app/resources/user"
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
