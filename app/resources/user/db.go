package user

import (
	"context"
	"errors"
	"time"

	"github.com/openmultiplayer/web/internal/db"
)

type DB struct {
	db *db.PrismaClient
}

func New(db *db.PrismaClient) Repository {
	return &DB{db}
}

func (d *DB) CreateUser(ctx context.Context, email string, authMethod AuthMethod, username string) (*User, error) {
	u, err := d.db.User.CreateOne(
		db.User.Email.Set(email),
		db.User.AuthMethod.Set(db.AuthMethod(authMethod)),
		db.User.Name.Set(username),
	).Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(u, false), nil
}

func (d *DB) LinkGitHub(ctx context.Context, userID, githubAccountID, githubUsername, githubEmail string) error {
	_, err := d.db.GitHub.CreateOne(
		db.GitHub.User.Link(db.User.ID.Equals(userID)),
		db.GitHub.AccountID.Set(githubAccountID),
		db.GitHub.Username.Set(githubUsername),
		db.GitHub.Email.Set(githubEmail),
	).Exec(ctx)
	if err != nil {
		return err
	}
	return nil
}

func (d *DB) LinkDiscord(ctx context.Context, userID, discordAccountID, discordUsername, discordEmail string) error {
	_, err := d.db.Discord.CreateOne(
		db.Discord.User.Link(db.User.ID.Equals(userID)),
		db.Discord.AccountID.Set(discordAccountID),
		db.Discord.Username.Set(discordUsername),
		db.Discord.Email.Set(discordEmail),
	).Exec(ctx)
	if err != nil {
		return err
	}
	return nil
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

	threads, posts, err := d.getUserPostCounts(ctx, user.ID)
	if err != nil {
		return nil, err
	}
	u := FromModel(user, public)

	u.ThreadCount = threads
	u.PostCount = posts

	return u, nil
}

func (d *DB) getUserPostCounts(ctx context.Context, id string) (int, int, error) {
	type R struct {
		Threads int `json:"threads"`
		Posts   int `json:"posts"`
	}
	var count []R
	err := d.db.Prisma.
		QueryRaw(`
		select
			count(*) filter (where "first") as threads,
			count(*) filter (where not "first") as posts
		from (
			select p.first
			from "User" u
			inner join "Post" p on p."userId" = u.id
			where u.id = $1
		) t`, id).
		Exec(ctx, &count)
	if err != nil {
		return 0, 0, err
	}

	if len(count) == 0 {
		return 0, 0, nil
	}

	return count[0].Threads, count[0].Posts, nil
}

func (d *DB) GetUserByEmail(ctx context.Context, email string, public bool) (*User, error) {
	user, err := d.db.User.
		FindUnique(db.User.Email.Equals(email)).
		With(
			db.User.Github.Fetch(),
			db.User.Discord.Fetch(),
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

func (d *DB) UpdateUser(ctx context.Context, userId string, email, name, bio *string) (*User, error) {
	user, err := d.db.User.
		FindUnique(db.User.ID.Equals(userId)).
		Update(
			db.User.Email.SetIfPresent(email),
			db.User.Name.SetIfPresent(name),
			db.User.Bio.SetIfPresent(bio),
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

func (d *DB) Unban(ctx context.Context, userId string) (*User, error) {
	user, err := d.db.User.
		FindUnique(
			db.User.ID.Equals(userId),
		).
		Update(
			db.User.DeletedAt.SetOptional(nil),
		).
		Exec(ctx)
	if err != nil {
		return nil, err
	}

	return FromModel(user, false), nil
}
