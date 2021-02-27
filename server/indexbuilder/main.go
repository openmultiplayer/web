package main

import (
	"fmt"
	"time"

	"github.com/openmultiplayer/web/server/src/docsindex"
)

func main() {
	start := time.Now()
	idx, err := docsindex.New("docs.bleve", "docs/")
	if err != nil {
		panic(err)
	}
	if err := idx.Build(); err != nil {
		panic(err)
	}
	fmt.Printf("Documentation search index built in %v", time.Since(start))
}
