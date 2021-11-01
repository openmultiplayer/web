package bsworker

import (
	"context"
	"time"

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
) Worker {
	zap.L().Debug("creating bs worker")

	w := Worker{bs, users, forum}

	lc.Append(fx.Hook{
		OnStart: func(c context.Context) error {
			zap.L().Debug("starting bs worker")
			return w.run(c)
		},
	})

	go func() {
		time.Sleep(time.Second)

		// Invoke and hooks won't work for some unknown reason so this is the
		// hacky solution for now.

		w.run(context.TODO())
	}()

	return w
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(New),

		fx.Invoke(func(
			lc fx.Lifecycle,
			w Worker,
		) {
			zap.L().Debug("invoking bs worker")
		}),
	)
}

func (w *Worker) run(ctx context.Context) error {
	zap.L().Debug("running bsworker")
	// commented out for now, should be controlled via config. Only really needs
	// to be run once in production though.
	// w.migrateUsers(ctx)
	// w.migratePosts(ctx)
	return nil
}
