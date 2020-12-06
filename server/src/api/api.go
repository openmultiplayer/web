package api

import (
	"context"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/api/authentication"
	"github.com/openmultiplayer/web/server/src/api/docs"
	"github.com/openmultiplayer/web/server/src/api/legacy"
	"github.com/openmultiplayer/web/server/src/api/servers"
	"github.com/openmultiplayer/web/server/src/auth"
	"github.com/openmultiplayer/web/server/src/docsindex"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/serverdb"
	"github.com/openmultiplayer/web/server/src/web"
)

// TODO: sort this mess out...
func New(
	ctx context.Context,
	auther *auth.Authentication,
	storage serverdb.Storer,
	sampqueryer queryer.Queryer,
	docsindex docsindex.Index,
	oaGitHub auth.OAuthProvider,
	oaDiscord auth.OAuthProvider,
) *chi.Mux {
	router := chi.NewRouter()
	router.Use(
		web.WithLogger,
		web.WithContentType,
		cors.Handler(cors.Options{
			// AllowedOrigins: []string{"https://www.open.mp"}, // TODO
			AllowedOrigins:   []string{"*"},
			AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
			AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
			ExposedHeaders:   []string{"Link"},
			AllowCredentials: false,
			MaxAge:           300,
		}),
		auther.WithAuthentication,
	)

	router.Mount("/", legacy.New(ctx, storage, sampqueryer))
	router.Mount("/server", servers.New(ctx, storage, sampqueryer))
	router.Mount("/docs", docs.New(app.ctx, docsindex))
	router.Mount("/auth", authentication.New(
		auther,
		oaGitHub,
		oaDiscord,
	))

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
