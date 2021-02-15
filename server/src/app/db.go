package app

import (
	"context"

	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/db"
)

func NewDatabase(lc fx.Lifecycle) (*db.PrismaClient, error) {
	prisma := db.NewClient()

	lc.Append(fx.Hook{
		OnStart: func(context.Context) error {
			return prisma.Connect()
		},
		OnStop: func(context.Context) error {
			return prisma.Disconnect()
		},
	})

	return prisma, nil
}
