package usersservice

import (
	"context"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/prisma/prisma-client-go/runtime/types"
)

type Repository interface {	
	GetUser(ctx context.Context, userId string) (*db.UserModel, error)
	GetUsers(ctx context.Context, sort types.Direction, max, skip int) ([]db.UserModel, error)
	SetAdmin(ctx context.Context, userId string, status bool) (bool, error)
}