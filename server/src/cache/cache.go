package cache

import (
	"time"

	cache "github.com/victorspringer/http-cache"
	"github.com/victorspringer/http-cache/adapter/memory"
	"go.uber.org/fx"
)

func Build() fx.Option {
	return fx.Provide(
		func() (*cache.Client, error) {
			memory, err := memory.NewAdapter(
				memory.AdapterWithAlgorithm(memory.LRU),
				memory.AdapterWithCapacity(10000000),
			)
			if err != nil {
				return nil, err
			}

			cacheClient, err := cache.NewClient(
				cache.ClientWithAdapter(memory),
				cache.ClientWithTTL(10*time.Minute),
				cache.ClientWithRefreshKey("opn"),
			)
			if err != nil {
				return nil, err
			}

			return cacheClient, nil
		},
	)
}
