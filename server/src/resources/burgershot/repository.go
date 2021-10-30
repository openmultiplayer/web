package burgershot

import "context"

type Repository interface {
	GetThread(ctx context.Context, tid int) (interface{}, error)
}
