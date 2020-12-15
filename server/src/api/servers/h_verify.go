package servers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"nhooyr.io/websocket"

	"github.com/go-chi/chi"
	"github.com/openmultiplayer/web/server/src/serververify"
	"github.com/openmultiplayer/web/server/src/web"
	"github.com/pkg/errors"
	"github.com/thanhpk/randstr"
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

	c, err := websocket.Accept(w, r, nil)
	if err != nil {
		web.StatusBadRequest(w, err)
		return
	}
	defer c.Close(websocket.StatusInternalError, "unknown")

	v := serververify.Verifyer{}
	code := randstr.String(16)

	ch, err := v.Verify(r.Context(), address, code)
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

		if err := json.NewEncoder(ws).Encode(m); err != nil {
			web.StatusInternalServerError(w, err)
			return
		}
	}
}
