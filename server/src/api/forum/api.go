package forum

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/api/forum/categories"
	"github.com/openmultiplayer/web/server/src/api/forum/posts"
	"github.com/openmultiplayer/web/server/src/api/forum/threads"
	"github.com/openmultiplayer/web/server/src/resources/forum/tag"
	"github.com/openmultiplayer/web/server/src/resources/forum/thread"
)

type service struct {
	threads thread.Repository
	tags    tag.Repository
}

func Build() fx.Option {
	return fx.Options(
		categories.Build(),
		posts.Build(),
		threads.Build(),

		fx.Provide(func(
			threads thread.Repository,
			tags tag.Repository,
		) *service {
			return &service{threads, tags}
		}),
		fx.Invoke(func(
			r chi.Router,
			s *service,

		) {
			rtr := chi.NewRouter()
			r.Mount("/forum", rtr)

			rtr.
				Get("/tags", s.getTags)
		}),
	)
}
