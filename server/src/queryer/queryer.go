package queryer

import (
	"context"
	"errors"
	"time"

	sampquery "github.com/Southclaws/go-samp-query"
)

type Queryer interface {
	Query(ctx context.Context, address string) (sampquery.Server, error)
}

type SAMPQueryer struct{}

func NewSAMPQueryer() Queryer {
	return &SAMPQueryer{}
}

func (q *SAMPQueryer) Query(ctx context.Context, address string) (sampquery.Server, error) {
	ctx, cf := context.WithTimeout(ctx, time.Second*10)
	defer cf()
	return sampquery.GetServerInfo(ctx, address, true)
}

// Mock for testing

type MockQueryer struct{}

func (q *MockQueryer) Query(ctx context.Context, address string) (sampquery.Server, error) {
	switch address {
	case "127.0.0.1:7777":
		return sampquery.Server{
			Address:    "127.0.0.1:7777",
			Hostname:   "SA-MP SERVER CLAN tdm [NGRP] [GF EDIT] [Y_INI] [RUS] [BASIC] [GODFATHER] [REFUNDING] [STRCMP]",
			Players:    32,
			MaxPlayers: 128,
			Gamemode:   "Grand Larceny",
			Language:   "English",
			Password:   false,
			// Version:    "0.3.7-R2",
		}, nil
	case "127.0.0.2:7777":
		return sampquery.Server{
			Address:    "127.0.0.2:7777",
			Hostname:   "my cool server",
			Players:    3,
			MaxPlayers: 5,
			Gamemode:   "cool",
			Language:   "English",
			Password:   false,
			// Version:    "0.3.7-R2",
		}, nil
	case "127.0.0.3:7777":
		return sampquery.Server{
			Address:    "127.0.0.3:7777",
			Hostname:   "godfather v194",
			Players:    1,
			MaxPlayers: 999,
			Gamemode:   "godfather",
			Language:   "foriegn",
			Password:   false,
			// Version:    "0.1b",
		}, nil
	}
	return sampquery.Server{}, errors.New("not found")
}
