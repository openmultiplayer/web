package services

import (
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/app/services/docsindex"
	"github.com/openmultiplayer/web/app/services/serververify"
	"github.com/openmultiplayer/web/app/services/serverworker"
)

func Build() fx.Option {
	return fx.Options(
		// pawndexworker.Build(),
		serverworker.Build(),

		fx.Provide(
			authentication.New,
			authentication.NewDiscordProvider,
			authentication.NewGitHubProvider,
			docsindex.New,
			serververify.New,
		),
	)
}
