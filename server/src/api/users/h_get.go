package users

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *UsersService) get(w http.ResponseWriter, r *http.Request) {
	ai, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	user, err := s.db.User.
		FindUnique(db.User.ID.Equals(ai.Cookie.UserID)).
		With(
			db.User.Github.Fetch(),
			db.User.Discord.Fetch(),
			db.User.Servers.Fetch(),
		).
		Exec(r.Context())
	if err != nil {
		// a "not found" in this context is still an internal server error
		// because the user *should* exist in order for the auth middleware to
		// allow the code to reach this point.
		web.StatusInternalServerError(w, err)
	}

	json.NewEncoder(w).Encode(user) //nolint:errcheck
}
