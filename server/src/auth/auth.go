package auth

import (
	"net/http"
	"time"

	"github.com/gorilla/securecookie"

	"github.com/openmultiplayer/web/server/src/db"
	"github.com/openmultiplayer/web/server/src/verifier"
	"github.com/openmultiplayer/web/server/src/web"
)

// Authentication stores state for performing authentication
type Authentication struct {
	db *db.PrismaClient
	sc *securecookie.SecureCookie
	vf verifier.Verifier
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
