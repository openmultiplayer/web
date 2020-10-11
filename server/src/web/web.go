package web

import (
	"encoding/json"
	"errors"
	"io"
	"net/http"

	"go.uber.org/zap"
)

// StatusNotFound writes a pretty error
func StatusNotFound(w http.ResponseWriter, err error) {
	w.WriteHeader(http.StatusNotFound)
	errToWriter(w, err)
}

// StatusInternalServerError writes a pretty error and logs
func StatusInternalServerError(w http.ResponseWriter, err error) {
	zap.L().Error("internal error", zap.Error(err))
	w.WriteHeader(http.StatusInternalServerError)
	errToWriter(w, err)
}

// StatusUnauthorized writes a pretty error
func StatusUnauthorized(w http.ResponseWriter, err error) {
	w.Header().Add("WWW-Authenticate", "Basic")
	w.WriteHeader(http.StatusUnauthorized)
	errToWriter(w, err)
}

// StatusNotAcceptable writes a pretty error
func StatusNotAcceptable(w http.ResponseWriter, err error) {
	w.WriteHeader(http.StatusNotAcceptable)
	errToWriter(w, err)
}

// StatusBadRequest writes a pretty error
func StatusBadRequest(w http.ResponseWriter, err error) {
	w.WriteHeader(http.StatusBadRequest)
	errToWriter(w, err)
}

// HumanReadable is an error with a human readable description for displaying
// on UI to end-users. It also contains an optional suggested solution field.
type HumanReadable struct {
	err     error
	desc    string
	suggest string
}

// Error implements error
func (h *HumanReadable) Error() string {
	return h.err.Error()
}

// WithDescription wraps an error with a human readable description.
func WithDescription(err error, desc string) error {
	return &HumanReadable{err, desc, ""}
}

// WithSuggestion wraps an error with a human readable description and solution.
func WithSuggestion(err error, desc, suggest string) error {
	return &HumanReadable{err, desc, suggest}
}

func errToWriter(w io.Writer, err error) {
	if err == nil {
		err = errors.New("Unknown or unspecified error")
	}

	var message string
	var suggest string
	herr, ok := err.(*HumanReadable)
	if ok {
		message = herr.desc
		suggest = herr.suggest
	}

	if e := json.NewEncoder(w).Encode(struct {
		Message    string `json:"message,omitempty"`   // human readable message
		Suggestion string `json:"suggested,omitempty"` // suggestion for fix
		Error      string `json:"error,omitempty"`     // internal error string
	}{
		Message:    message,
		Suggestion: suggest,
		Error:      err.Error(),
	}); e != nil {
		zap.L().Fatal(
			"failed to write error response",
			zap.Error(e),
			zap.Any("original_error", err))
	}
}
