package servers

import (
	"context"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/serverdb"
	"github.com/openmultiplayer/web/server/src/serververify"
)

type service struct {
	ctx      context.Context
	storer   serverdb.Storer
	queryer  queryer.Queryer
	verifier *serververify.Verifyer
}

func New(ctx context.Context, storer serverdb.Storer, queryer queryer.Queryer, verifier *serververify.Verifyer) *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{ctx, storer, queryer, verifier}

	rtr.Get("/{address}", svc.get)
	rtr.Get("/", svc.list)
	rtr.Post("/", svc.add)
	rtr.
		With(authentication.MustBeAuthenticated).
		Get("/{address}/vertify", svc.vertify)

	return rtr
}
