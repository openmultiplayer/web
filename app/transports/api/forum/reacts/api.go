package reacts

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/resources/forum/react"
	"github.com/openmultiplayer/web/app/services/authentication"
)

type service struct {
	reacts react.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(reacts react.Repository) *service {
			return &service{reacts}
		}),
		fx.Invoke(func(
			r chi.Router,
			s *service,

		) {
			rtr := chi.NewRouter()
			r.Mount("/forum/reacts", rtr)

			rtr.
				With(authentication.MustBeAuthenticated).
				Post("/{post_id}", s.post)

			rtr.
				With(authentication.MustBeAuthenticated).
				Delete("/{react_id}", s.delete)
		}),
	)
}
