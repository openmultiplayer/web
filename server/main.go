package main

import (
	"context"
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"

	"github.com/openmultiplayer/server-index/server/src/app"
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

	prod, err := strconv.ParseBool(os.Getenv("PRODUCTION"))
	if _, ok := err.(*strconv.NumError); !ok {
		fmt.Println(err)
		os.Exit(1)
	}

	var config zap.Config
	if prod {
		config = zap.NewProductionConfig()
	} else {
		config = zap.NewDevelopmentConfig()
	}

	var level zapcore.Level
	if err := level.UnmarshalText([]byte(os.Getenv("LOG_LEVEL"))); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	config.Level.SetLevel(level)
	config.EncoderConfig.EncodeTime = zapcore.ISO8601TimeEncoder

	logger, err := config.Build()
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
	zap.ReplaceGlobals(logger)

	if !prod {
		zap.L().Info("logger configured in development mode", zap.String("level", level.String()))
	}
}
