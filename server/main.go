package main

import (
	"context"
	"fmt"
	"os"
	"os/signal"

	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"

	"github.com/openmultiplayer/web/server/src/app"
	"github.com/openmultiplayer/web/server/src/version"
)

func main() {
	ctx, cf := withSignal(context.Background())
	defer cf()

	zap.L().Info("service initialising")
	app.Start(ctx)
	zap.L().Info("service terminated")
}

// withSignal returns a context that's cancelled when the process is interrupted
func withSignal(ctx context.Context) (context.Context, context.CancelFunc) {
	child, cancel := context.WithCancel(ctx)
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		select {
		case <-c:
			cancel()
		case <-ctx.Done():
		}
	}()
	return child, cancel
}

func init() {
	//nolint:errcheck
	godotenv.Load()
	var env struct {
		Production bool          `envconfig:"PRODUCTION" default:"false"`
		LogLevel   zapcore.Level `envconfig:"LOG_LEVEL"  default:"info"`
	}
	envconfig.MustProcess("", &env)

	var config zap.Config
	if env.Production {
		config = zap.NewProductionConfig()
		config.InitialFields = map[string]interface{}{"v": version.Version}
	} else {
		config = zap.NewDevelopmentConfig()
	}

	config.Level.SetLevel(env.LogLevel)
	config.EncoderConfig.EncodeTime = zapcore.ISO8601TimeEncoder

	logger, err := config.Build()
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	zap.ReplaceGlobals(logger)

	if !env.Production {
		zap.L().Info("logger configured in development mode", zap.String("level", env.LogLevel.String()))
	}
}
