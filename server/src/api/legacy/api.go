package legacy

import (
	"context"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/server-index/server/src/queryer"
	"github.com/openmultiplayer/server-index/server/src/serverdb"
)

type service struct {
	ctx     context.Context
	storer  serverdb.Storer
	queryer queryer.Queryer
}

func New(ctx context.Context, storer serverdb.Storer, queryer queryer.Queryer) *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{ctx, storer, queryer}

	// legacy announce.exe pattern: server.sa-mp.com/0.3.7/announce/7777
	rtr.Get("/{version}/announce/{port}", svc.postLegacy)

	// legacy client list pattern:
	rtr.Get("/{version}/internet", svc.listLegacy)

	return rtr
}
