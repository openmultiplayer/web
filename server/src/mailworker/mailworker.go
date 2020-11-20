package mailworker

import (
	"encoding/json"

	"github.com/cenkalti/backoff"
	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/server/src/mailer"
	"github.com/openmultiplayer/web/server/src/mailreg"
	"github.com/openmultiplayer/web/server/src/pubsub"
)

var global *Worker

type Worker struct {
	t pubsub.Topic
	b pubsub.Bus
	m mailer.Mailer
}

func Init(t pubsub.Topic, b pubsub.Bus, m mailer.Mailer) {
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

func Enqueue(name, addr, subj string, template mailreg.TemplateID, data interface{}) error {
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
	return global.b.Publish(global.t, body)
}

func Run() error {
	return backoff.Retry(global.run, backoff.NewExponentialBackOff())
}

func (w *Worker) run() error {
	return global.b.Subscribe(global.t, func(body []byte) (bool, error) {
		var message Message
		if err := json.Unmarshal(body, &message); err != nil {
			return true, errors.Wrap(err, "unexpected message in mailer topic")
		}

		t, err := mailreg.Get(message.Template, message.Data)
		if err != nil {
			return false, errors.Wrap(err, "mailworker failed to format email")
		}

		if err := global.m.Mail(message.Name, message.Addr, message.Subj, t.Rich, t.Text); err != nil {
			return false, errors.Wrap(err, "mailworker failed to send email")
		}

		return true, nil
	})
}
