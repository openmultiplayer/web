package pubsub

import "github.com/cskr/pubsub"

type Bus interface {
	Publish(topic string, message interface{})
	Subscribe(topic string) <-chan interface{}
}

var _ Bus = &Embedded{}

type Embedded struct {
	ps *pubsub.PubSub
}

func NewEmbedded() *Embedded {
	return &Embedded{pubsub.New(0)}
}

func (b *Embedded) Publish(topic string, message interface{}) {
	b.ps.Pub(message, topic)
}

func (b *Embedded) Subscribe(topic string) <-chan interface{} {
	return b.ps.Sub(topic)
}
