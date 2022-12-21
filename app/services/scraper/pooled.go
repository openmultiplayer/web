package scraper

import (
	"context"
	"sync"
	"time"

	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/app/services/queryer"
)

var _ Scraper = &PooledScraper{}

type PooledScraper struct {
	Q queryer.Queryer
}

func NewPooledScraper(q queryer.Queryer) Scraper {
	return &PooledScraper{q}
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

			result := server.TransformQueryResult(s.Q.Query(ctx, addr))
			if result.Active {
				result = server.HydrateDomain(c, result)
			} else {
				result.IP = addr
			}

			result.Core.IP = result.IP

			out <- result
		}(a)
	}

	go func() {
		wg.Wait()
		close(out)
	}()

	return out
}
