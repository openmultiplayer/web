package bsworker

import (
	"context"

	"github.com/openmultiplayer/web/server/src/resources/burgershot"
	"github.com/openmultiplayer/web/server/src/resources/forum"
	"github.com/openmultiplayer/web/server/src/resources/user"
	"go.uber.org/fx"
	"go.uber.org/zap"
)

type Worker struct {
	bs    burgershot.Repository
	users user.Repository
	forum forum.Repository
}

func Build() fx.Option {
	return fx.Options(
		fx.Invoke(func(
			lc fx.Lifecycle,
			bs burgershot.Repository,
			users user.Repository,
			forum forum.Repository,
		) *Worker {
			w := &Worker{bs, users, forum}

			zap.L().Debug("invoke bsworker")

			lc.Append(fx.Hook{
				OnStart: w.run,
			})

			return w
		}),
	)
}

func (w *Worker) run(ctx context.Context) error {
	zap.L().Debug("onstart")
	return w.migrateUsers(ctx)
}
