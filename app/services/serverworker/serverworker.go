package serverworker

import (
	"context"
	"time"

	"github.com/prometheus/client_golang/prometheus"
	"github.com/prometheus/client_golang/prometheus/promauto"
	"go.uber.org/fx"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/app/services/queryer"
	"github.com/openmultiplayer/web/app/services/scraper"
	"github.com/openmultiplayer/web/internal/config"
)

var (
	Active = promauto.NewGauge(prometheus.GaugeOpts{
		Namespace: "servers",
		Name:      "active",
		Help:      "Total active servers.",
	})
	Inactive = promauto.NewGauge(prometheus.GaugeOpts{
		Namespace: "servers",
		Name:      "inactive",
		Help:      "Total servers that are offline but being given a grace-period to come back online.",
	})
	Players = promauto.NewGaugeVec(prometheus.GaugeOpts{
		Namespace: "servers",
		Name:      "players",
		Help:      "Total players across all servers",
	}, []string{"addr"})
)

type Worker struct {
	db  server.Repository
	sc  scraper.Scraper
	cfg config.Config
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(
			queryer.NewSAMPQueryer,
			scraper.NewPooledScraper,
		),

		fx.Invoke(func(lc fx.Lifecycle, db server.Repository, sc scraper.Scraper, cfg config.Config) *Worker {
			w := &Worker{db, sc, cfg}

			lc.Append(fx.Hook{
				OnStart: func(ctx context.Context) error {
					go w.Run(ctx, cfg.ServerScrapeInterval)
					return nil
				},
			})

			return w
		}),
	)
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
		zap.L().Info("Running server scraper worker")
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
			zap.L().Debug("updating server",
				zap.String("address", s.IP),
				zap.Bool("active", s.Active))

			if err := w.db.Upsert(ctx, s); err != nil {
				zap.L().Error("failed to upsert server",
					zap.Error(err), zap.String("ip", s.IP))
			}

			time.Sleep(time.Second)
		}

		zap.L().Debug("finished updating servers",
			zap.Int("servers", len(addresses)))

		// TODO: GetAll needs an "include inactive" flag, and make default duration configurable
		// It should also probably just use existing data queried earlier.
		// Only retrieve servers active since 3 hours ago
		all, err := w.db.GetAll(ctx, time.Duration(-3)*time.Hour)
		if err != nil {
			zap.L().Error("failed to get all servers for metrics",
				zap.Error(err))
			continue
		}

		zap.L().Info("Saving all servers into a JSON file to be used as cache")
		// Let's save all servers info our cache file to be used in our API data processing instead of DB
		err = w.db.GenerateCacheFromData(ctx, all)
		if err != nil {
			zap.L().Error("There was an error converting native array of servers to JSON data",
				zap.Error(err))
			continue
		}

		active := 0
		inactive := 0
		for _, s := range all {
			if s.Active {
				active++
			} else {
				inactive++
			}
			Players.With(prometheus.Labels{
				"addr": s.IP,
			}).Set(float64(s.Core.Players))
		}
		Active.Set(float64(active))
		Inactive.Set(float64(inactive))
	}

	return nil
}
