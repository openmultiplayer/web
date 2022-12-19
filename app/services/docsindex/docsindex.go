package docsindex

import (
	"bytes"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/PuerkitoBio/goquery"
	"github.com/bbalet/stopwords"
	"github.com/blevesearch/bleve/v2"
	"github.com/blevesearch/bleve/v2/analysis/analyzer/keyword"
	"github.com/blevesearch/bleve/v2/search/query"
	"github.com/iancoleman/strcase"
	"github.com/pkg/errors"
	"github.com/russross/blackfriday"
	"go.uber.org/zap"
	"gopkg.in/yaml.v2"

	"github.com/openmultiplayer/web/internal/config"
)

type Index struct {
	db   bleve.Index
	path string
}

type Document struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Tags        []string `json:"tags"`

	Path string
}

type SearchResults struct {
	Total int           `json:"total"`
	Took  time.Duration `json:"took"`
	Hits  []Hit         `json:"hits"`
}

type Hit struct {
	Score float64 `json:"score"`

	URL   string `json:"url"`
	Title string `json:"title"`
	Desc  string `json:"desc"`

	TitleFragment string `json:"title_fragment"`
	DescFragment  string `json:"desc_fragment"`
}

func New(l *zap.Logger, cfg config.Config) (*Index, error) {
	i := Index{
		path: cfg.DocsSourcesPath,
	}

	idx, err := bleve.Open(cfg.DocsIndexPath)
	if err != nil {
		l.Warn("could not open bleve index, creating new one", zap.String("path", cfg.DocsIndexPath))
		im := bleve.NewIndexMapping()
		docsmapping := bleve.NewDocumentMapping()

		// Field mappings for title, description and tags
		titleFieldMapping := bleve.NewTextFieldMapping()
		titleFieldMapping.Analyzer = "en"
		docsmapping.AddFieldMappingsAt("title", titleFieldMapping)

		descFieldMapping := bleve.NewTextFieldMapping()
		descFieldMapping.Analyzer = "en"
		docsmapping.AddFieldMappingsAt("description", descFieldMapping)

		tagsFieldMapping := bleve.NewTextFieldMapping()
		tagsFieldMapping.Analyzer = keyword.Name
		docsmapping.AddFieldMappingsAt("tags", tagsFieldMapping)

		im.AddDocumentMapping("Document", docsmapping)

		idx, err = bleve.New(cfg.DocsIndexPath, im)
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

func (i *Index) Search(querystring string) (*SearchResults, error) {
	parts := strings.Split(strcase.ToDelimited(querystring, ' '), " ")

	// Tag query splits the query string by PascalCase or camel_case and uses
	// the component parts as tags. This means you can search
	// `TextDrawShowForPlayer` and the underlying query searches for:
	// ["text", "draw", "show", "for", "player"]. When this is combined with
	// other query types, it increases the chances of getting relevant results.
	tagquery := []query.Query{
		bleve.NewFuzzyQuery(querystring),
	}
	for _, p := range parts {
		fq := bleve.NewFuzzyQuery(p)
		fq.SetField("tags")
		tagquery = append(tagquery, fq)
	}

	// For matching queries like "TextDrawHi..." in title
	pq := bleve.NewPrefixQuery(querystring)
	pq.SetField("title")

	req := bleve.NewSearchRequest(
		bleve.NewDisjunctionQuery(
			bleve.NewQueryStringQuery(querystring),
			bleve.NewPhraseQuery(parts, "tags"),
			bleve.NewDisjunctionQuery(tagquery...),
			pq,
		),
	)

	req.Highlight = bleve.NewHighlight()
	req.Fields = []string{"title", "description", "tags"}
	r, err := i.db.Search(req)
	if err != nil {
		return nil, err
	}

	res := SearchResults{
		Total: int(r.Total),
		Took:  r.Took,
		Hits:  []Hit{},
	}

	for _, v := range r.Hits {
		titleFragment := ""
		descFragment := ""
		if len(v.Fragments["title"]) > 0 {
			titleFragment = v.Fragments["title"][0]
		}
		if len(v.Fragments["description"]) > 0 {
			descFragment = v.Fragments["description"][0]
		}
		res.Hits = append(res.Hits, Hit{
			Score:         v.Score,
			URL:           v.ID,
			Title:         v.Fields["title"].(string),
			TitleFragment: titleFragment,
			Desc:          v.Fields["description"].(string),
			DescFragment:  descFragment,
		})
	}

	return &res, nil
}

func (i *Index) buildIndex(dir string) error {
	if err := filepath.Walk(dir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		// TODO: Translations should be handled differently. Search queries
		// should have a language passed in too and there should be an index for
		// each translation directory. For now we ignore them.
		if strings.Contains(path, "translations") {
			return nil
		}

		if !isMarkdown(info.Name()) {
			return nil
		}

		d, err := i.buildDocument(path)
		if err != nil {
			return err
		}

		fmt.Println("indexing:", d.Title, "tags:", d.Tags)

		return i.db.Index(d.Path, d)
	}); err != nil {
		return err
	}

	return nil
}

func (i *Index) buildDocument(path string) (Document, error) {
	content, err := ioutil.ReadFile(path)
	if err != nil {
		return Document{}, err
	}

	d := i.extract(content)

	// The following code builds a list of tags from the file name and path.
	dir, file := filepath.Split(path)
	dirs := strings.Split(filepath.Clean(dir), string(os.PathSeparator))
	name := nameFromPath(file)
	tags := []string{}

	// split the name into parts, OnPlayerConnect becomes On, Player, Connect
	parts := strings.Split(strcase.ToDelimited(name, ' '), " ")
	// this removes stopwords like "on"
	for _, t := range parts {
		cleaned := stopwords.CleanString(t, "en", false)
		if cleaned == " " {
			continue
		}
		tags = append(tags, t)
	}
	// This removes directory artifacts and the word "docs"
	for _, d := range dirs[1:] {
		if d == ".." || d == "docs" {
			continue
		}
		tags = append(tags, d)
	}

	d.Tags = append(d.Tags, tags...)
	d.Tags = removeDuplicates(d.Tags)

	d.Path = canonicalisePath(path)
	if d.Title == "" {
		d.Title = name
	}

	return d, nil
}

func nameFromPath(path string) string {
	filename := filepath.Base(path)
	ext := len(filepath.Ext(filename))
	if ext > 0 {
		full := len(filename)
		return filename[:(full - ext)]
	}
	return filename
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

func removeDuplicates(s []string) []string {
	e := map[string]bool{}
	r := []string{}
	for v := range s {
		if e[s[v]] == true {
		} else {
			e[s[v]] = true
			r = append(r, s[v])
		}
	}
	return r
}
