package serverdb

import (
	"context"
	"time"

	"github.com/openmultiplayer/server-index/server/src/server"
)

// Storer provides an interface for reading and writing server data.
type Storer interface {
	Upsert(context.Context, server.All) error
	GetByID(context.Context, string) (*server.All, error)
	GetByAddress(context.Context, string) (*server.All, error)
	GetEssential(context.Context, string) (*server.Essential, error)
	GetServersToQuery(context.Context, time.Duration) ([]string, error)
	GetAll(context.Context) ([]server.All, error)
}

// var _ Storer = &MockStorer{}

// // MockStorer implements a Storer for testing.
// type MockStorer struct {
// 	DB map[string]db.ServerModel
// }

// func NewMock() *MockStorer {
// 	return &MockStorer{
// 		map[string]db.ServerModel{
// 			"127.0.0.1:7777": {RelationsServer: db.RelationsServer{
// 				Core: &server.Essential{
// 					InternalCore: db.InternalCore{
// 						UpdatedAt: time.Now().Add(-time.Second),
// 					},
// 				},
// 			}},
// 			"127.0.0.2:7777": {RelationsServer: db.RelationsServer{
// 				Core: &server.Essential{
// 					InternalCore: db.InternalCore{
// 						UpdatedAt: time.Now().Add(-time.Second * 2),
// 					},
// 				},
// 			}},
// 			"127.0.0.3:7777": {RelationsServer: db.RelationsServer{
// 				Core: &server.Essential{
// 					InternalCore: db.InternalCore{
// 						UpdatedAt: time.Now().Add(-time.Second * 3),
// 					},
// 				},
// 			}},
// 		},
// 	}
// }

// func (s *MockStorer) UpsertEssential(server server.Essential) error {
// 	if ss, ok := s.DB[server.IP]; ok {
// 		ss.RelationsServer.Core = &server
// 		s.DB[server.IP] = ss
// 	}
// 	return nil
// }

// func (s *MockStorer) UpsertManyEssential(list []server.Essential) error {
// 	for _, server := range list {
// 		if err := s.UpsertEssential(server); err != nil {
// 			return err
// 		}
// 	}
// 	return nil
// }

// func (s *MockStorer) GetEssential(address string) (server.Essential, error) {
// 	result, ok := s.DB[address]
// 	if !ok {
// 		return server.Essential{}, errors.New("not found")
// 	}
// 	return result.Core(), nil
// }

// func (s *MockStorer) UpsertAll(db.ServerModel) error {
// 	return nil
// }

// func (s *MockStorer) GetAllByID(string) (db.ServerModel, error) {
// 	return db.ServerModel{}, nil
// }

// func (s *MockStorer) GetAllByAddress(string) (db.ServerModel, error) {
// 	return db.ServerModel{}, nil
// }

// func (s *MockStorer) GetServersToQuery(since time.Duration) ([]string, error) {
// 	results := []string{}
// 	for addr, svr := range s.DB {
// 		if svr.RelationsServer.Core.UpdatedAt.Before(time.Now().Add(-since)) {
// 			results = append(results, addr)
// 		}
// 	}
// 	return results, nil
// }
