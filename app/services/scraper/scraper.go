package scraper

import (
	"context"

	"github.com/openmultiplayer/web/app/resources/server"
)

type Scraper interface {
	Scrape(context.Context, []string) chan server.All
}

type MockScraper struct{}

func (s *MockScraper) Scrape(ctx context.Context, addresses []string) chan server.All {
	ch := make(chan server.All)

	go func() {
		ch <- server.All{
			IP: "127.0.0.1:7777",
			Core: server.Essential{
				Hostname:   "SA-MP SERVER CLAN tdm [NGRP] [GF EDIT] [Y_INI] [RUS] [BASIC] [GODFATHER] [REFUNDING] [STRCMP]",
				Players:    32,
				MaxPlayers: 128,
				Gamemode:   "Grand Larceny",
				Language:   "English",
				Password:   false,
				Version:    "0.3.7-R2",
			},
		}

		ch <- server.All{
			IP: "127.0.0.2:7777",
			Core: server.Essential{
				Hostname:   "my cool server",
				Players:    3,
				MaxPlayers: 5,
				Gamemode:   "cool",
				Language:   "English",
				Password:   false,
				Version:    "0.3.7-R2",
			},
		}
		ch <- server.All{
			IP: "127.0.0.3:7777",
			Core: server.Essential{
				Hostname:   "godfather v194",
				Players:    1,
				MaxPlayers: 999,
				Gamemode:   "godfather",
				Language:   "foriegn",
				Password:   false,
				Version:    "0.1b",
			},
		}

		close(ch)
	}()

	return ch
}
