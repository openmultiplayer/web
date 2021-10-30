package bs

import (
	"context"

	"go.uber.org/fx"
)

type BurgershotPrismaClient PrismaClient

func New(lc fx.Lifecycle) (*PrismaClient, error) {
	prisma := NewClient()
	// bs := BurgershotPrismaClient(*prisma)

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
