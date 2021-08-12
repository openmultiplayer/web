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

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/config"
	"github.com/openmultiplayer/web/server/src/version"
	"github.com/openmultiplayer/web/server/src/web"
	"github.com/openmultiplayer/web/server/src/web/ratelimiter"
)

func New(lc fx.Lifecycle, cfg config.Config, auther *authentication.State) chi.Router {
	router := chi.NewRouter()
	server := &http.Server{
		Handler: router,
		Addr:    cfg.ListenAddr,
	}

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
		ratelimiter.WithRateLimit(1000),
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

	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			server.BaseContext = func(net.Listener) context.Context { return ctx }
			go server.ListenAndServe() //nolint:errcheck
			return nil
		},
		OnStop: func(ctx context.Context) error {
			return server.Shutdown(ctx)
		},
	})

	return router
}
