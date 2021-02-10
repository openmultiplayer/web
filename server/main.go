package main

import (
	"context"
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"

	"github.com/openmultiplayer/web/server/src/app"
	"github.com/openmultiplayer/web/server/src/version"
)

func main() {
	zap.L().Info("service initialising")
	a, err := app.Initialise(context.Background())
	if err != nil {
		zap.L().Fatal("service initialisation failed", zap.Error(err))
	}
	zap.L().Info("service initialised")
	if err := a.Start(); err != nil {
		zap.L().Fatal("service terminated", zap.Error(err))
	}
	zap.L().Info("service terminated gracefully")
}

func init() {
	//nolint:errcheck
	godotenv.Load()
	var env struct {
		Production bool
		LogLevel   zapcore.Level
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
