package app

import (
	"context"
	"fmt"
	"net"
	"net/http"
	"time"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"github.com/kelseyhightower/envconfig"
	"github.com/pkg/errors"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/api/authentication"
	"github.com/openmultiplayer/web/server/src/api/docs"
	"github.com/openmultiplayer/web/server/src/api/legacy"
	"github.com/openmultiplayer/web/server/src/api/servers"
	"github.com/openmultiplayer/web/server/src/auth"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/docsindex"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/scraper"
	"github.com/openmultiplayer/web/server/src/seed"
	"github.com/openmultiplayer/web/server/src/serverdb"
	"github.com/openmultiplayer/web/server/src/web"
	"github.com/openmultiplayer/web/server/src/worker"
)

// Config represents environment variable configuration parameters
type Config struct {
	ListenAddr string `default:"0.0.0.0:8080" split_words:"true"`
	HashKey    []byte
	BlockKey   []byte
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

	auther := auth.New(app.prisma, app.config.HashKey, app.config.BlockKey)

	storage := serverdb.NewPrisma(app.prisma)
	sampqueryer := &queryer.SAMPQueryer{}

	router := chi.NewRouter()
	router.Use(
		web.WithLogger,
		web.WithContentType,
		auther.WithAuthentication,
		cors.Handler(cors.Options{
			// AllowedOrigins: []string{"https://www.open.mp"}, // TODO
			AllowedOrigins:   []string{"*"},
			AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
			ExposedHeaders:   []string{"Link"},
			AllowCredentials: false,
			MaxAge:           300,
		}),
	)

	idx, err := docsindex.New("docs.bleve", "docs/")
	if err != nil {
		return nil, errors.Wrap(err, "failed to create docs index")
	}

	router.Mount("/", legacy.New(app.ctx, storage, sampqueryer))
	router.Mount("/server", servers.New(app.ctx, storage, sampqueryer))
	router.Mount("/docs", docs.New(app.ctx, idx))
	router.Mount("/auth", authentication.New(auther))

	zap.L().Debug("constructed router", zap.Any("router", router))

	router.HandleFunc(
		"/{rest:[a-zA-Z0-9=\\-\\/]+}",
		func(w http.ResponseWriter, r *http.Request) {
			if _, err := w.Write([]byte("no module found for that route")); err != nil {
				zap.L().Warn("failed to write error", zap.Error(err))
			}
		})

	app.server = http.Server{
		Handler: router,
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
