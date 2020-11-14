package authentication

import (
	"net/http"

	"golang.org/x/crypto/bcrypt"

	"github.com/openmultiplayer/web/server/src/auth"
	"github.com/openmultiplayer/web/server/src/web"
)

func (s *service) login(w http.ResponseWriter, r *http.Request) {
	email := r.PostFormValue(FormKeyIdentifier)
	password := r.PostFormValue(FormKeyAuthorizer)

	user, err := s.auth.Login(r.Context(), email, password)
	if err == auth.ErrUserNotFound {
		web.StatusNotFound(w, nil)
	} else if err == bcrypt.ErrMismatchedHashAndPassword {
		web.StatusUnauthorized(w, nil)
	} else if err != nil {
		web.StatusInternalServerError(w, err)
	}
	s.auth.EncodeAuthCookie(w, *user)
}
