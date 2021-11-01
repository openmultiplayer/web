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

func (d *DB) GetForums(ctx context.Context) ([]bs.MybbForumsModel, error) {
	return d.db.MybbForums.FindMany().Exec(ctx)
}

func (d *DB) GetThread(ctx context.Context, tid int) ([]bs.MybbPostsModel, error) {
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

func (d *DB) GetThreads(ctx context.Context) ([]bs.MybbThreadsModel, error) {
	t, err := d.db.MybbThreads.FindMany().Exec(ctx)
	if err != nil {
		return nil, err
	}
	return t, nil
}

func (d *DB) GetPosts(ctx context.Context, tid int) ([]bs.MybbPostsModel, error) {
	p, err := d.db.MybbPosts.
		FindMany(
			bs.MybbPosts.Tid.Equals(tid),
		).
		OrderBy(
			bs.MybbPosts.Dateline.Order(bs.SortOrderAsc),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}
	return p, err
}

func (d *DB) GetUserByID(ctx context.Context, uid int) (*bs.MybbUsersModel, error) {
	u, err := d.db.MybbUsers.
		FindUnique(
			bs.MybbUsers.UId.Equals(uid),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return u, nil
}

func (d *DB) GetUsers(ctx context.Context) ([]bs.MybbUsersModel, error) {
	users, err := d.db.MybbUsers.FindMany().Exec(ctx)
	if err != nil {
		return nil, err
	}

	return users, nil
}
