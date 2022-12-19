package main

import (
	"context"
	"os"
	"os/signal"
	"time"

	"github.com/joho/godotenv"
	_ "github.com/joho/godotenv/autoload"
	"go.uber.org/fx"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/app/resources"
	"github.com/openmultiplayer/web/app/services"
	"github.com/openmultiplayer/web/app/transports/api"
	"github.com/openmultiplayer/web/internal/infrastructure"
)

// Start starts the application and blocks until fatal error
// The server will shut down if the root context is cancelled
// nolint:errcheck
func Start(ctx context.Context) {
	app := fx.New(
		fx.NopLogger,

		resources.Build(),
		services.Build(),
		api.Build(),
		infrastructure.Build(),
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

func main() {
	godotenv.Load()

	ctx, cf := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cf()

	Start(ctx)
}
