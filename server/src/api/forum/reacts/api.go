package reacts

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/resources/forum/react"
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
