package docsindex

import (
	"testing"
)

// func TestIndex_Build(t *testing.T) {
// 	os.RemoveAll("docsearch.bleve")

// 	l, _ := zap.NewDevelopment()
// 	idx, err := New(l, config.Config{
// 		DocsSourcesPath: "../../../docs/scripting",
// 		DocsIndexPath:   "docsearch.bleve",
// 	})
// 	if err != nil {
// 		panic(err)
// 	}

// 	if err := idx.Build(); err != nil {
// 		panic(err)
// 	}

// 	res1, err := idx.Search("collision")
// 	if err != nil {
// 		panic(err)
// 	}

// 	b, _ := json.MarshalIndent(res1, "", "  ")

// 	fmt.Printf("result: %v\n", string(b))
// }

func Test_nameFromPath(t *testing.T) {
	tests := []struct {
		name string
		want string
	}{
		{"x/y/z.md", "z"},
		{"x/y/z", "z"},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := nameFromPath(tt.name); got != tt.want {
				t.Errorf("nameFromPath() = %v, want %v", got, tt.want)
			}
		})
	}
}
