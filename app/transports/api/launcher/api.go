package launcher

import (
	"net/http"

	"github.com/go-chi/chi"
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

			launcherInfo := map[string]string{
				"version":  cfg.LauncherVersion,
				"download": "https://github.com/openmultiplayer/launcher/releases",
				"changelog": `|- Build 1 - 2023/10/08
Release beta version`,
			}

			r.Get("/launcher", func(w http.ResponseWriter, r *http.Request) {
				web.Write(w, launcherInfo) //nolint:errcheck
			})
		}),
	)
}
