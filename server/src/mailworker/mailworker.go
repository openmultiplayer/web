package mailworker

import (
	"errors"

	"github.com/cenkalti/backoff"
	"github.com/openmultiplayer/web/server/src/mailer"
	"github.com/openmultiplayer/web/server/src/pubsub"
	"go.uber.org/zap"
)

type Worker struct {
	t string
	b pubsub.Bus
	m mailer.Mailer
}

type Message struct{ Name, Addr, Subj, Body string }

func (w *Worker) Run(topic string) error {
	return backoff.Retry(w.run, backoff.NewExponentialBackOff())
}

func (w *Worker) run() error {
	ch := w.b.Subscribe(w.t)
	for m := range ch {
		message, ok := m.(Message)
		if !ok {
			zap.L().Warn("unexpected message in mailer topic",
				zap.String("topic", w.t),
				zap.Any("message", m))
			continue
		}

		if err := w.m.Mail(message.Name, message.Addr, message.Subj, message.Body); err != nil {
			zap.L().Error("mailworker failed to send email", zap.Error(err))
		}

		// TODO: expose amqp ack/nack API and nack errors
	}
	return errors.New("topic subscription channel closed")
}
