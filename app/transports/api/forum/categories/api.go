package categories

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/resources/forum/category"
	"github.com/openmultiplayer/web/app/services/authentication"
)

type service struct {
	as   *authentication.State
	repo category.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(as *authentication.State, repo category.Repository) *service { return &service{as, repo} }),
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
				Patch("/", s.patchAll)

			rtr.
				With(authentication.MustBeAuthenticated, s.as.MustBeAdmin).
				Delete("/{id}", s.delete)

			rtr.
				With(authentication.MustBeAuthenticated, s.as.MustBeAdmin).
				Patch("/{id}", s.patch)
		}),
	)
}
