package auth

import (
	"context"
	"errors"

	"golang.org/x/crypto/bcrypt"

	"github.com/gofrs/uuid"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/mailreg"
	"github.com/openmultiplayer/web/server/src/mailworker"
)

var (
	ErrUserNotFound = errors.New("user not found")
	ErrNonPassword  = errors.New("cannot change a password for an account that does not use password-based authentication")
)

func (a *Authentication) Register(ctx context.Context, name, identifier, authorizer string) (*db.UserModel, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(authorizer), bcrypt.DefaultCost)
	if err != nil {
		return nil, err
	}

	key, err := uuid.NewV4()
	if err != nil {
		return nil, err
	}

	if err := mailworker.Enqueue(
		name,
		identifier,
		"Please verify your email address",
		mailreg.TemplateID("verify"),
		struct {
			Key string
		}{
			Key: key.String(),
		},
	); err != nil {
		return nil, err
	}

	user, err := a.db.User.CreateOne(
		db.User.Email.Set(identifier),
		db.User.Name.Set(name),
		db.User.Pass.Set(string(hash)),
		db.User.VerifyKey.Set(key.String()),
	).Exec(ctx)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (a *Authentication) Login(ctx context.Context, identifier, authorizer string) (*db.UserModel, error) {
	user, err := a.db.User.FindOne(db.User.Email.Equals(identifier)).Exec(ctx)
	if err != nil {
		if err == db.ErrNotFound {
			return nil, ErrUserNotFound
		}
		return nil, err
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Pass), []byte(authorizer)); err != nil {
		return nil, err
	}

	return &user, nil
}

func (a *Authentication) ChangePassword(ctx context.Context, userid, prev, new string) error {
	nextRaw, err := bcrypt.GenerateFromPassword([]byte(new), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	next := string(nextRaw)

	user, err := a.db.User.FindOne(db.User.ID.Equals(userid)).Exec(ctx)
	if err != nil {
		if err == db.ErrNotFound {
			return ErrUserNotFound
		}
		return err
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Pass), []byte(prev)); err != nil {
		return err
	}

	_, err = a.db.User.FindOne(
		db.User.ID.Equals(userid),
	).Update(
		db.User.Pass.Set(next),
	).Exec(ctx)
	if err != nil {
		return err
	}

	return nil
}

func (a *Authentication) ReRequestVerification(ctx context.Context, identifier string) error {
	key, err := uuid.NewV4()
	if err != nil {
		return err
	}

	if err := mailworker.Enqueue(
		identifier, // TODO: look up username
		identifier,
		"Please verify your email address",
		mailreg.TemplateID("verify"),
		struct {
			Key string
		}{
			Key: key.String(),
		},
	); err != nil {
		return err
	}

	_, err = a.db.User.
		FindOne(db.User.Email.Equals(identifier)).
		Update(db.User.VerifyKey.Set(key.String())).
		Exec(ctx)

	return err
}

func (a *Authentication) VerifyEmail(ctx context.Context, identifier, key string) (bool, error) {
	return false, nil
}
