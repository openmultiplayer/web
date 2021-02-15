package api

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"go.uber.org/dig"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/api/auth"
	"github.com/openmultiplayer/web/server/src/api/docs"
	"github.com/openmultiplayer/web/server/src/api/legacy"
	"github.com/openmultiplayer/web/server/src/api/servers"
	"github.com/openmultiplayer/web/server/src/api/users"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/version"
	"github.com/openmultiplayer/web/server/src/web"
)

type API struct {
	R chi.Router
}

func New(container *dig.Container) interface{} {
	container.Provide(legacy.New)
	container.Provide(servers.New)
	container.Provide(docs.New)
	container.Provide(auth.New)
	container.Provide(users.New)

	return func(
		auther *authentication.State,
		legacyService *legacy.LegacyService,
		serversService *servers.ServersService,
		docsService *docs.DocsService,
		authService *auth.AuthService,
		usersService *users.UsersService,
	) *API {
		router := chi.NewRouter()
		router.Use(
			web.WithLogger,
			web.WithContentType,
			cors.Handler(cors.Options{
				AllowedOrigins: []string{
					"http://localhost:3000", // Local development, `npm run dev`
					"https://open.mp",       // Live public website
				},
				AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
				AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
				ExposedHeaders:   []string{"Link"},
				AllowCredentials: true,
				MaxAge:           300,
			}),
			auther.WithAuthentication,
		)

		router.Mount("/", legacyService.R)
		router.Mount("/server", serversService.R)
		router.Mount("/docs", docsService.R)
		router.Mount("/auth", authService.R)
		router.Mount("/users", usersService.R)

		router.Get("/version", func(w http.ResponseWriter, r *http.Request) {
			json.NewEncoder(w).Encode(map[string]string{"version": version.Version}) //nolint:errcheck
		})

		router.HandleFunc(
			"/{rest:[a-zA-Z0-9=\\-\\/]+}",
			func(w http.ResponseWriter, r *http.Request) {
				if _, err := w.Write([]byte("no module found for that route")); err != nil {
					zap.L().Warn("failed to write error", zap.Error(err))
				}
			})

		zap.L().Debug("constructed router", zap.Any("router", router))

		return &API{router}
	}
}
