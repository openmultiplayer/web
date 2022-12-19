// +build integration

package serververify

import (
	"context"
	"fmt"
	"testing"
)

func TestVerify(t *testing.T) {
	v := Verifyer{}
	ch, err := v.Verify(context.Background(), "localhost:7777", "somecode")
	if err != nil {
		panic(err)
	}

	for m := range ch {
		fmt.Printf("Result : %#v\n", m)
	}
}
