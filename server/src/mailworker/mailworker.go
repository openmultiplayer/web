package mailworker

import (
	"errors"

	"github.com/cenkalti/backoff"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/mailer"
	"github.com/openmultiplayer/web/server/src/mailreg"
	"github.com/openmultiplayer/web/server/src/pubsub"
)

var global *Worker

type Worker struct {
	t string
	b pubsub.Bus
	m mailer.Mailer
}

func Init(t string, b pubsub.Bus, m mailer.Mailer) {
	if global != nil {
		panic("mailworker doubly initialised")
	}
	global = &Worker{t, b, m}
}

type Message struct {
	Name     string
	Addr     string
	Subj     string
	Template mailreg.TemplateID
	Data     interface{}
}

func Enqueue(name, addr, subj string, template mailreg.TemplateID, data interface{}) {
	global.b.Publish(global.t, Message{
		Name:     name,
		Addr:     addr,
		Subj:     subj,
		Template: template,
		Data:     data,
	})
}

func Run() error {
	return backoff.Retry(global.run, backoff.NewExponentialBackOff())
}

func (w *Worker) run() error {
	ch := global.b.Subscribe(global.t)
	for m := range ch {
		message, ok := m.(Message)
		if !ok {
			zap.L().Warn("unexpected message in mailer topic",
				zap.String("topic", global.t),
				zap.Any("message", m))
			continue
		}

		t, err := mailreg.Get(message.Template, message.Data)
		if err != nil {
			zap.L().Error("mailworker failed to format email", zap.Error(err))
			continue
		}

		if err := global.m.Mail(message.Name, message.Addr, message.Subj, t.Rich, t.Text); err != nil {
			zap.L().Error("mailworker failed to send email", zap.Error(err))
		}

		// TODO: expose amqp ack/nack API and nack errors
	}
	return errors.New("topic subscription channel closed")
}
