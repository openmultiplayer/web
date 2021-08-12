package usersservice

import (
	"context"

	"github.com/prisma/prisma-client-go/runtime/types"

	"github.com/openmultiplayer/web/server/src/db"
)

type DB struct {
	db *db.PrismaClient
}

func New(db *db.PrismaClient) Repository {
	return &DB{db}
}

func (d *DB) GetUser(ctx context.Context, userId string) (*db.UserModel, error) {
	user, err := d.db.User.
		FindUnique(db.User.ID.Equals(userId)).
		With(
			db.User.Github.Fetch(),
			db.User.Discord.Fetch(),
			db.User.Servers.Fetch(),
		).
		Exec(ctx)
	if err != nil {
		// a "not found" in this context is still an internal server error
		// because the user *should* exist in order for the auth middleware to
		// allow the code to reach this point.
		return nil, err
	}
	
	return user, nil
}

func (d *DB) GetUsers(ctx context.Context, sort types.Direction, max, skip int) ([]db.UserModel, error) {
	users, err := d.db.User.FindMany().Take(max).Skip(skip).OrderBy(db.User.CreatedAt.Order(sort)).Exec(ctx)
	if err != nil {
		return nil, err
	}

	return users, nil
}