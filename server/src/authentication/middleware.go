package authentication

import (
	"context"
	"net/http"
	"time"

	"go.uber.org/zap"
)

// Info represents data that is extracted from the path, validated
// against auth and stored in request context.
type Info struct {
	Authenticated bool
	Cookie        Cookie
}

// Cookie represents the data structure that is stored inside the securecookie
// value. It is sent to the client in an encrypted (HMAC) form and decrypted on
// any future requests and propagated to handlers.
type Cookie struct {
	UserID  string
	Created time.Time
}

var contextKey = struct{}{}

const secureCookieName = "openmultiplayer-session"

// WithAuthentication provides middleware for enforcing authentication
func (a *State) WithAuthentication(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		auth := Info{}

		if a.doCookieAuth(r, &auth) {
			auth.Authenticated = true
			// } else if a.doTokenAuth(r, &auth) {
			// 	auth.Authenticated = true
		} else {
			zap.L().Debug("request does not contain an auth cookie")
			auth.Authenticated = false
		}

		// If the request contained a valid cookie, `auth.Authenticated` is now
		// true and `auth.Cookie` contains the user information.
		// Otherwise, `auth.Authenticated` is false and `auth.Cookie` is empty.

		next.ServeHTTP(w, r.WithContext(context.WithValue(
			r.Context(),
			contextKey,
			auth,
		)))
	})
}

func (a *State) doCookieAuth(r *http.Request, auth *Info) bool {
	cookie, err := r.Cookie(secureCookieName)
	if err != nil {
		return false
	}

	if err = a.sc.Decode(secureCookieName, cookie.Value, &auth.Cookie); err != nil {
		zap.L().Debug("failed to decode auth cookie", zap.Error(err))
		return false
	}

	return true
}

// func (a *Authentication) doTokenAuth(r *http.Request, auth *Info) bool {
// 	ah := r.Header.Get("Authorization")
// 	if ah == "" {
// 		return false
// 	}

// 	split := strings.SplitN(ah, " ", 2)
// 	if len(split) != 2 {
// 		zap.L().Error("invalid authorization header format")
// 		return false
// 	}

// 	token, err := a.db.AccessToken.FindOne(db.AccessToken.ID.Equals(split[1])).Exec(r.Context())
// 	if err != nil {
// 		if err != db.ErrNotFound {
// 			zap.L().Error("failed to lookup auth token", zap.Error(err))
// 		}
// 		return false
// 	}

// 	if disabledAt, disabled := token.DisabledAt(); disabled && disabledAt.After(time.Now()) {
// 		zap.L().Debug("failed to lookup auth token", zap.Error(err))
// 		return false
// 	}

// 	auth.Cookie = Cookie{
// 		UserID:  token.UserID,
// 		Created: token.CreatedAt,
// 	}
// 	return true
// }
