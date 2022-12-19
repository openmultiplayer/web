package auth

import (
	"github.com/go-chi/chi"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/app/transports/api/auth/discord"
	"github.com/openmultiplayer/web/app/transports/api/auth/github"
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
