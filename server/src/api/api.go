package api

import (
	"context"
	"encoding/json"
	"net"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"go.uber.org/fx"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/api/auth"
	"github.com/openmultiplayer/web/server/src/api/docs"
	"github.com/openmultiplayer/web/server/src/api/forum"
	"github.com/openmultiplayer/web/server/src/api/legacy"
	"github.com/openmultiplayer/web/server/src/api/pawndex"
	"github.com/openmultiplayer/web/server/src/api/servers"
	"github.com/openmultiplayer/web/server/src/api/users"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/config"
	"github.com/openmultiplayer/web/server/src/version"
	"github.com/openmultiplayer/web/server/src/web"
)

func Build() fx.Option {
	return fx.Options(
		auth.Build(),
		docs.Build(),
		forum.Build(),
		legacy.Build(),
		servers.Build(),
		users.Build(),
		pawndex.Build(),

		// Starts the HTTP server in a goroutine and fatals if it errors.
		fx.Invoke(func(l *zap.Logger, server *http.Server) {
			l.Debug("http server starting")
			go func() {
				if err := server.ListenAndServe(); err != nil {
					l.Fatal("HTTP server failed", zap.Error(err))
				}
			}()
		}),

		fx.Provide(func(as *authentication.State) chi.Router {
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
				as.WithAuthentication,
				// ratelimiter.WithRateLimit(1000),
			)

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

			return router
		}),

		fx.Provide(func(lc fx.Lifecycle, cfg config.Config, l *zap.Logger, router chi.Router) *http.Server {
			server := &http.Server{
				Handler: router,
				Addr:    cfg.ListenAddr,
			}

			lc.Append(fx.Hook{
				// Inject the global context into each request handler for
				// graceful shutdowns.
				// Note: The server isn't started here, instead, it's started
				// via the Invoke call above.
				OnStart: func(ctx context.Context) error {
					server.BaseContext = func(net.Listener) context.Context { return ctx }
					return nil
				},
				// Graceful shutdowns using the signal context.
				OnStop: func(ctx context.Context) error {
					return server.Shutdown(ctx)
				},
			})

			return server
		}),
	)
}
