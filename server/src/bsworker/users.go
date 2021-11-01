package bsworker

import (
	"context"

	"github.com/pkg/errors"
	"go.uber.org/zap"
)

func (w *Worker) migrateUsers(ctx context.Context) error {
	zap.L().Info("starting mybb migration")

	mybbUsers, err := w.bs.GetUsers(ctx)
	if err != nil {
		return errors.Wrap(err, "failed to get users")
	}

	zap.L().Info("migrating users", zap.Int("users", len(mybbUsers)))

	for _, u := range mybbUsers {
		nu, err := w.users.CreateUser(ctx, u.Email, "LEGACY", u.Username)
		if err != nil {
			zap.L().Warn("failed to migrate user", zap.String("username", u.Username), zap.Error(err))
		}

		zap.L().Debug("migrated user", zap.String("username", nu.Name))
	}

	return nil
}
