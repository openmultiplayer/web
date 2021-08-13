package ppackage

import (
	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/resources/pawndex"
	"go.uber.org/fx"
)

type service struct {
	store pawndex.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(repo pawndex.Repository) *service { return &service{repo} }),
		fx.Invoke(func(
			r chi.Router,
			s *service,

		) {
			rtr := chi.NewRouter()
			r.Mount("/package", rtr)

			rtr.Get("/", s.list)
			rtr.Get("/package/{user}/{repo}", s.get)
			rtr.Get("/package/{user}/{repo}/latest", s.getLatest)
		}),
	)
}
