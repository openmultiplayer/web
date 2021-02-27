package app

import (
	"context"
	"os"
	"os/signal"
)

// WithSignal returns a context that's cancelled when the process is interrupted
func WithSignal(ctx context.Context) (context.Context, context.CancelFunc) {
	child, cancel := context.WithCancel(ctx)
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	go func() {
		select {
		case <-c:
			cancel()
		case <-ctx.Done():
		}
	}()
	return child, cancel
}
