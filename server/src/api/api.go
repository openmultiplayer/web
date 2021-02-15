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
	"github.com/openmultiplayer/web/server/src/version"
	"github.com/openmultiplayer/web/server/src/web"
)

func NewServer(lc fx.Lifecycle, router chi.Router) *http.Server {
	server := &http.Server{
		Handler: router,
		Addr:    "0.0.0.0:80",
	}

	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			zap.L().Debug("started server", zap.Any("server", server))
			server.BaseContext = func(net.Listener) context.Context { return ctx }
			go server.ListenAndServe() //nolint:errcheck
			return nil
		},
		OnStop: func(ctx context.Context) error {
			return server.Shutdown(ctx)
		},
	})

	zap.L().Debug("constructed server", zap.Any("server", server))

	return server
}

func NewRouter(auther *authentication.State) chi.Router {
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

	return router
}
