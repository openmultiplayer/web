package user

import (
	"context"
)

type Repository interface {
	CreateUser(ctx context.Context, email string, authMethod AuthMethod, username string) (*User, error)
	LinkGitHub(ctx context.Context, userID, githubAccountID, githubUsername, githubEmail string) error
	LinkDiscord(ctx context.Context, userID, discordAccountID, discordUsername, discordEmail string) error

	GetUser(ctx context.Context, userId string, public bool) (*User, error)
	GetUserByEmail(ctx context.Context, email string, public bool) (*User, error)
	GetUsers(ctx context.Context, sort string, max, skip int, public bool) ([]User, error)
	UpdateUser(ctx context.Context, userId string, email, name, bio *string) (*User, error)
	SetAdmin(ctx context.Context, userId string, status bool) (bool, error)
	Ban(ctx context.Context, userId string) (*User, error)
	Unban(ctx context.Context, userId string) (*User, error)
}
