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
) Worker {

	w := Worker{bs, users, forum}

	wctx, stop := context.WithCancel(context.Background())
	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			go w.run(wctx)
			return nil
		},
		OnStop: func(c context.Context) error {
			stop()
			return nil
		},
	})

	return w
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(New),
		fx.Invoke(func(w Worker) {}),
	)
}

func (w *Worker) run(ctx context.Context) error {
	zap.L().Debug("running bsworker")
	// commented out for now, should be controlled via config. Only really needs
	// to be run once in production though.
	// w.migrateUsers(ctx)
	// w.MigratePosts(ctx)
	return nil
}
