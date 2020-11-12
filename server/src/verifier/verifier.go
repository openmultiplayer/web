package verifier

import (
	"errors"

	"github.com/gofrs/uuid"
)

var ErrInvalidKey = errors.New("Invalid verification key")

type Verifier interface {
	Request(id string) error
	Verify(id, key string) (bool, error)
}

type Mock struct {
	data map[string]string
}

func (v *Mock) Request(id string) error {
	key, err := uuid.NewV4()
	if err != nil {
		return err
	}
	v.data[key.String()] = id
	return nil
}

func (v *Mock) Verify(id, key string) (bool, error) {
	have, exists := v.data[key]
	if !exists {
		return false, ErrInvalidKey
	}
	if have != id {
		return false, ErrInvalidKey
	}
	// mark user as verified in DB
	return true, nil
}
