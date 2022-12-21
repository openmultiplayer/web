package infrastructure

import (
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/internal/cache"
	"github.com/openmultiplayer/web/internal/config"
	"github.com/openmultiplayer/web/internal/db"
	"github.com/openmultiplayer/web/internal/github"
	"github.com/openmultiplayer/web/internal/logger"
)

func Build() fx.Option {
	return fx.Options(
		logger.Build(),
		cache.Build(),
		fx.Provide(
			config.New,
			db.New,
			github.New,
		),
	)
}
