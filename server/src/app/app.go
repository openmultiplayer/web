package app

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"time"

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

// App stores root application state
type App struct {
	config Config
	server http.Server
	prisma *db.PrismaClient
	ctx    context.Context
	cancel context.CancelFunc
	worker *worker.Worker
}

func Initialise(root context.Context) (app *App, err error) {
	app = &App{}

	app.config, err = config()
	if err != nil {
		return nil, errors.Wrap(err, "failed to load config")
	}

	app.ctx, app.cancel = WithSignal(root)

	app.prisma = db.NewClient()
	if err = app.prisma.Connect(); err != nil {
		return nil, errors.Wrap(err, "failed to connect to prisma")
	}

	ps, err := pubsub.NewRabbit(app.config.AmqpAddress)
	if err != nil {
		return nil, errors.Wrap(err, "failed to connect to rabbitmq")
	}

	queueEmail := ps.Declare("system.email")

	mailreg.Init("emails") // assume the binary is exected from the repo root
	mailworker.Init(queueEmail, ps, mailer.NewSendGrid(app.config.SendgridAPIKey))
	auth := authentication.New(app.prisma, app.config.HashKey, app.config.BlockKey)

	storage := serverdb.NewPrisma(app.prisma)
	sampqueryer := &queryer.SAMPQueryer{}

	idx, err := docsindex.New("docs.bleve", "docs/")
	if err != nil {
		return nil, errors.Wrap(err, "failed to create docs index")
	}

	oaGitHub := authentication.NewGitHubProvider(app.prisma, app.config.GithubClientID, app.config.GithubClientSecret)
	oaDiscord := authentication.NewDiscordProvider(app.prisma, app.config.DiscordClientID, app.config.DiscordClientSecret)

	verifier := serververify.New(app.prisma)

	app.server = http.Server{
		Handler: api.New(app.ctx, auth, app.prisma, storage, sampqueryer, idx, oaGitHub, oaDiscord, verifier),
		Addr:    "0.0.0.0:80",
		BaseContext: func(net.Listener) context.Context {
			return app.ctx
		},
	}

	app.worker = worker.New(
		app.ctx,
		storage,
		&scraper.PooledScraper{
			Q: sampqueryer,
		},
	)

	return
}

// Start starts the application and blocks until fatal error
// The server will shut down if the root context is cancelled
func (app *App) Start() error {
	defer func() {
		err := app.prisma.Disconnect()
		if err != nil {
			panic(fmt.Errorf("could not disconnect: %w", err))
		}
	}()

	go func() {
		if err := app.server.ListenAndServe(); err != nil {
			zap.L().Error("server stopped unexpectedly", zap.Error(err))
		}
	}()

	go func() {
		if err := app.worker.RunWithSeed(time.Second*30, seed.Addresses); err != nil {
			zap.L().Error("failed to upsert new data",
				zap.Error(err))
		}
	}()

	go func() {
		if err := mailworker.Run(); err != nil {
			zap.L().Fatal("mailworker stopped unexpectedly", zap.Error(err))
		}
	}()

	<-app.ctx.Done()

	zap.L().Error("server context cancelled", zap.Error(app.ctx.Err()))

	return app.server.Shutdown(context.Background())
}

func config() (c Config, err error) {
	if err = envconfig.Process("", &c); err != nil {
		return c, err
	}

	return
}
