package server

import (
	"errors"
	"time"

	"github.com/openmultiplayer/web/internal/db"
)

// All contains all the information associated with a game server including the core information, the standard SA:MP
// "rules" and "players" lists as well as any additional fields to enhance the server browsing experience.
type All struct {
	IP          string            `json:"ip"`
	Domain      *string           `json:"dm"`
	Core        Essential         `json:"core"`
	Rules       map[string]string `json:"ru,omitempty"`
	Description *string           `json:"description"`
	Banner      *string           `json:"banner"`
	Active      bool              `json:"active"`
	Pending     bool              `json:"pending"`
	LastUpdated time.Time         `json:"lastUpdated"`
	LastActive  *time.Time        `json:"lastActive"`
}

// Essential stores the standard SA:MP 'info' query fields necessary for server
// lists. The json keys are short to cut down on network traffic since these are
// the objects returned to a listing request which could contain hundreds of
// objects.
type Essential struct {
	IP         string `json:"ip"`
	Hostname   string `json:"hn"`
	Players    int64  `json:"pc"`
	MaxPlayers int64  `json:"pm"`
	Gamemode   string `json:"gm"`
	Language   string `json:"la"`
	Password   bool   `json:"pa"`
	Version    string `json:"vn"`
	IsOmp      bool   `json:"omp"`
	Partner    bool   `json:"pr"`
}

// Validate checks the contents of a Server object to ensure all the required fields are valid.
func (server *All) Validate() (errs []error) {
	_, addrErrs := AddressFromString(server.Core.IP)
	errs = append(errs, addrErrs...)

	if len(server.Core.Hostname) < 1 {
		errs = append(errs, errors.New("hostname is empty"))
	}

	if server.Core.MaxPlayers == 0 {
		errs = append(errs, errors.New("maxplayers is empty"))
	}

	if len(server.Core.Gamemode) < 1 {
		errs = append(errs, errors.New("gamemode is empty"))
	}

	return
}

// Example returns an example of a server
func (server All) Example() All {
	return All{
		Core: Essential{
			IP:         "127.0.0.1:7777",
			Hostname:   "SA-MP SERVER CLAN tdm [NGRP] [GF EDIT] [Y_INI] [RUS] [BASIC] [GODFATHER] [REFUNDING] [STRCMP]",
			Players:    32,
			MaxPlayers: 128,
			Gamemode:   "Grand Larceny",
			Language:   "English",
			Password:   false,
			Version:    "0.3.7-R2",
		},
		Rules: map[string]string{
			"lagcomp":   "On",
			"mapname":   "San Andreas",
			"version":   "0.3.7-R2",
			"weather":   "10",
			"weburl":    "www.sa-mp.mp",
			"worldtime": "10:00",
		},
		Description: &[]string{"An awesome server! Come and play with us."}[0],
		Banner:      &[]string{"https://i.imgur.com/Juaezhv.jpg"}[0],
		Active:      true,
	}
}

func dbToAPI(r db.ServerModel) *All {
	return &All{
		IP:     r.IP,
		Domain: r.InnerServer.Domain,
		Core: Essential{
			IP:         r.IP,
			Hostname:   r.Hn,
			Players:    int64(r.Pc),
			MaxPlayers: int64(r.Pm),
			Gamemode:   r.Gm,
			Language:   r.La,
			Password:   r.Pa,
			Version:    r.Vn,
			IsOmp:      r.Omp,
			Partner:    r.Partner,
		},
		Rules:       transformRules(r.Ru()),
		Description: r.InnerServer.Description,
		Banner:      r.InnerServer.Banner,
		Active:      r.Active,
		Pending:     r.Pending,
		LastUpdated: r.UpdatedAt,
		LastActive:  r.InnerServer.LastActive,
	}
}

func dbToAPISlice(r []db.ServerModel) []All {
	result := []All{}
	for _, s := range r {
		obj := dbToAPI(s)
		result = append(result, *obj)
	}
	return result
}

func transformRules(ru []db.RuleModel) map[string]string {
	out := make(map[string]string)
	for _, r := range ru {
		out[r.Name] = r.Value
	}
	return out
}
