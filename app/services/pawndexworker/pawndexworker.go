package pawndexworker

import (
	"context"
	"time"

	"go.uber.org/fx"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/app/resources/pawndex"
	"github.com/openmultiplayer/web/internal/config"
)

type worker struct {
	Searcher       pawndex.Searcher
	Scraper        pawndex.Scraper
	Storer         pawndex.Repository
	SearchInterval time.Duration
	ScrapeInterval time.Duration
}

func Build() fx.Option {
	return fx.Options(
		fx.Provide(
			pawndex.NewGitHubSearcher,
			pawndex.NewGitHubScraper,
		),

		fx.Invoke(func(
			lc fx.Lifecycle,
			cfg config.Config,
			searcher pawndex.Searcher,
			scraper pawndex.Scraper,
			storer pawndex.Repository,
		) *worker {
			w := &worker{
				searcher,
				scraper,
				storer,
				cfg.PackageSearchInterval,
				cfg.PackageScrapeInterval,
			}

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
		}),
	)
}

func (d *worker) run(ctx context.Context) error {
	zap.L().Debug("starting pawndex worker",
		zap.Duration("search_interval", d.SearchInterval),
		zap.Duration("scrape_interval", d.ScrapeInterval))

	search := time.NewTicker(d.SearchInterval)
	scrape := time.NewTicker(d.ScrapeInterval)

	doSearch := func() error {
		zap.L().Debug("starting search job")
		repos, err := d.Searcher.Search("topic:pawn-package", "language:pawn", "topic:sa-mp")
		if err != nil {
			return err
		}
		zap.L().Debug("finished search", zap.Int("repos", len(repos)))
		for _, r := range repos {
			zap.L().Debug("marking for scrape job", zap.String("repo", r))
			if err := d.Storer.MarkForScrape(r); err != nil {
				zap.L().Error("failed to mark repo for scraping", zap.String("name", r), zap.Error(err))
			}
		}
		zap.L().Debug("finished marking scrape jobs")
		return nil
	}

	doScrape := func() error {
		marked, err := d.Storer.GetMarked()
		if err != nil {
			return err
		}

		zap.L().Debug("starting scrape jobs", zap.Int("repos", len(marked)))

		for _, r := range marked {
			zap.L().Debug("scraping repository", zap.String("repo", r))
			pkg, err := d.Scraper.Scrape(ctx, r)
			if err != nil {
				zap.L().Error("failed to scrape repo",
					zap.String("name", r), zap.Error(err))
				continue
			}
			if err := d.Storer.Set(*pkg); err != nil {
				zap.L().Error("failed to store scraped package data",
					zap.String("name", r), zap.Error(err))
				continue
			}

			time.Sleep(time.Second * 5)
		}
		return nil
	}

	f := func() error {
		select {
		case <-search.C:
			return doSearch()
		case <-scrape.C:
			return doScrape()
		case <-ctx.Done():
			return context.Canceled
		}
	}

	for {
		if err := f(); err != nil {
			if err == context.Canceled {
				return err
			}
		}
	}
}
