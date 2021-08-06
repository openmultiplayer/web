package users

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/authentication"
	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *UsersService) patch(w http.ResponseWriter, r *http.Request) {
	ai, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	var user *db.UserModel
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	user, err := s.db.User.FindUnique(db.User.ID.Equals(ai.Cookie.UserID)).Update(
	// TODO: Waiting for Prisma update.
	// db.User.Email.SetIfPresent(user.Email),
	// db.User.Name.SetIfPresent(user.Name),
	).Exec(r.Context())
	if err != nil {
		// a "not found" in this context is still an internal server error
		// because the user *should* exist in order for the auth middleware to
		// allow the code to reach this point.
		web.StatusInternalServerError(w, err)
	}

	json.NewEncoder(w).Encode(user) //nolint:errcheck
}
