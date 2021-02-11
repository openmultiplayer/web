package servers

import (
	"github.com/go-chi/chi"
	"github.com/golobby/container"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/serverdb"
	"github.com/openmultiplayer/web/server/src/serververify"
)

type service struct {
	storer   serverdb.Storer
	queryer  queryer.Queryer
	verifier *serververify.Verifyer
}

func New() *chi.Mux {
	rtr := chi.NewRouter()
	svc := service{}
	container.Make(&svc.storer)
	container.Make(&svc.queryer)
	container.Make(&svc.verifier)

	rtr.Get("/{address}", svc.get)
	rtr.Get("/", svc.list)
	rtr.Post("/", svc.add)
	rtr.
		With(authentication.MustBeAuthenticated).
		Get("/{address}/vertify", svc.vertify)

	return rtr
}
