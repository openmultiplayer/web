package serverdb

import (
	"context"
	"time"

	"github.com/openmultiplayer/web/server/src/server"
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
