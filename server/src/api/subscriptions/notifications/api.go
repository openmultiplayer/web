package notifications

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/resources/notification"
)

type service struct {
	repo notification.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(repo notification.Repository) *service { return &service{repo} }),
		fx.Invoke(func(r chi.Router, s *service) {
			rtr := chi.NewRouter()
			r.Mount("/subscriptions/notifications", rtr)

			rtr.
				With(authentication.MustBeAuthenticated).
				Get("/", s.get)

			rtr.
				With(authentication.MustBeAuthenticated).
				Patch("/{id}", s.patch)
		}),
	)
}
