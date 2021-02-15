package legacy

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/serverdb"
)

type LegacyService struct {
	R       chi.Router
	storer  serverdb.Storer
	queryer queryer.Queryer
}

func New(
	storer serverdb.Storer,
	queryer queryer.Queryer,
) *LegacyService {
	svc := &LegacyService{chi.NewRouter(), storer, queryer}

	// legacy announce.exe pattern: server.sa-mp.com/0.3.7/announce/7777
	svc.R.Get("/{version}/announce/{port}", svc.postLegacy)

	// legacy client list pattern:
	svc.R.Get("/{version}/internet", svc.listLegacy)

	return svc
}
