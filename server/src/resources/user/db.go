package user

import (
	"context"
	"errors"
	"time"

	"github.com/openmultiplayer/web/server/src/db"
)

type DB struct {
	db *db.PrismaClient
}

func New(db *db.PrismaClient) Repository {
	return &DB{db}
}

func (d *DB) GetUser(ctx context.Context, userId string, public bool) (*User, error) {
	user, err := d.db.User.
		FindUnique(db.User.ID.Equals(userId)).
		With(
			db.User.Github.Fetch(),
			db.User.Discord.Fetch(),
			db.User.Servers.Fetch(),
		).
		Exec(ctx)
	if err != nil {
		if errors.Is(err, db.ErrNotFound) {
			return nil, nil
		}
		return nil, err
	}

	return FromModel(user, public), nil
}

func (d *DB) GetUsers(ctx context.Context, sort string, max, skip int, public bool) ([]User, error) {
	users, err := d.db.User.
		FindMany().
		Take(max).
		Skip(skip).
		OrderBy(
			db.User.CreatedAt.Order(db.Direction(sort)),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModelMany(users, public), nil
}

func (d *DB) UpdateUser(ctx context.Context, userId string, email, name *string) (*User, error) {
	user, err := d.db.User.
		FindUnique(db.User.ID.Equals(userId)).
		Update(
			db.User.Email.SetIfPresent(email),
			db.User.Name.SetIfPresent(name),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(user, false), nil
}

func (d *DB) SetAdmin(ctx context.Context, userId string, status bool) (bool, error) {
	_, err := d.db.User.FindUnique(db.User.ID.Equals(userId)).Update(
		db.User.Admin.Set(status),
	).Exec(ctx)
	if err != nil {
		return false, err
	}

	return true, nil
}

func (d *DB) Ban(ctx context.Context, userId string) (*User, error) {
	user, err := d.db.User.
		FindUnique(
			db.User.ID.Equals(userId),
		).
		Update(
			db.User.DeletedAt.Set(time.Now()),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(user, false), nil
}
