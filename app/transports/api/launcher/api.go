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

			launcherInfo := map[string]any{
				"version":           cfg.LauncherVersion,                                           // Deprecated, keeping it for backward compatibility
				"download":          "https://github.com/openmultiplayer/launcher/releases/latest", // Deprecated, keeping it for backward compatibility
				"ompPluginChecksum": "6e1ec45fe13e4cf622740577ac625f2a",                            // Deprecated, keeping it for backward compatibility
				"ompPluginDownload": "https://assets.open.mp/omp-client.dll",                       // Deprecated, keeping it for backward compatibility
				"changelog": `|- Build 1 - 2023/10/08
Release beta version`, // Deprecated, keeping it for backward compatibility
				"versions": map[string]any{
					"5": map[string]string{ // Version 5 doesn't actually use information from his object, just keeping it for future reference
						"download":          "https://github.com/openmultiplayer/launcher/releases/latest",
						"ompPluginChecksum": "6e1ec45fe13e4cf622740577ac625f2a",
						"ompPluginDownload": "https://assets.open.mp/omp-client.dll",
					},
					"6": map[string]string{
						"download":          "https://github.com/openmultiplayer/launcher/releases/latest",
						"ompPluginChecksum": "865da2905ba33153c9db9462915db006",
						"ompPluginDownload": "https://assets.open.mp/omp-client-6.dll",
					},
				},
			}

			rtr.Get("/", func(w http.ResponseWriter, rq *http.Request) {
				web.Write(w, launcherInfo) //nolint:errcheck
			})
		}),
	)
}
