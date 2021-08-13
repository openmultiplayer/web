package ratelimiter

import (
	"net/http"
	"time"

	"github.com/sethvargo/go-limiter/httplimit"
	"github.com/sethvargo/go-limiter/memorystore"
)

func WithRateLimit(perhour int) func(next http.Handler) http.Handler {
	store, err := memorystore.New(&memorystore.Config{
		Tokens:   uint64(perhour),
		Interval: time.Hour,
	})
	if err != nil {
		panic(err)
	}

	mw, err := httplimit.NewMiddleware(store, httplimit.IPKeyFunc("CF-Connecting-IP", "X-Forwarded-For", "X-Real-IP"))
	if err != nil {
		panic(err)
	}

	return mw.Handle
}
