package pawndex

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/resources/pawndex"
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
			r.Mount("/pawndex", rtr)

			rtr.Get("/", s.list)
			rtr.Get("/{user}/{repo}", s.get)
			rtr.Get("/{user}/{repo}/latest", s.getLatest)
		}),
	)
}
