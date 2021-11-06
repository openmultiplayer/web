package threads

import (
	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/resources/forum/thread"
	"go.uber.org/fx"
)

type service struct {
	threads thread.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(
			threads thread.Repository,
		) *service {
			return &service{threads}
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
		}),
	)
}
