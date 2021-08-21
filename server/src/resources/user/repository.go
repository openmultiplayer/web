package user

import (
	"context"
)

type Repository interface {
	GetUser(ctx context.Context, userId string) (*User, error)
	GetUsers(ctx context.Context, sort string, max, skip int) ([]User, error)
	UpdateUser(ctx context.Context, userId string, email, name *string) (*User, error)
	SetAdmin(ctx context.Context, userId string, status bool) (bool, error)
	Ban(ctx context.Context, userId string) (*User, error)
}
