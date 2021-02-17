package mailer

import (
	"fmt"

	"github.com/pkg/errors"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"

	"github.com/openmultiplayer/web/server/src/config"
)

type Mailer interface {
	Mail(toname, toaddr, subj, rich, text string) error
}

type Mock struct{}

func (m *Mock) Mail(toname, toaddr, subj, rich, text string) error {
	fmt.Printf(`Mock email sender: %s <%s>\nFROM %s\nRICH:\n%s\nTEXT:\n%s\m`, toname, toaddr, subj, rich, text)
	return nil
}

type SendGrid struct {
	fromname string
	fromaddr string
	client   *sendgrid.Client
}

func NewSendGrid(cfg config.Config) Mailer {
	return &SendGrid{
		"The open.mp Team",
		"team@open.mp",
		sendgrid.NewSendClient(cfg.SendgridAPIKey),
	}
}

func (m *SendGrid) Mail(toname, toaddr, subj, rich, text string) error {
	from := mail.NewEmail(m.fromname, m.fromaddr)
	to := mail.NewEmail(toname, toaddr)

	message := mail.NewSingleEmail(from, subj, to, text, rich)
	_, err := m.client.Send(message)
	if err != nil {
		return errors.Wrap(err, "failed to send email via sendgrid")
	}

	return nil
}
