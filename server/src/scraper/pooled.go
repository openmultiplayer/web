package scraper

import (
	"context"
	"sync"
	"time"

	"github.com/openmultiplayer/web/server/src/queryer"
	"github.com/openmultiplayer/web/server/src/server"
)

var _ Scraper = &PooledScraper{}

type PooledScraper struct {
	Q queryer.Queryer
}

// Scrape scrapes a list of addresses by spawning a goroutine for each address
// and transforming each result into a Result object. The amount of results
// should be the same as the amount of addresses.
func (s *PooledScraper) Scrape(ctx context.Context, addresses []string) chan server.All {
	out := make(chan server.All)
	wg := sync.WaitGroup{}
	for _, a := range addresses {
		wg.Add(1)
		go func(addr string) {
			defer wg.Done()
			c, f := context.WithTimeout(ctx, time.Second*10)
			defer f()

			ss := server.HydrateDomain(c, server.TransformQueryResult(s.Q.Query(ctx, addr)))
			if ss.IP == "" {
				return
			}

			ss.Core.IP = ss.IP

			out <- ss
		}(a)
	}

	go func() {
		wg.Wait()
		close(out)
	}()

	return out
}
