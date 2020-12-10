package docsindex

import (
	"encoding/json"
	"fmt"
	"testing"
)

func TestIndex_Build(t *testing.T) {
	idx, err := New("docsearch.bleve", "../../../docs/scripting")
	if err != nil {
		panic(err)
	}

	res1, err := idx.Search("position")
	if err != nil {
		panic(err)
	}

	b, _ := json.MarshalIndent(res1, "", "  ")

	fmt.Printf("result: %v\n", string(b))
}
