package categories

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/resources/forum"
)

type service struct {
	repo forum.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(repo forum.Repository) *service { return &service{repo} }),
		fx.Invoke(func(
			r chi.Router,
			s *service,

		) {
			rtr := chi.NewRouter()
			r.Mount("/forum/categories", rtr)

			rtr.
				Get("/", s.get)

			rtr.
				Patch("/", s.patch)
		}),
	)
}
