package mailworker

import (
	"context"
	"encoding/json"

	"github.com/cenkalti/backoff"
	"github.com/pkg/errors"
	"go.uber.org/fx"

	"github.com/openmultiplayer/web/server/src/mailer"
	"github.com/openmultiplayer/web/server/src/mailreg"
	"github.com/openmultiplayer/web/server/src/pubsub"
)

type Worker struct {
	t pubsub.Topic
	b pubsub.Bus
	m mailer.Mailer
}

func New(lc fx.Lifecycle, b pubsub.Bus, m mailer.Mailer) *Worker {
	w := &Worker{b.Declare("system.email"), b, m}

	mailreg.Init("emails")

	lc.Append(fx.Hook{
		OnStart: func(context.Context) error {
			go func() {
				if err := backoff.Retry(w.run, backoff.NewExponentialBackOff()); err != nil {
					panic(err)
				}
			}()
			return nil
		},
	})

	return w
}

type Message struct {
	Name     string
	Addr     string
	Subj     string
	Template mailreg.TemplateID
	Data     interface{}
}

func (w *Worker) Enqueue(name, addr, subj string, template mailreg.TemplateID, data interface{}) error {
	body, err := json.Marshal(Message{
		Name:     name,
		Addr:     addr,
		Subj:     subj,
		Template: template,
		Data:     data,
	})
	if err != nil {
		return err
	}
	return w.b.Publish(w.t, body)
}

func (w *Worker) run() error {
	return w.b.Subscribe(w.t, func(body []byte) (bool, error) {
		var message Message
		if err := json.Unmarshal(body, &message); err != nil {
			return true, errors.Wrap(err, "unexpected message in mailer topic")
		}

		t, err := mailreg.Get(message.Template, message.Data)
		if err != nil {
			return false, errors.Wrap(err, "mailworker failed to format email")
		}

		if err := w.m.Mail(message.Name, message.Addr, message.Subj, t.Rich, t.Text); err != nil {
			return false, errors.Wrap(err, "mailworker failed to send email")
		}

		return true, nil
	})
}
