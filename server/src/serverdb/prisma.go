package serverdb

import (
	"context"
	"time"

	"github.com/openmultiplayer/server-index/server/src/db"
	"github.com/openmultiplayer/server-index/server/src/server"
	"github.com/pkg/errors"
)

var _ Storer = &PrismaStorer{}

type PrismaStorer struct {
	client *db.PrismaClient
}

func NewPrisma(client *db.PrismaClient) *PrismaStorer {
	return &PrismaStorer{client}
}

func (s *PrismaStorer) Upsert(ctx context.Context, e server.All) error {
	if !e.Active {
		s.client.Server.
			FindOne(db.Server.IP.Equals(e.IP)).
			Update(db.Server.Active.Set(false)).
			Exec(ctx)
		return nil
	}

	var svr db.ServerModel
	var err error
	svr, err = s.client.Server.
		FindOne(db.Server.IP.Equals(e.IP)).
		Update(
			db.Server.IP.Set(e.IP),
			db.Server.Hn.Set(e.Core.Hostname),
			db.Server.Pc.Set(e.Core.Players),
			db.Server.Pm.Set(e.Core.MaxPlayers),
			db.Server.Gm.Set(e.Core.Gamemode),
			db.Server.La.Set(e.Core.Language),
			db.Server.Pa.Set(e.Core.Password),
			db.Server.Vn.Set(e.Core.Version),
			db.Server.Domain.SetOptional(e.Domain),
			db.Server.Description.SetOptional(e.Description),
			db.Server.Banner.SetOptional(e.Banner),
			db.Server.Active.Set(e.Active),
		).Exec(ctx)
	if err == db.ErrNotFound {
		if !e.Active {
			// don't store inactive servers that don't exist.
			return nil
		} else {
			if svr, err = s.client.Server.CreateOne(
				db.Server.IP.Set(e.IP),
				db.Server.Hn.Set(e.Core.Hostname),
				db.Server.Pc.Set(e.Core.Players),
				db.Server.Pm.Set(e.Core.MaxPlayers),
				db.Server.Gm.Set(e.Core.Gamemode),
				db.Server.La.Set(e.Core.Language),
				db.Server.Pa.Set(e.Core.Password),
				db.Server.Vn.Set(e.Core.Version),
				db.Server.Active.Set(e.Active),
				db.Server.Domain.SetOptional(e.Domain),
				db.Server.Description.SetOptional(e.Description),
				db.Server.Banner.SetOptional(e.Banner),
			).Exec(ctx); err != nil {
				return errors.Wrapf(err, "failed to create '%v'", e)
			}
		}
	} else if err != nil {
		return errors.Wrapf(err, "failed to update '%v'", e)
	}

	for k, v := range e.Rules {
		_, err := s.client.Rule.
			FindOne(db.Rule.RuleServerIDRuleNameIndex(
				db.Rule.Name.Equals(k),
				db.Rule.ServerID.Equals(svr.ID),
			)).
			Update(db.Rule.Value.Set(v)).
			Exec(ctx)
		if err != nil {
			_, err = s.client.Rule.CreateOne(
				db.Rule.Name.Set(k),
				db.Rule.Value.Set(v),
				db.Rule.Server.Link(db.Server.ID.Equals(svr.ID)),
			).Exec(ctx)
			if err != nil {
				return errors.Wrapf(err, "failed to create rule '%s': '%s' for %s", k, v, svr.ID)
			}
		} else if err != nil {
			return errors.Wrapf(err, "failed to update rule '%s': '%s'", k, v)
		}
	}

	return nil
}

func (s *PrismaStorer) GetByID(ctx context.Context, id string) (*server.All, error) {
	r, err := s.client.Server.FindOne(db.Server.ID.Equals(id)).Exec(ctx)
	if err != nil {
		return nil, err
	}
	return dbToAPI(r), nil
}

func (s *PrismaStorer) GetByAddress(ctx context.Context, address string) (*server.All, error) {
	r, err := s.client.Server.FindOne(db.Server.IP.Equals(address)).Exec(ctx)
	if err != nil {
		return nil, err
	}
	return dbToAPI(r), nil
}

func (s *PrismaStorer) GetEssential(context.Context, string) (*server.Essential, error) {
	return nil, nil
}

func (s *PrismaStorer) GetServersToQuery(ctx context.Context, since time.Duration) ([]string, error) {
	result, err := s.client.Server.
		FindMany(db.Server.UpdatedAt.Before(time.Now().Add(-since))).
		Exec(ctx)
	if err != nil {
		return nil, err
	}
	addresses := []string{}
	for _, r := range result {
		addresses = append(addresses, r.IP)
	}
	return addresses, nil
}

func (s *PrismaStorer) GetAll(ctx context.Context) ([]server.All, error) {
	result, err := s.client.Server.FindMany(db.Server.Active.Equals(true)).Exec(ctx)
	if err != nil {
		return nil, err
	}
	return dbToAPISlice(result), err
}

func dbToAPI(r db.ServerModel) *server.All {
	return &server.All{
		IP:     r.IP,
		Domain: r.InternalServer.Domain,
		Core: server.Essential{
			IP:         r.IP,
			Hostname:   r.Hn,
			Players:    r.Pc,
			MaxPlayers: r.Pm,
			Gamemode:   r.Gm,
			Language:   r.La,
			Password:   r.Pa,
			Version:    r.Vn,
		},
		Rules:       transformRules(r.Ru()),
		Description: r.InternalServer.Description,
		Banner:      r.InternalServer.Banner,
		Active:      r.Active,
	}
}

func dbToAPISlice(r []db.ServerModel) []server.All {
	result := []server.All{}
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
