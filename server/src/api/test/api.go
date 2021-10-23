package test

import (
	"errors"
	"net/http"

	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/web"
)

type service struct{}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func() *service { return &service{} }),
		fx.Invoke(func(r chi.Router, s *service) {
			rtr := chi.NewRouter()
			r.Mount("/test", rtr)

			rtr.Get("/error", func(w http.ResponseWriter, r *http.Request) {
				web.StatusInternalServerError(w, web.WithSuggestion(
					errors.New("failed to exist"),
					"A problem occurred during the request and the process had to be cancelled. Your card was not charged.",
					"Try logging out and back in again, if this doesn't work, please contact our support team at team@open.mp"))
			})
		}),
	)
}
