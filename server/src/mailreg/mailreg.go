package mailreg

import (
	"html/template"
	"io/ioutil"
	"path/filepath"
	"regexp"
	"strings"

	"go.uber.org/zap"
)

var global *Registry

var pattern = regexp.MustCompile(`template_(\w+)\.(txt|html)`)

type TemplateID string

func Init(dir string) {
	if global != nil {
		panic("email registry doubly initialised")
	}

	global = LoadEmailTemplates(dir)
}

// Registry is a place to store email templates. They are loaded from files
// (HTML and plain text) on start and Get is used to get the template by name.
type Registry struct {
	Templates map[TemplateID]Template
}

type Rendered struct {
	Rich string
	Text string
}

type Template struct {
	Name string
	Rich *template.Template
	Text *template.Template
}

func Get(name TemplateID, data interface{}) (*Rendered, error) {
	t := global.Templates[name]

	rich := strings.Builder{}
	if err := t.Rich.Execute(&rich, data); err != nil {
		return nil, err
	}

	text := strings.Builder{}
	if err := t.Text.Execute(&text, data); err != nil {
		return nil, err
	}

	return &Rendered{
		Rich: rich.String(),
		Text: text.String(),
	}, nil
}

func LoadEmailTemplates(dir string) *Registry {
	files, err := ioutil.ReadDir(dir)
	if err != nil {
		panic(err)
	}

	templates := make(map[TemplateID]Template)

	for _, f := range files {
		if f.IsDir() {
			continue
		}

		match := pattern.FindStringSubmatch(f.Name())
		if len(match) != 3 {
			continue
		}

		content, err := ioutil.ReadFile(filepath.Join(dir, f.Name()))
		if err != nil {
			panic(err)
		}

		name := (match[1])
		id := TemplateID(name)
		ext := match[2]
		t, ok := templates[id]
		if !ok {
			t = Template{Name: name}
		}

		tmpl, err := template.New(name).Parse(string(content))
		if err != nil {
			panic(err)
		}

		switch ext {
		case "txt":
			t.Text = tmpl
		case "html":
			t.Rich = tmpl
		}

		templates[id] = t
	}

	zap.L().Debug("loaded email templates", zap.Int("templates", len(templates)))

	return &Registry{templates}
}
