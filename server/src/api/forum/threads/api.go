package threads

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/resources/forum/thread"
)

type service struct {
	as      *authentication.State
	threads thread.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(
			as *authentication.State,
			threads thread.Repository,
		) *service {
			return &service{as, threads}
		}),
		fx.Invoke(func(
			r chi.Router,
			s *service,
		) {
			rtr := chi.NewRouter()
			r.Mount("/forum/threads", rtr)

			rtr.
				Get("/", s.list)

			rtr.
				With(authentication.MustBeAuthenticated /*ratelimiter.WithRateLimit(5)*/).
				Post("/", s.post)

			rtr.
				With(authentication.MustBeAuthenticated /*ratelimiter.WithRateLimit(5)*/).
				Patch("/{id}", s.patch)

			rtr.
				With(authentication.MustBeAuthenticated /*ratelimiter.WithRateLimit(5)*/).
				Delete("/{id}", s.delete)
		}),
	)
}
