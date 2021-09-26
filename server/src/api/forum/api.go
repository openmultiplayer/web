package forum

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/authentication"
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
			r.Mount("/forum", rtr)

			rtr.
				Get("/", s.list)

			rtr.
				Get("/{slug}", s.get)

			rtr.
				With(authentication.MustBeAuthenticated /*ratelimiter.WithRateLimit(5)*/).
				Post("/", s.postThread)

			rtr.
				With(authentication.MustBeAuthenticated /*ratelimiter.WithRateLimit(20)*/).
				Post("/{id}", s.postPost)

			rtr.
				With(authentication.MustBeAuthenticated /*ratelimiter.WithRateLimit(20)*/).
				Patch("/{id}", s.patch)

			rtr.
				With(authentication.MustBeAuthenticated /*ratelimiter.WithRateLimit(20)*/).
				Delete("/{id}", s.delete)

			rtr.
				Get("/categories", s.categories)
		}),
	)
}
