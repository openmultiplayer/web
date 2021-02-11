package api

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"github.com/golobby/container"
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

func New(auther *authentication.State) *chi.Mux {
	container.Make(&auther)

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

	router.Mount("/", legacy.New())
	router.Mount("/server", servers.New())
	router.Mount("/docs", docs.New())
	router.Mount("/auth", auth.New())
	router.Mount("/users", users.New())

	router.Get("/version", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(map[string]string{"version": version.Version}) //nolint:errcheck
	})

	zap.L().Debug("constructed router", zap.Any("router", router))

	router.HandleFunc(
		"/{rest:[a-zA-Z0-9=\\-\\/]+}",
		func(w http.ResponseWriter, r *http.Request) {
			if _, err := w.Write([]byte("no module found for that route")); err != nil {
				zap.L().Warn("failed to write error", zap.Error(err))
			}
		})

	return router
}
