package subscriptions

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/resources/notification"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/app/transports/api/subscriptions/notifications"
)

type service struct {
	repo notification.Repository
}

func Build() fx.Option {
	return fx.Options(
		notifications.Build(),

		fx.Provide(func(repo notification.Repository) *service { return &service{repo} }),
		fx.Invoke(func(r chi.Router, s *service) {
			rtr := chi.NewRouter()
			r.Mount("/subscriptions", rtr)

			rtr.
				With(authentication.MustBeAuthenticated).
				Post("/", s.post)

			rtr.
				With(authentication.MustBeAuthenticated).
				Delete("/{id}", s.delete)

			rtr.
				With(authentication.MustBeAuthenticated).
				Get("/", s.get)
		}),
	)
}
