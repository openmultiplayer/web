package posts

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/resources/forum/post"
	"github.com/openmultiplayer/web/server/src/web/ratelimiter"
)

type service struct {
	as   *authentication.State
	repo post.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(as *authentication.State, repo post.Repository) *service { return &service{as, repo} }),
		fx.Invoke(func(
			r chi.Router,
			s *service,

		) {
			rtr := chi.NewRouter()
			r.Mount("/forum/posts", rtr)

			rtr.
				Get("/{slug}", s.get)

			rtr.
				With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(20)).
				Post("/{id}", s.post)

			rtr.
				With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(20)).
				Patch("/{id}", s.patch)

			rtr.
				With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(20)).
				Delete("/{id}", s.delete)
		}),
	)
}
