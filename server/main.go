package main

import (
	"context"
	"os"
	"os/signal"

	"github.com/joho/godotenv"
	_ "github.com/joho/godotenv/autoload"

	"github.com/openmultiplayer/web/server/src/app"
)

func main() {
	godotenv.Load()

	ctx, cf := signal.NotifyContext(context.Background(), os.Interrupt)
	defer cf()

	app.Start(ctx)
}
