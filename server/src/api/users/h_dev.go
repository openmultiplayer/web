package users

import (
	"encoding/json"
	"errors"
	"net/http"
	"os"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/web"
	"go.uber.org/zap"
)

type devParams struct {
	ID     string `qstring:"id"`
	Secret string `qstring:"secret"`
}

func (s *UsersService) dev(w http.ResponseWriter, r *http.Request) {
	secret := os.Getenv("DEV_LOGIN_SECRET")
	if secret == "" {
		web.StatusNotAcceptable(w, errors.New("dev login not enabled"))
		return
	}

	var p devParams
	if !web.ParseQuery(w, r, &p) {
		web.StatusBadRequest(w, errors.New("invalid query"))
		return
	}

	if p.Secret != secret {
		web.StatusUnauthorized(w, errors.New("go away"))
		return
	}

	zap.L().Info("dev login", zap.Any("params", p))

	user, err := s.db.User.FindUnique(db.User.ID.Equals(p.ID)).Exec(r.Context())
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	zap.L().Info("dev login", zap.Any("user", user))

	s.auth.EncodeAuthCookie(w, *user)
	json.NewEncoder(w).Encode(user)
}
