package users

import (
	"context"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
)

type service struct {
	ctx  context.Context
	auth *authentication.State
	db   *db.PrismaClient
}

func New(ctx context.Context, a *authentication.State, db *db.PrismaClient) *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{ctx, a, db}

	rtr.
		With(authentication.MustBeAuthenticated).
		Get("/self", svc.get)

	rtr.
		With(authentication.MustBeAuthenticated).
		Patch("/self", svc.patch)

	return rtr
}
