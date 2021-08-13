package resources

import (
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/resources/forum"
	"github.com/openmultiplayer/web/server/src/resources/server"
	"github.com/openmultiplayer/web/server/src/resources/user"
)

func Build() fx.Option {
	return fx.Provide(
		server.New,
		forum.New,
		user.New,
	)
}
