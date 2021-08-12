package users

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/usersservice"
)

type UsersService struct {
	R    chi.Router
	auth *authentication.State
	db   *db.PrismaClient
	repo usersservice.Repository
}

func New(auth *authentication.State, db *db.PrismaClient, repo usersservice.Repository) *UsersService {
	svc := &UsersService{chi.NewRouter(), auth, db, repo}

	svc.R.
		With(authentication.MustBeAuthenticated, auth.MustBeAdmin).
		Get("/", svc.list)

	svc.R.
		With(authentication.MustBeAuthenticated).
		Get("/self", svc.get)

	svc.R.
		With(authentication.MustBeAuthenticated).
		Patch("/self", svc.patch)

	svc.R.Get("/dev", svc.dev)

	return svc
}
