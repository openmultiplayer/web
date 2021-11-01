package burgershot

import (
	"context"

	"github.com/openmultiplayer/web/server/src/bs"
)

type Repository interface {
	GetForums(ctx context.Context) ([]bs.MybbForumsModel, error)
	GetThread(ctx context.Context, tid int) ([]bs.MybbPostsModel, error)
	GetThreads(ctx context.Context) ([]bs.MybbThreadsModel, error)
	GetPosts(ctx context.Context, tid int) ([]bs.MybbPostsModel, error)
	GetUserByID(ctx context.Context, uid int) (*bs.MybbUsersModel, error)
	GetUsers(ctx context.Context) ([]bs.MybbUsersModel, error)
}
