package users

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
)

type UsersService struct {
	R    chi.Router
	auth *authentication.State
	db   *db.PrismaClient
}

func New(auth *authentication.State, db *db.PrismaClient) *UsersService {
	svc := &UsersService{chi.NewRouter(), auth, db}

	svc.R.
		With(authentication.MustBeAuthenticated).
		Get("/self", svc.get)

	svc.R.
		With(authentication.MustBeAuthenticated).
		Patch("/self", svc.patch)

	return svc
}
