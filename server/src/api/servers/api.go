package servers

import (
	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/serverdb"
	"github.com/openmultiplayer/web/server/src/serververify"
)

type ServersService struct {
	R        chi.Router
	storer   serverdb.Storer
	queryer  queryer.Queryer
	verifier *serververify.Verifyer
}

func New(
	storer serverdb.Storer,
	queryer queryer.Queryer,
	verifier *serververify.Verifyer,
) *ServersService {
	svc := &ServersService{chi.NewRouter(), storer, queryer, verifier}

	svc.R.Get("/{address}", svc.get)
	svc.R.Get("/", svc.list)
	svc.R.Post("/", svc.add)
	svc.R.
		With(authentication.MustBeAuthenticated).
		Get("/{address}/vertify", svc.vertify)

	return svc
}
