package legacy

import (
	"github.com/go-chi/chi"
	"github.com/golobby/container"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/serverdb"
)

type service struct {
	storer  serverdb.Storer
	queryer queryer.Queryer
}

func New() *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{}
	container.Make(&svc.storer)
	container.Make(&svc.queryer)

	// legacy announce.exe pattern: server.sa-mp.com/0.3.7/announce/7777
	rtr.Get("/{version}/announce/{port}", svc.postLegacy)

	// legacy client list pattern:
	rtr.Get("/{version}/internet", svc.listLegacy)

	return rtr
}
