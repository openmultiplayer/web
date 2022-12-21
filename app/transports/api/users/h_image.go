package users

import (
	"crypto/md5"
	"encoding/hex"
	"errors"
	"fmt"
	"io"
	"net/http"

	"github.com/go-chi/chi"

	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) image(w http.ResponseWriter, r *http.Request) {
	id := chi.URLParam(r, "id")
	user, err := s.repo.GetUser(r.Context(), id, false)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}
	if user == nil {
		web.StatusNotFound(w, errors.New("not found"))
		return
	}

	hash := md5.Sum([]byte(user.Email))
	shash := hex.EncodeToString(hash[:])

	url := fmt.Sprintf("https://www.gravatar.com/avatar/%s?d=retro", shash)

	resp, err := http.Get(url)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	w.Header().Set("Content-Type", "image/png")
	io.Copy(w, resp.Body)
}
