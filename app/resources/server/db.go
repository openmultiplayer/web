package server

import (
	"context"
	"os"
	"strings"
	"time"

	"github.com/goccy/go-json"
	"github.com/pkg/errors"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/internal/config"
	"github.com/openmultiplayer/web/internal/db"
)

var _ Repository = &DB{}

type DB struct {
	client *db.PrismaClient
	cfg    config.Config
}

func New(client *db.PrismaClient, cfg config.Config) Repository {
	return &DB{client, cfg}
}

func (s *DB) Upsert(ctx context.Context, e All) error {
	var svr *db.ServerModel
	var err error

	// Check whether an IP is blocked or not, not port specific
	blockedServer, err := s.client.ServerIPBlacklist.
		FindUnique(db.ServerIPBlacklist.IP.Equals(strings.Split(e.IP, ":")[0])).
		Exec(ctx)

	if blockedServer != nil {
		return errors.Wrapf(err, "IP address is blocked")
	}

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

	svr, err = s.client.Server.
		FindUnique(db.Server.IP.Equals(e.IP)).
		Update(
			db.Server.IP.Set(e.IP),
			db.Server.Hn.Set(e.Core.Hostname),
			db.Server.Pc.Set(db.BigInt(e.Core.Players)),
			db.Server.Pm.Set(db.BigInt(e.Core.MaxPlayers)),
			db.Server.Gm.Set(e.Core.Gamemode),
			db.Server.La.Set(e.Core.Language),
			db.Server.Pa.Set(e.Core.Password),
			db.Server.Vn.Set(e.Core.Version),
			db.Server.Omp.Set(e.Core.IsOmp),
			db.Server.Domain.SetOptional(e.Domain),
			db.Server.Description.SetOptional(e.Description),
			db.Server.Banner.SetOptional(e.Banner),
			db.Server.Active.Set(e.Active),
			db.Server.LastActive.Set(time.Now()),
		).Exec(ctx)
	if errors.Is(err, db.ErrNotFound) {
		if !e.Active {
			// don't store inactive servers that don't exist.
			return nil
		} else {
			if svr, err = s.client.Server.CreateOne(
				db.Server.IP.Set(e.IP),
				db.Server.Hn.Set(e.Core.Hostname),
				db.Server.Pc.Set(db.BigInt(e.Core.Players)),
				db.Server.Pm.Set(db.BigInt(e.Core.MaxPlayers)),
				db.Server.Gm.Set(e.Core.Gamemode),
				db.Server.La.Set(e.Core.Language),
				db.Server.Pa.Set(e.Core.Password),
				db.Server.Vn.Set(e.Core.Version),
				db.Server.Active.Set(e.Active),
				db.Server.Omp.Set(e.Core.IsOmp),
				db.Server.Pending.Set(true),
				db.Server.Domain.SetOptional(e.Domain),
				db.Server.Description.SetOptional(e.Description),
				db.Server.Banner.SetOptional(e.Banner),
				db.Server.LastActive.Set(time.Now()),
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
		FindMany(db.Server.UpdatedAt.Before(time.Now().Add(-before)), db.Server.DeletedAt.IsNull(), db.Server.Pending.Equals(false)).
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

func (s *DB) GetAll(ctx context.Context, lastActive time.Duration) ([]All, error) {
	result, err := s.client.Server.
		FindMany(db.Server.LastActive.After(time.Now().Add(lastActive)), db.Server.DeletedAt.IsNull(), db.Server.Pending.Equals(false)).
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

func (s *DB) GetAllCached(ctx context.Context, lastActive time.Duration) ([]All, error) {
	result := []All{}
	list := []All{}

	s.GenerateCacheIfNeeded(ctx, lastActive)

	dat, err := os.ReadFile(s.cfg.CachedServers)
	if err != nil {
		return nil, err
	}

	err = json.Unmarshal(dat, &result)
	if err != nil {
		return nil, err
	}

	for idx := range result {
		if result[idx].LastActive != nil && result[idx].LastActive.After(time.Now().Add(lastActive)) {
			list = append(list, result[idx])
		}
	}

	return list, nil
}

func (s *DB) GetByAddressCached(ctx context.Context, address string) (*All, error) {
	result, err := s.GetAllCached(ctx, -120*time.Hour)
	if err != nil {
		return nil, err
	}

	for _, n := range result {
		if address == n.IP {
			return &n, nil
		}
	}

	return nil, errors.New("server_not_found")
}

func (s *DB) GenerateCacheIfNeeded(ctx context.Context, lastActive time.Duration) error {
	_, err := os.Stat(s.cfg.CachedServers)
	if errors.Is(err, os.ErrNotExist) {
		return s.GenerateCache(ctx, lastActive)
	}
	return nil
}

func (s *DB) GenerateCache(ctx context.Context, lastActive time.Duration) error {
	result, err := s.GetAll(ctx, lastActive)
	if err != nil {
		zap.L().Error("There was an error converting native array of servers to JSON data",
			zap.Error(err))
		return err
	}
	return s.GenerateCacheFromData(ctx, result)
}

func (s *DB) GenerateCacheFromData(ctx context.Context, servers []All) error {
	// Let's save all servers info our cache file to be used in our API data processing instead of DB
	jsonData, err := json.Marshal(servers)
	if err != nil {
		zap.L().Error("There was an error converting native array of servers to JSON data",
			zap.Error(err))
		return err
	}

	cacheFile, err := os.Create(s.cfg.CachedServers)
	if err != nil {
		zap.L().Error("Could not create server cache file",
			zap.Error(err))
		return err
	}

	_, err = cacheFile.Write(jsonData)
	if err != nil {
		zap.L().Error("There was an error writing collected servers into cache file",
			zap.Error(err))
		return err
	}

	return nil
}
