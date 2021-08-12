package users

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/usersservice"
)

type service struct {
	auth *authentication.State
	db   *db.PrismaClient
	repo usersservice.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(
			auth *authentication.State,
			db *db.PrismaClient,
			repo usersservice.Repository,
		) *service {
			return &service{auth, db, repo}
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
				With(authentication.MustBeAuthenticated).
				Get("/self", s.get)

			rtr.
				With(authentication.MustBeAuthenticated).
				Patch("/self", s.patch)

			rtr.
				With(authentication.MustBeAuthenticated, auth.MustBeAdmin).
				Patch("/admin", s.patchAdmin)

			rtr.Get("/dev", s.dev)
		}),
	)
}
