package tags

import (
	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/app/resources/forum/tag"
	"go.uber.org/fx"
)

type service struct {
	tags tag.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(tags tag.Repository) *service {
			return &service{tags}
		}),
		fx.Invoke(func(
			r chi.Router,
			s *service,

		) {
			rtr := chi.NewRouter()
			r.Mount("/forum/tags", rtr)

			rtr.
				Get("/", s.get)
		}),
	)
}
