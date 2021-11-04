package categories

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/resources/forum"
)

type service struct {
	as   *authentication.State
	repo forum.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(as *authentication.State, repo forum.Repository) *service { return &service{as, repo} }),
		fx.Invoke(func(
			r chi.Router,
			s *service,

		) {
			rtr := chi.NewRouter()
			r.Mount("/forum/categories", rtr)

			rtr.
				Get("/", s.get)

			rtr.
				With(authentication.MustBeAuthenticated, s.as.MustBeAdmin).
				Patch("/", s.patch)

			rtr.
				With(authentication.MustBeAuthenticated, s.as.MustBeAdmin).
				Delete("/{id}", s.delete)
		}),
	)
}
