package posts

import (
	"time"

	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/resources/forum/post"
	"github.com/openmultiplayer/web/app/resources/notification"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/config"
	"github.com/openmultiplayer/web/internal/web/ratelimiter"
)

type service struct {
	as            *authentication.State
	repo          post.Repository
	publicAddress string

	// TODO: This should be event-driven so forum posts result in an event being
	// emitted and a worker reacts to the event to create subscriptions.
	notifications notification.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(
			as *authentication.State,
			repo post.Repository,
			notifications notification.Repository,
			cfg config.Config,
		) *service {
			return &service{as, repo, cfg.PublicWebAddress, notifications}
		}),
		fx.Invoke(func(
			r chi.Router,
			s *service,
		) {
			rtr := chi.NewRouter()
			r.Mount("/forum/posts", rtr)

			rtr.
				Get("/{slug}", s.get)

			rtr.
				With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(3, time.Minute)).
				Post("/{id}", s.post)

			rtr.
				With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(3, time.Minute)).
				Patch("/{id}", s.patch)

			rtr.
				With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(3, time.Minute)).
				Delete("/{id}", s.delete)
		}),
	)
}
