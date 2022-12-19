package servers

import (
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	cache "github.com/victorspringer/http-cache"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/app/services/queryer"
	"github.com/openmultiplayer/web/app/services/serververify"
)

type service struct {
	storer   server.Repository
	queryer  queryer.Queryer
	verifier *serververify.Verifyer
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func(
			storer server.Repository,
			queryer queryer.Queryer,
			verifier *serververify.Verifyer,
		) *service {
			return &service{storer, queryer, verifier}
		}),
		fx.Invoke(func(
			as *authentication.State,
			r chi.Router,
			cacheClient *cache.Client,
			s *service,
		) {
			rtr := chi.NewRouter()
			r.With(
				cacheClient.Middleware,
			).Mount("/servers", rtr)

			// TODO: Remove this at some point.
			r.Mount("/server", rtr)

			rtr.Use(
				cors.Handler(cors.Options{
					AllowedOrigins: []string{
						"*", // Any browser instance
					},
					AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
					AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
					ExposedHeaders:   []string{"Link"},
					AllowCredentials: false,
					MaxAge:           300,
				}),
			)

			rtr.Get("/{address}", s.get)
			rtr.Get("/", s.list)
			rtr.Post("/", s.add)
			rtr.
				With(authentication.MustBeAuthenticated).
				Get("/{address}/vertify", s.vertify)
			rtr.
				With(authentication.MustBeAuthenticated, as.MustBeAdmin).
				Patch("/{address}/deleted", s.deleted)
		}),
	)
}
