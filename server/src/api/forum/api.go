package forum

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/forumservice"
	"github.com/openmultiplayer/web/server/src/web/ratelimiter"
)

type ForumService struct {
	R    chi.Router
	repo forumservice.Repository
}

func New(repo forumservice.Repository) *ForumService {
	svc := &ForumService{chi.NewRouter(), repo}

	svc.R.
		Get("/", svc.list)

	svc.R.
		Get("/{slug}", svc.get)

	svc.R.
		With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(5)).
		Post("/", svc.postThread)

	svc.R.
		With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(20)).
		Post("/{id}", svc.postPost)

	svc.R.
		With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(20)).
		Patch("/{id}", svc.patch)

	svc.R.
		With(authentication.MustBeAuthenticated, ratelimiter.WithRateLimit(20)).
		Delete("/{id}", svc.delete)

	return svc
}
