package legacy

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/server"
)

type service struct {
	storer  server.Repository
	queryer queryer.Queryer
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(storer server.Repository, queryer queryer.Queryer) *service { return &service{storer, queryer} }),
		fx.Invoke(func(
			r chi.Router,
			s *service,
		) {
			rtr := chi.NewRouter()
			r.Mount("/", rtr)

			// legacy announce.exe pattern: server.sa-mp.com/0.3.7/announce/7777
			rtr.Get("/{version}/announce/{port}", s.postLegacy)

			// legacy client list pattern:
			rtr.Get("/{version}/internet", s.listLegacy)
		}),
	)
}
