package server

import (
	"context"
	"time"
)

// Repository provides an interface for reading and writing server data.
type Repository interface {
	Upsert(context.Context, All) error
	GetByID(context.Context, string) (*All, error)
	GetByAddress(context.Context, string) (*All, error)
	GetEssential(context.Context, string) (*Essential, error)
	GetServersToQuery(context.Context, time.Duration) ([]string, error)
	GetAll(context.Context, time.Duration) ([]All, error)
	SetDeleted(context.Context, string, *time.Time) (*All, error)
	GetAllCached(context.Context, time.Duration) ([]All, error)
	GetByAddressCached(context.Context, string) (*All, error)
	GenerateCacheIfNeeded(context.Context, time.Duration) error
	GenerateCache(context.Context, time.Duration) error
	GenerateCacheFromData(context.Context, []All) error
}
