package burgershot

import (
	"context"

	"github.com/openmultiplayer/web/server/src/bs"
)

type Repository interface {
	GetThread(ctx context.Context, tid int) (interface{}, error)
	GetUsers(ctx context.Context) ([]bs.MybbUsersModel, error)
}
