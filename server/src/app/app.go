package app

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"time"

	"github.com/go-chi/chi"
	"github.com/golobby/container"
	"github.com/kelseyhightower/envconfig"
	"github.com/pkg/errors"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/api"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/docsindex"
	"github.com/openmultiplayer/web/server/src/mailer"
	"github.com/openmultiplayer/web/server/src/mailreg"
	"github.com/openmultiplayer/web/server/src/mailworker"
	"github.com/openmultiplayer/web/server/src/pubsub"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/scraper"
	"github.com/openmultiplayer/web/server/src/seed"
	"github.com/openmultiplayer/web/server/src/serverdb"
	"github.com/openmultiplayer/web/server/src/serververify"
	"github.com/openmultiplayer/web/server/src/serverworker"
)

// Config represents environment variable configuration parameters
type Config struct {
	ListenAddr          string `default:"0.0.0.0:8080" split_words:"true"`
	AmqpAddress         string `default:"amqp://rabbit:5672" split_words:"true"`
	HashKey             []byte `required:"true" split_words:"true"`
	BlockKey            []byte `required:"true" split_words:"true"`
	GithubClientID      string `required:"true" split_words:"true"`
	GithubClientSecret  string `required:"true" split_words:"true"`
	DiscordClientID     string `required:"true" split_words:"true"`
	DiscordClientSecret string `required:"true" split_words:"true"`
	SendgridAPIKey      string `required:"true" split_words:"true"`
}

func build() {
	// -
	// Config
	// -
	container.Singleton(func() Config {
		config, err := config()
		if err != nil {
			panic(errors.Wrap(err, "failed to load config"))
		}
		return config
	})

	// -
	// Prisma
	// -
	container.Singleton(func() *db.PrismaClient {
		prisma := db.NewClient()
		if err := prisma.Connect(); err != nil {
			panic(errors.Wrap(err, "failed to connect to prisma"))
		}
		return prisma
	})

	// -
	// RabbitMQ
	// -
	container.Singleton(func(config Config) pubsub.Bus {
		ps, err := pubsub.NewRabbit(config.AmqpAddress)
		if err != nil {
			panic(errors.Wrap(err, "failed to connect to rabbitmq"))
		}
		return ps
	})

	// -
	// Mailer
	// -
	container.Singleton(func(config Config) mailer.Mailer {
		return mailer.NewSendGrid(config.SendgridAPIKey)
	})

	// -
	// Mail Worker
	// -
	container.Singleton(func(ps pubsub.Bus, m mailer.Mailer) *mailworker.Worker {
		mailreg.Init("emails") // assume the binary is exected from the repo root
		queueEmail := ps.Declare("system.email")
		return mailworker.New(queueEmail, ps, m)
	})

	// -
	// Auther
	// -
	container.Singleton(func(config Config, prisma *db.PrismaClient) *authentication.State {
		return authentication.New(prisma, config.HashKey, config.BlockKey)
	})

	// -
	// Server Database
	// -
	container.Singleton(serverdb.NewPrisma)

	// -
	// Server Queryer
	// -
	container.Singleton(queryer.NewSAMPQueryer)

	// -
	// Docs Search Index
	// -
	container.Singleton(func() *docsindex.Index {
		idx, err := docsindex.New("docs.bleve", "docs/")
		if err != nil {
			panic(errors.Wrap(err, "failed to create docs index"))
		}
		return idx
	})

	// -
	// Server Verifier
	// -
	container.Singleton(serververify.New)

	// -
	// Server Scraper
	// -
	container.Singleton(scraper.NewPooledScraper)

	// -
	// Server Worker
	// -
	container.Singleton(serverworker.New)

	// -
	// OAuth2 Services
	// -
	container.Singleton(func(config Config, db *db.PrismaClient, mw *mailworker.Worker) *authentication.GitHubProvider {
		return authentication.NewGitHubProvider(db, mw, config.GithubClientID, config.GithubClientSecret)
	})
	container.Singleton(func(config Config, db *db.PrismaClient, mw *mailworker.Worker) *authentication.DiscordProvider {
		return authentication.NewDiscordProvider(db, mw, config.DiscordClientID, config.DiscordClientSecret)
	})

	// -
	// HTTP API
	// -
	container.Singleton(api.New)
}

// Start starts the application and blocks until fatal error
// The server will shut down if the root context is cancelled
func Start(ctx context.Context) {
	build()

	defer func() {
		var prisma *db.PrismaClient
		container.Make(&prisma)
		err := prisma.Disconnect()
		if err != nil {
			panic(fmt.Errorf("could not disconnect: %w", err))
		}
	}()

	go func() {
		var api *chi.Mux
		container.Make(&api)
		s := http.Server{
			Handler:     api,
			Addr:        "0.0.0.0:80",
			BaseContext: func(net.Listener) context.Context { return ctx },
		}

		if err := s.ListenAndServe(); err != nil {
			zap.L().Error("http server stopped unexpectedly", zap.Error(err))
		}
	}()

	go func() {
		var w *serverworker.Worker
		container.Make(&w)
		if err := w.RunWithSeed(ctx, time.Second*30, seed.Addresses); err != nil {
			zap.L().Error("index worker stopped unexpectedly", zap.Error(err))
		}
	}()

	go func() {
		var mw *mailworker.Worker
		container.Make(&mw)
		if err := mw.Run(); err != nil {
			zap.L().Fatal("mailworker stopped unexpectedly", zap.Error(err))
		}
	}()

	<-ctx.Done()

	zap.L().Error("context cancelled", zap.Error(ctx.Err()))
}

func config() (c Config, err error) {
	if err = envconfig.Process("", &c); err != nil {
		return c, err
	}

	return
}
