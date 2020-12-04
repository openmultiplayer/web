package auth

import (
	"context"
	"net/http"
	"time"

	"github.com/gorilla/securecookie"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/web"
)

// Authentication stores state for performing authentication
type Authentication struct {
	db *db.PrismaClient
	sc *securecookie.SecureCookie
}

// OAuthProvider describes a type that can provide an OAuth2 authentication
// method for users.
//
// Link simply returns a URL to start the OAuth2 process.
//
// Login is called by the callback and handles the code/token exchange and
// returns a User object to the caller to be encoded into a cookie.
type OAuthProvider interface {
	Link() string
	Login(ctx context.Context, state, code string) (*db.UserModel, error)
}

// New initialises a new authentication service
func New(
	db *db.PrismaClient,
	hashKey,
	blockKey []byte,
) *Authentication {
	a := &Authentication{
		db: db,
		sc: securecookie.New(hashKey, blockKey),
	}

	return a
}

// EncodeAuthCookie writes the secure user auth cookie to the response writer.
func (a *Authentication) EncodeAuthCookie(w http.ResponseWriter, user db.UserModel) {
	encoded, err := a.sc.Encode(secureCookieName, Cookie{
		UserID:  user.ID,
		Created: time.Now(),
	})
	if err != nil {
		web.StatusUnauthorized(w, err)
		return
	}

	http.SetCookie(w, &http.Cookie{
		Name:     secureCookieName,
		Value:    encoded,
		Path:     "/",
		Secure:   false,
		HttpOnly: true,
	})
}
