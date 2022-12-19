package users

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/resources/user"
	"github.com/openmultiplayer/web/app/services/authentication"
)

type service struct {
	auth *authentication.State
	repo user.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(
			auth *authentication.State,
			repo user.Repository,
		) *service {
			return &service{auth, repo}
		}),
		fx.Invoke(func(
			r chi.Router,
			s *service,
			auth *authentication.State,
		) {
			rtr := chi.NewRouter()
			r.Mount("/users", rtr)

			rtr.
				With(authentication.MustBeAuthenticated, auth.MustBeAdmin).
				Get("/", s.list)

			rtr.
				With().
				Get("/{id}", s.get)

			rtr.
				With(authentication.MustBeAuthenticated).
				Patch("/{id}", s.patch)

			rtr.
				With(authentication.MustBeAuthenticated, auth.MustBeAdmin).
				Put("/banstatus/{id}", s.banstatus)

			rtr.
				With(authentication.MustBeAuthenticated).
				Get("/self", s.self)

			rtr.
				With(authentication.MustBeAuthenticated, auth.MustBeAdmin).
				Patch("/admin", s.patchAdmin)

			rtr.
				Get("/image/{id}", s.image)

			rtr.Get("/dev", s.dev)
		}),
	)
}
