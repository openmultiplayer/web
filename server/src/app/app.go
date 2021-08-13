package app

import (
	"context"
	"time"

	"go.uber.org/fx"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/api"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/config"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/docsindex"
	"github.com/openmultiplayer/web/server/src/logger"
	"github.com/openmultiplayer/web/server/src/mailer"
	"github.com/openmultiplayer/web/server/src/mailworker"
	"github.com/openmultiplayer/web/server/src/pawndexworker"
	"github.com/openmultiplayer/web/server/src/pubsub"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/resources"
	"github.com/openmultiplayer/web/server/src/scraper"
	"github.com/openmultiplayer/web/server/src/serververify"
	"github.com/openmultiplayer/web/server/src/serverworker"
)

// Start starts the application and blocks until fatal error
// The server will shut down if the root context is cancelled
// nolint:errcheck
func Start(ctx context.Context) {
	app := fx.New(
		fx.NopLogger,

		fx.Provide(
			config.New,
			db.New,
			pubsub.NewRabbit,
			NewGitHubClient,
			mailer.NewSendGrid,
			docsindex.New,
			authentication.New,
			mailworker.New,
			queryer.NewSAMPQueryer,
			serververify.New,
			scraper.NewPooledScraper,
			serverworker.New,
			authentication.NewGitHubProvider,
			authentication.NewDiscordProvider,
		),

		logger.Build(),
		api.Build(),
		resources.Build(),
		pawndexworker.Build(),
	)

	err := app.Start(ctx)
	if err != nil {
		panic(err)
	}

	// Wait for context cancellation from interrupt signals set up in main().
	<-ctx.Done()

	// Graceful shutdown time is 30 seconds.
	ctx, cf := context.WithTimeout(context.Background(), time.Second*30)
	defer cf()

	if err := app.Stop(ctx); err != nil {
		zap.L().Error("fatal error occurred", zap.Error(err))
	}
}
