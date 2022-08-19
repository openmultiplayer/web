package pubsub

import (
	"errors"

	"github.com/cskr/pubsub"
	"go.uber.org/zap"
)

type Topic string

type Bus interface {
	Declare(topic string) Topic
	Publish(topic Topic, message []byte) error
	Subscribe(topic Topic, handler func([]byte) (bool, error)) error
}

var _ Bus = &Embedded{}

type Embedded struct {
	ps *pubsub.PubSub
}

func NewEmbedded() Bus {
	return &Embedded{pubsub.New(0)}
}

func (b *Embedded) Declare(topic string) Topic {
	return Topic(topic)
}

func (b *Embedded) Publish(topic Topic, message []byte) error {
	b.ps.Pub(message, string(topic))
	return nil
}

func (b *Embedded) Subscribe(topic Topic, handler func([]byte) (bool, error)) error {
	ch := b.ps.Sub(string(topic))

	for m := range ch {
		ack, err := handler(m.([]byte))
		if err != nil {
			zap.L().Error("mock pubsub handler failed", zap.Error(err))
		}

		if !ack {
			zap.L().Error("nack not implemented for embedded pubsub")
		}
	}

	return errors.New("pubsub subscriber hung up")
}
