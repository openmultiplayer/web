package resources

import (
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/resources/pawndex"
	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/app/resources/user"
)

func Build() fx.Option {
	return fx.Provide(
		server.New,
		user.New,
		pawndex.New,
	)
}
