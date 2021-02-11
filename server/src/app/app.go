package app

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"time"

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
	"github.com/openmultiplayer/web/server/src/worker"
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

type App struct{}

func Initialise() (app *App, err error) {
	app = &App{}

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
		if err = prisma.Connect(); err != nil {
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
	container.Singleton(func(prisma *db.PrismaClient) serverdb.Storer {
		return serverdb.NewPrisma(prisma)
	})

	// -
	// Server Database
	// -
	container.Singleton(func() queryer.Queryer {
		return &queryer.SAMPQueryer{}
	})

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
	container.Singleton(func(prisma *db.PrismaClient) *serververify.Verifyer {
		return serververify.New(prisma)
	})

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
	// Server Scraper
	// -
	container.Singleton(func(q queryer.Queryer) scraper.Scraper {
		return &scraper.PooledScraper{Q: q}
	})

	return
}

// Start starts the application and blocks until fatal error
// The server will shut down if the root context is cancelled
func (app *App) Start(ctx context.Context) {
	defer func() {
		var prisma *db.PrismaClient
		container.Make(&prisma)
		err := prisma.Disconnect()
		if err != nil {
			panic(fmt.Errorf("could not disconnect: %w", err))
		}
	}()

	go func() {
		s := http.Server{
			Handler:     api.New(),
			Addr:        "0.0.0.0:80",
			BaseContext: func(net.Listener) context.Context { return ctx },
		}

		if err := s.ListenAndServe(); err != nil {
			zap.L().Error("http server stopped unexpectedly", zap.Error(err))
		}
	}()

	go func() {
		w := worker.New()
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
