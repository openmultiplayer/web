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
	"github.com/openmultiplayer/web/internal/config"
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
			cfg config.Config,
			as *authentication.State,
			r chi.Router,
			cacheClient *cache.Client,
			s *service,
		) {
			rtr := chi.NewRouter()
			r.Mount("/servers", rtr)

			rtr.Use(
				cors.Handler(cors.Options{
					AllowedOrigins: []string{
						"http://localhost:3000",    // Local development, `npm run dev`
						cfg.PublicWebAddress,       // Live public website
						cfg.LauncherBackendAddress, // Launcher backend address
						"*",                        // Any browser instance
					},
					AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
					AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
					ExposedHeaders:   []string{"Link"},
					AllowCredentials: false,
					MaxAge:           300,
				}),
			)

			rtr.
				With(as.MustBeAuthenticatedWithAPIKey).
				Post("/gencache", s.gencache)
			rtr.Get("/{address}", s.get)
			rtr.Get("/", s.list)
			rtr.Get("/full", s.fulllist)
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
