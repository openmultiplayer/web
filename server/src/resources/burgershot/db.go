package burgershot

import (
	"context"

	"github.com/openmultiplayer/web/server/src/bs"
)

type DB struct {
	db *bs.PrismaClient
}

func New(db *bs.PrismaClient) Repository {
	return &DB{db}
}

func (d *DB) GetThread(ctx context.Context, tid int) (interface{}, error) {
	p, err := d.db.MybbPosts.
		FindMany(
			bs.MybbPosts.Tid.Equals(tid),
		).
		OrderBy(
			bs.MybbPosts.Dateline.Order(bs.SortOrderAsc),
		).
		With().
		Exec(ctx)

	return p, err
}

func (d *DB) GetUsers(ctx context.Context) ([]bs.MybbUsersModel, error) {
	users, err := d.db.MybbUsers.FindMany(
		bs.MybbUsers.Email.Contains("gmail"),
	).Exec(ctx)
	if err != nil {
		return nil, err
	}

	return users, nil
}
