package docsindex

import (
	"bytes"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"

	"gopkg.in/yaml.v2"
)

type Index struct {
}

type Document struct {
	Title       string
	Description string
	Keywords    string

	Path string
}

func (i *Index) Build(dir string) error {
	if err := filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if !isMarkdown(info.Name()) {
			return nil
		}

		content, err := ioutil.ReadFile(path)
		if err != nil {
			return err
		}

		d := i.extract(content)
		d.Path = canonicalisePath(path)
		if d.Title == "" {
			d.Title = info.Name()
		}

		fmt.Printf("DOC: %#v\n", d)

		return errors.New("stop")
	}); err != nil {
		return err
	}

	return nil
}

func canonicalisePath(path string) string {
	return strings.ReplaceAll(strings.Trim(path, ".\\/"), "\\", "/")
}

func (i *Index) extract(content []byte) Document {
	if bytes.HasPrefix(content, []byte("---")) {
		return i.withFrontmatter(content)
	}
	return i.withoutFrontmatter(content)
}

func (i *Index) withFrontmatter(content []byte) Document {
	end := bytes.Index(content[3:], []byte("---"))
	frontmatter := content[3 : end+3]
	d := Document{}
	yaml.Unmarshal(frontmatter, &d) //nolint:errcheck
	return d
}
func (i *Index) withoutFrontmatter(content []byte) Document {
	// html = blackfriday.MarkdownCommon(content)
	// goquery.Document
	// Parse HTML
	// Find first p tag
	// use that as description
	return Document{}
}

func isMarkdown(name string) bool {
	if strings.HasSuffix(name, ".md") {
		return true
	}
	if strings.HasSuffix(name, ".mdx") {
		return true
	}
	return false
}
