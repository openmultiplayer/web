package forum

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/api/forum/categories"
	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/resources/forum"
	"github.com/openmultiplayer/web/server/src/resources/forum/post"
	"github.com/openmultiplayer/web/server/src/resources/forum/thread"
)

type service struct {
	repo    forum.Repository
	posts   post.Repository
	threads thread.Repository
}

func Build() fx.Option {
	return fx.Options(
		categories.Build(),

		fx.Provide(func(
			repo forum.Repository,
			posts post.Repository,
			threads thread.Repository,
		) *service {
			return &service{repo, posts, threads}
		}),
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
				Get("/tags", s.tags)
		}),
	)
}
