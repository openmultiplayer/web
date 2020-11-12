package mailer

import (
	"fmt"

	"github.com/pkg/errors"
	"github.com/sendgrid/sendgrid-go"
	"github.com/sendgrid/sendgrid-go/helpers/mail"
)

type Mailer interface {
	Mail(toname, toaddr, subj, body string) error
}

type Mock struct{}

func (m *Mock) Mail(toname, toaddr, subj, body string) error {
	fmt.Printf(`Mock email sender: %s <%s>\nFROM %s\nBODY:\n%s\n`, toname, toaddr, subj, body)
	return nil
}

type SendGrid struct {
	fromname string
	fromaddr string
	client   *sendgrid.Client
}

func (m *SendGrid) Mail(toname, toaddr, subj, body string) error {
	from := mail.NewEmail(m.fromname, m.fromaddr)
	to := mail.NewEmail(toname, toaddr)

	message := mail.NewSingleEmail(from, subj, to, body, body)
	_, err := m.client.Send(message)
	if err != nil {
		return errors.Wrap(err, "failed to send email via sendgrid")
	}

	return nil
}
