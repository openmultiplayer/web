package docsindex

import (
	"log"
	"testing"
)

func TestIndex_Build(t *testing.T) {
	i := Index{}

	err := i.Build("../../../docs/")
	if err != nil {
		log.Println(err)
	}
}
