package main

import (
	"fmt"
	"time"

	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/config"
	"github.com/openmultiplayer/web/server/src/docsindex"
)

func main() {
	l, _ := zap.NewDevelopment()
	start := time.Now()
	idx, err := docsindex.New(l, config.Config{
		DocsSourcesPath: "docs/",
		DocsIndexPath:   "docs.bleve",
	})
	if err != nil {
		panic(err)
	}
	if err := idx.Build(); err != nil {
		panic(err)
	}
	fmt.Printf("Documentation search index built in %v", time.Since(start))
}
