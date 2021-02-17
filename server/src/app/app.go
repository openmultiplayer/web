package app

import (
	"context"

	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/api"
	"github.com/openmultiplayer/web/server/src/api/auth"
	"github.com/openmultiplayer/web/server/src/api/docs"
	"github.com/openmultiplayer/web/server/src/api/legacy"
	"github.com/openmultiplayer/web/server/src/api/servers"
	"github.com/openmultiplayer/web/server/src/api/users"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/config"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/docsindex"
	"github.com/openmultiplayer/web/server/src/mailer"
	"github.com/openmultiplayer/web/server/src/mailworker"
	"github.com/openmultiplayer/web/server/src/pubsub"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/scraper"
	"github.com/openmultiplayer/web/server/src/serverdb"
	"github.com/openmultiplayer/web/server/src/serververify"
	"github.com/openmultiplayer/web/server/src/serverworker"
)

// Start starts the application and blocks until fatal error
// The server will shut down if the root context is cancelled
// nolint:errcheck
func Start(ctx context.Context) error {
	app := fx.New(
		fx.Provide(
			config.New,
			NewDatabase,

			func(config config.Config) (pubsub.Bus, error) { return pubsub.NewRabbit(config.AmqpAddress) },
			func(config config.Config) mailer.Mailer { return mailer.NewSendGrid(config.SendgridAPIKey) },
			func() (*docsindex.Index, error) { return docsindex.New("docs.bleve", "docs/") },
			func(config config.Config, prisma *db.PrismaClient) *authentication.State {
				return authentication.New(prisma, config.HashKey, config.BlockKey)
			},

			mailworker.New,
			serverdb.NewPrisma,
			queryer.NewSAMPQueryer,
			serververify.New,
			scraper.NewPooledScraper,
			serverworker.New,

			func(config config.Config, db *db.PrismaClient, mw *mailworker.Worker) *authentication.GitHubProvider {
				return authentication.NewGitHubProvider(db, mw, config.GithubClientID, config.GithubClientSecret)
			},
			func(config config.Config, db *db.PrismaClient, mw *mailworker.Worker) *authentication.DiscordProvider {
				return authentication.NewDiscordProvider(db, mw, config.DiscordClientID, config.DiscordClientSecret)
			},

			api.New,

			// Route group handlers
			// Note:
			// When adding new route groups, don't forget to also mount their
			// subrouters into the main router below...
			legacy.New,
			servers.New,
			docs.New,
			auth.New,
			users.New,
		),
		fx.Invoke(
			// Route group handlers from above are mounted here:
			func(
				legacyService *legacy.LegacyService,
				serversService *servers.ServersService,
				docsService *docs.DocsService,
				authService *auth.AuthService,
				usersService *users.UsersService,

				// The router to mount the service handlers onto.
				router chi.Router,
			) {
				router.Mount("/", legacyService.R)
				router.Mount("/server", serversService.R)
				router.Mount("/docs", docsService.R)
				router.Mount("/auth", authService.R)
				router.Mount("/users", usersService.R)
			},
		),
	)

	err := app.Start(ctx)
	if err != nil {
		return err
	}

	<-ctx.Done()

	return app.Stop(context.Background())
}
