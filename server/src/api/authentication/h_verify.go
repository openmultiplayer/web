package authentication

import (
	"encoding/json"
	"net/http"

	"github.com/openmultiplayer/web/server/src/web"
)

type verifyPayload struct {
	Key string `json:"key"`
}

func (s *service) verify(w http.ResponseWriter, r *http.Request) {
	var p verifyPayload
	if err := json.NewDecoder(r.Body).Decode(&p); err != nil {
		web.StatusBadRequest(w, err)
		return
	}

	success, err := s.auth.ValidateEmailVerificationKey(r.Context(), p.Key)
	if err != nil {
		web.StatusInternalServerError(w, web.WithDescription(err, "The system encountered an internal error and could not complete your verification. Please try again later."))
		return
	}

	if success {
		w.WriteHeader(http.StatusAccepted)
	} else {
		web.StatusUnauthorized(w, web.WithSuggestion(nil, "Invalid verification code", "This verification code does not match our records. Please try re-sending the verification request."))
	}
}
