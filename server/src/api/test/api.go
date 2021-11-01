package test

import (
	"context"
	"errors"
	"net/http"

	"github.com/go-chi/chi"
	"go.uber.org/fx"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/bsworker"
	"github.com/openmultiplayer/web/server/src/web"
)

type service struct {
	w bsworker.Worker
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(w bsworker.Worker) *service { return &service{w} }),
		fx.Invoke(func(r chi.Router, s *service, auth *authentication.State) {
			rtr := chi.NewRouter()
			r.Mount("/test", rtr)

			rtr.Get("/error", func(w http.ResponseWriter, r *http.Request) {
				web.StatusInternalServerError(w, web.WithSuggestion(
					errors.New("failed to exist"),
					"A problem occurred during the request and the process had to be cancelled. Your card was not charged.",
					"Try logging out and back in again, if this doesn't work, please contact our support team at team@open.mp"))
			})

			rtr.
				With(authentication.MustBeAuthenticated, auth.MustBeAdmin).
				Get("/migrate", func(w http.ResponseWriter, r *http.Request) {
					go func() {
						if err := s.w.MigratePosts(context.Background()); err != nil {
							zap.L().Warn("migration failed", zap.Error(err))
						}
					}()

					w.Write([]byte("running forum post migration!"))
				})
		}),
	)
}
