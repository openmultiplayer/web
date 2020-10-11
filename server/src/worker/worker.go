package worker

import (
	"context"
	"time"

	"github.com/openmultiplayer/server-index/server/src/scraper"
	"github.com/openmultiplayer/server-index/server/src/serverdb"
	"go.uber.org/zap"
)

type Worker struct {
	ctx context.Context
	db  serverdb.Storer
	sc  scraper.Scraper
}

func New(ctx context.Context, db serverdb.Storer, sc scraper.Scraper) *Worker {
	return &Worker{ctx, db, sc}
}

func (w *Worker) RunWithSeed(window time.Duration, addresses []string) error {
	for s := range w.sc.Scrape(w.ctx, addresses) {
		if err := w.db.Upsert(w.ctx, s); err != nil {
			zap.L().Error("failed to upsert server",
				zap.Error(err), zap.String("ip", s.IP))
		}
	}
	return w.Run(window)
}

func (w *Worker) Run(window time.Duration) error {
	tc := time.NewTicker(window)
	for range tc.C {
		addresses, err := w.db.GetServersToQuery(w.ctx, window)
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

		for s := range w.sc.Scrape(w.ctx, addresses) {
			if err := w.db.Upsert(w.ctx, s); err != nil {
				zap.L().Error("failed to upsert server",
					zap.Error(err), zap.String("ip", s.IP))
			}
		}
	}

	return nil
}
