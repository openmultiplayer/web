package forum

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/forumservice"
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
		With(authentication.MustBeAuthenticated).
		Post("/", svc.postThread)

	svc.R.
		With(authentication.MustBeAuthenticated).
		Post("/{id}", svc.postPost)

	svc.R.
		With(authentication.MustBeAuthenticated).
		Patch("/{id}", svc.patch)

	svc.R.
		With(authentication.MustBeAuthenticated).
		Delete("/{id}", svc.delete)

	return svc
}
