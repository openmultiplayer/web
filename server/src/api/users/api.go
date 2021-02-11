package users

import (
	"github.com/go-chi/chi"
	"github.com/golobby/container"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
)

type service struct {
	auth *authentication.State
	db   *db.PrismaClient
}

func New() *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{}
	container.Make(&svc.auth)
	container.Make(&svc.db)

	rtr.
		With(authentication.MustBeAuthenticated).
		Get("/self", svc.get)

	rtr.
		With(authentication.MustBeAuthenticated).
		Patch("/self", svc.patch)

	return rtr
}
