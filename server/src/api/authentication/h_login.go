package authentication

import (
	"net/http"

	"golang.org/x/crypto/bcrypt"

	"github.com/openmultiplayer/web/server/src/auth"
	"github.com/openmultiplayer/web/server/src/web"
)

type loginPayload struct {
	Identifier string `json:"identifier" schema:"identifier"`
	Authorizer string `json:"authorizer" schema:"authorizer"`
}

func (s *service) login(w http.ResponseWriter, r *http.Request) {
	var p loginPayload
	if err := web.DecodeBody(r, &p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	user, err := s.auth.Login(r.Context(), p.Identifier, p.Authorizer)
	if err == auth.ErrUserNotFound {
		web.StatusNotFound(w, web.WithSuggestion(err, "User not found", "Check your email accounts to ensure you're using the correct email address."))
	} else if err == bcrypt.ErrMismatchedHashAndPassword {
		web.StatusUnauthorized(w, web.WithSuggestion(err, "Incorrect password", "We recommend using a password manager to generate strong passwords and keep them safe."))
	} else if err == auth.ErrUserNotVerified {
		web.StatusUnauthorized(w, web.WithSuggestion(err, "User account not verified", "This account has not yet been verified. Please check your email for a link."))
	} else if err != nil {
		web.StatusInternalServerError(w, err)
	} else {
		s.auth.EncodeAuthCookie(w, *user)
	}
}
