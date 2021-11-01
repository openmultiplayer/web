package bsworker

import (
	"context"

	"go.uber.org/fx"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/resources/burgershot"
	"github.com/openmultiplayer/web/server/src/resources/forum"
	"github.com/openmultiplayer/web/server/src/resources/user"
)

type Worker struct {
	bs    burgershot.Repository
	users user.Repository
	forum forum.Repository
}

func New(
	lc fx.Lifecycle,
	bs burgershot.Repository,
	users user.Repository,
	forum forum.Repository,
) *Worker {
	zap.L().Debug("creating bs worker")

	w := &Worker{bs, users, forum}

	lc.Append(fx.Hook{
		OnStart: func(c context.Context) error {
			zap.L().Debug("starting bs worker")
			return w.run(c)
		},
	})

	return w
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(New),

		fx.Invoke(func(
			lc fx.Lifecycle,
			w *Worker,
		) {
			zap.L().Debug("invoking bs worker")
		}),
	)
}

func (w *Worker) run(ctx context.Context) error {
	zap.L().Debug("running bsworker")
	return w.migrateUsers(ctx)
}
