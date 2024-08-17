package launcher

import (
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"github.com/openmultiplayer/web/internal/config"
	"github.com/openmultiplayer/web/internal/web"
	"go.uber.org/fx"
)

func Build() fx.Option {
	return fx.Options(
		fx.Invoke(func(
			r chi.Router,
			cfg config.Config,
		) {

			rtr := chi.NewRouter()
			r.Mount("/launcher", rtr)

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

			launcherInfo := map[string]string{
				"version":           cfg.LauncherVersion,
				"download":          "https://github.com/openmultiplayer/launcher/releases",
				"ompPluginChecksum": "fe4f71ddab5cea33228f7b8202cb9d78",
				"ompPluginDownload": "https://assets.open.mp/omp-client.dll",
				"changelog": `|- Build 1 - 2023/10/08
Release beta version`,
			}

			rtr.Get("/", func(w http.ResponseWriter, rq *http.Request) {
				web.Write(w, launcherInfo) //nolint:errcheck
			})
		}),
	)
}
