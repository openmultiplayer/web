package scraper

import (
	"context"

	"go.uber.org/zap"

	"github.com/openmultiplayer/web/app/resources/server"
	"github.com/openmultiplayer/web/app/services/queryer"
)

type SimpleScraper struct {
	Q queryer.Queryer
}

func (s *SimpleScraper) Scrape(ctx context.Context, addresses []string) []server.Essential {
	zap.L().Debug("starting bulk query", zap.Int("servers", len(addresses)))
	result := []server.Essential{}
	failures := 0
	for i, addr := range addresses {
		s, err := s.Q.Query(ctx, addr)
		if err != nil {
			failures += 1
			zap.L().Error("failed", zap.String("addr", addr), zap.Error(err))
			continue
		}

		result = append(result, server.Essential{
			IP:         s.Address,
			Hostname:   s.Hostname,
			Players:    int64(s.Players),
			MaxPlayers: int64(s.MaxPlayers),
			Gamemode:   s.Gamemode,
			Language:   s.Language,
			Password:   s.Password,
			IsOmp:      s.IsOmp,
			// Version
		})

		// TODO:
		// Rules
		// Ping

		if i%10 == 0 {
			zap.L().Debug("query progress", zap.Int("n", i), zap.Int("of", len(addresses)))
		}
	}
	zap.L().Debug("finished bulk query",
		zap.Int("servers", len(result)),
		zap.Int("failures", failures))
	return result
}
