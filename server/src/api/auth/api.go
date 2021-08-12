package auth

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/api/auth/discord"
	"github.com/openmultiplayer/web/server/src/api/auth/github"
	"github.com/openmultiplayer/web/server/src/authentication"
)

type service struct{}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(func() *service { return &service{} }),
		fx.Invoke(func(
			r chi.Router,
			s *service,
			auth *authentication.State,
			gh *authentication.GitHubProvider,
			dc *authentication.DiscordProvider,
		) {
			rtr := chi.NewRouter()
			r.Mount("/auth", rtr)

			rtr.Mount("/github", github.New(auth, gh))
			rtr.Mount("/discord", discord.New(auth, dc))
		}),
	)
}
