package docsindex

import (
	"bytes"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"github.com/blevesearch/bleve"
	"github.com/pkg/errors"
	"github.com/russross/blackfriday"
	"go.uber.org/zap"
	"gopkg.in/yaml.v2"

	"github.com/openmultiplayer/web/server/src/config"
)

type Index struct {
	db   bleve.Index
	path string
}

type Document struct {
	Title       string
	Description string
	Keywords    []string

	Path string
}

func New(l *zap.Logger, cfg config.Config) (*Index, error) {
	i := Index{
		path: cfg.DocsSourcesPath,
	}

	idx, err := bleve.Open(cfg.DocsIndexPath)
	if err != nil {
		l.Warn("could not open bleve index, creating new one", zap.String("path", cfg.DocsIndexPath))
		idx, err = bleve.New(cfg.DocsIndexPath, bleve.NewIndexMapping())
		if err != nil {
			return nil, errors.Wrap(err, "failed to create new bleve db")
		}
	}
	i.db = idx
	return &i, nil
}

func (i *Index) Build() error {
	return i.buildIndex(i.path)
}

func (i *Index) Search(query string) (*bleve.SearchResult, error) {
	req := bleve.NewSearchRequest(bleve.NewQueryStringQuery(query))
	req.Highlight = bleve.NewHighlight()
	res, err := i.db.Search(req)
	if err != nil {
		return nil, err
	}
	return res, nil
}

func (i *Index) buildIndex(dir string) error {
	if err := filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// TODO: Translations should be handled differently. Search queries
		// should have a language passed in too and there should be an index for
		// each translation directory.

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

		return i.db.Index(d.Path, d)
	}); err != nil {
		return err
	}

	return nil
}

// Turns all path elements into forward slashes.
func canonicalisePath(path string) string {
	return strings.ReplaceAll(strings.Trim(path, ".\\/"), "\\", "/")
}

// There are two kinds of Markdown document: those with frontmatter and those
// without. This function checks if the document has a frontmatter block for
// metadata at the top and calls the relevant parser for it.
func (i *Index) extract(content []byte) Document {
	if bytes.HasPrefix(content, []byte("---")) {
		return i.withFrontmatter(content)
	}
	return i.withoutFrontmatter(content)
}

// Simply parses the frontmatter as YAML and looks for:
// title
// description
// keywords
func (i *Index) withFrontmatter(content []byte) Document {
	end := bytes.Index(content[3:], []byte("---"))
	frontmatter := content[3 : end+3]
	d := Document{}
	yaml.Unmarshal(frontmatter, &d) //nolint:errcheck
	return d
}

// Uses the first paragraph by first converting the Markdown into HTML and then
// querying the HTML for the first paragraph.
func (i *Index) withoutFrontmatter(content []byte) Document {
	html := blackfriday.MarkdownCommon(content)
	doc, err := goquery.NewDocumentFromReader(bytes.NewBuffer(html))
	if err != nil {
		return Document{}
	}
	return Document{
		Description: doc.Find("p").Text(),
	}
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
