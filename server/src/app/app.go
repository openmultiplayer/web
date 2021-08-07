package app

import (
	"context"

	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/api"
	"github.com/openmultiplayer/web/server/src/api/auth"
	"github.com/openmultiplayer/web/server/src/api/docs"
	"github.com/openmultiplayer/web/server/src/api/forum"
	"github.com/openmultiplayer/web/server/src/api/legacy"
	"github.com/openmultiplayer/web/server/src/api/servers"
	"github.com/openmultiplayer/web/server/src/api/users"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/config"
	"github.com/openmultiplayer/web/server/src/docsindex"
	"github.com/openmultiplayer/web/server/src/forumservice"
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
			pubsub.NewRabbit,
			mailer.NewSendGrid,
			docsindex.New,
			authentication.New,
			mailworker.New,
			serverdb.NewPrisma,
			queryer.NewSAMPQueryer,
			serververify.New,
			scraper.NewPooledScraper,
			serverworker.New,
			authentication.NewGitHubProvider,
			authentication.NewDiscordProvider,
			api.New,
			forumservice.New,

			// Route group handlers
			// Note:
			// When adding new route groups, don't forget to also mount their
			// subrouters into the main router below...
			legacy.New,
			servers.New,
			docs.New,
			auth.New,
			users.New,
			forum.New,
		),
		fx.Invoke(
			// Route group handlers from above are mounted here:
			func(
				legacyService *legacy.LegacyService,
				serversService *servers.ServersService,
				docsService *docs.DocsService,
				authService *auth.AuthService,
				usersService *users.UsersService,
				forumService *forum.ForumService,

				// The router to mount the service handlers onto.
				router chi.Router,
			) {
				router.Mount("/", legacyService.R)
				router.Mount("/server", serversService.R)
				router.Mount("/docs", docsService.R)
				router.Mount("/auth", authService.R)
				router.Mount("/users", usersService.R)
				router.Mount("/forum", forumService.R)
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
