package serverworker

import (
	"context"
	"time"

	"go.uber.org/fx"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/scraper"
	"github.com/openmultiplayer/web/server/src/server"
)

type Worker struct {
	db server.Repository
	sc scraper.Scraper
}

func New(lc fx.Lifecycle, db server.Repository, sc scraper.Scraper) *Worker {
	w := &Worker{db, sc}

	lc.Append(fx.Hook{
		OnStart: func(ctx context.Context) error {
			return w.Run(ctx, time.Second*30)
		},
	})

	return w
}

func (w *Worker) RunWithSeed(ctx context.Context, window time.Duration, addresses []string) error {
	zap.L().Debug("running with initial database seed", zap.Int("addresses", len(addresses)))
	for s := range w.sc.Scrape(ctx, addresses) {
		if err := w.db.Upsert(ctx, s); err != nil {
			zap.L().Error("failed to upsert server",
				zap.Error(err), zap.String("ip", s.IP))
		}
	}
	return w.Run(ctx, window)
}

func (w *Worker) Run(ctx context.Context, window time.Duration) error {
	tc := time.NewTicker(window)
	for range tc.C {
		addresses, err := w.db.GetServersToQuery(ctx, window)
		if err != nil {
			zap.L().Error("failed to get servers to query",
				zap.Error(err))
			continue
		}

		if len(addresses) == 0 {
			zap.L().Debug("no servers to query, skipping")
			continue
		}

		zap.L().Debug("got servers to update",
			zap.Int("servers", len(addresses)))

		for s := range w.sc.Scrape(ctx, addresses) {
			if err := w.db.Upsert(ctx, s); err != nil {
				zap.L().Error("failed to upsert server",
					zap.Error(err), zap.String("ip", s.IP))
			}
		}
	}

	return nil
}
