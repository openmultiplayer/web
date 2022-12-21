package server

import (
	"context"
	"time"

	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/internal/db"
)

var _ Repository = &DB{}

type DB struct {
	client *db.PrismaClient
}

func New(client *db.PrismaClient) Repository {
	return &DB{client}
}

func (s *DB) Upsert(ctx context.Context, e All) error {
	if !e.Active {
		// If a server is inactive and it doesn't already exist in the database
		// then no data needs to be written and this is not an error. This only
		// happens during seeding where a server from the initial seed list is
		// offline during the first-time query and DB seed process.
		//nolint:errcheck
		s.client.Server.
			FindUnique(db.Server.IP.Equals(e.IP)).
			Update(db.Server.Active.Set(false)).
			Exec(ctx)
		return nil
	}

	var svr *db.ServerModel
	var err error
	svr, err = s.client.Server.
		FindUnique(db.Server.IP.Equals(e.IP)).
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
	if errors.Is(err, db.ErrNotFound) {
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
			FindUnique(db.Rule.RuleServerIDRuleNameIndex(
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
		}
	}

	return nil
}

func (s *DB) GetByID(ctx context.Context, id string) (*All, error) {
	r, err := s.client.Server.FindUnique(db.Server.ID.Equals(id)).Exec(ctx)
	if err != nil {
		return nil, err
	}
	return dbToAPI(*r), nil
}

func (s *DB) GetByAddress(ctx context.Context, address string) (*All, error) {
	r, err := s.client.Server.
		FindUnique(db.Server.IP.Equals(address)).
		With(db.Server.Ru.Fetch()).
		Exec(ctx)
	if err != nil {
		return nil, err
	}
	return dbToAPI(*r), nil
}

func (s *DB) GetEssential(context.Context, string) (*Essential, error) {
	return nil, nil
}

func (s *DB) GetServersToQuery(ctx context.Context, before time.Duration) ([]string, error) {
	result, err := s.client.Server.
		FindMany(db.Server.UpdatedAt.Before(time.Now().Add(-before))).
		OrderBy(db.Server.UpdatedAt.Order(db.SortOrderDesc)).
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

func (s *DB) GetAll(ctx context.Context) ([]All, error) {
	result, err := s.client.Server.
		FindMany(db.Server.Active.Equals(true), db.Server.DeletedAt.IsNull()).
		OrderBy(db.Server.UpdatedAt.Order(db.SortOrderAsc)).
		With(db.Server.Ru.Fetch()).
		Exec(ctx)
	if err != nil {
		return nil, err
	}
	return dbToAPISlice(result), err
}

func (s *DB) SetDeleted(ctx context.Context, ip string, at *time.Time) (*All, error) {
	result, err := s.client.Server.
		FindUnique(db.Server.IP.Equals(ip)).
		With(db.Server.Ru.Fetch()).
		Update(db.Server.DeletedAt.SetOptional(at)).
		Exec(ctx)
	if err != nil {
		return nil, err
	}
	return dbToAPI(*result), err
}
