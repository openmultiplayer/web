package servers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"nhooyr.io/websocket"

	"github.com/go-chi/chi"
	"github.com/pkg/errors"
	"github.com/thanhpk/randstr"

	"github.com/openmultiplayer/web/app/services/authentication"
	"github.com/openmultiplayer/web/internal/web"
)

// This is a WebSocket handler.
//
// first response:
//
// { "code": "somerandomcode" } the code the user needs to set their mapname to
//
// subsequent responses:
//
// { "verified": true }      server ownership verified
// { "verified": false }     server ownership not verified, aborting
// { "error": "some error" } not verified, error occurred, retrying
//
func (s *service) vertify(w http.ResponseWriter, r *http.Request) {
	address := chi.URLParam(r, "address")
	if address == "" {
		web.StatusBadRequest(w, errors.New("missing address in path"))
		return
	}
	info, ok := authentication.GetAuthenticationInfo(w, r)
	if !ok {
		return
	}

	c, err := websocket.Accept(w, r, &websocket.AcceptOptions{
		OriginPatterns: []string{
			"localhost:3000", // Local development, `npm run dev`
			"open.mp",        // Live public website
		},
	})
	if err != nil {
		return // websocket.Accept writes its own errors
	}
	defer c.Close(websocket.StatusInternalError, "unknown")

	code := randstr.String(16)

	ch, err := s.verifier.Verify(r.Context(), address, code)
	if err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	if err := c.Write(r.Context(), websocket.MessageText, []byte(fmt.Sprintf(`{"code":"%s"}`, code))); err != nil {
		web.StatusInternalServerError(w, err)
		return
	}

	for m := range ch {
		ws, err := c.Writer(r.Context(), websocket.MessageText)
		if err != nil {
			web.StatusInternalServerError(w, err)
			return
		}

		if m.Verified {
			if _, err := s.verifier.Link(r.Context(), info.Cookie.UserID, address); err != nil {
				m.Verified = false
				m.Error = err.Error()
			}
		}

		if err := json.NewEncoder(ws).Encode(m); err != nil {
			return
		}
		ws.Close()
	}
}
