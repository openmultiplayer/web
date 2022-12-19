package forum

import (
	"bytes"
	"context"
	"fmt"
	"math"
	"strings"
	"time"
	"unicode"

	"github.com/gomarkdown/markdown/ast"
	"github.com/gomarkdown/markdown/parser"

	"github.com/forPelevin/gomoji"
	"github.com/openmultiplayer/web/internal/db"
)

const MaxShortBodyLength = 128

func MakeShortBody(long string) string {
	textonly := strings.Builder{}
	p := parser.New()
	tree := p.Parse([]byte(long))
	var walk func(n ast.Node)
	walk = func(n ast.Node) {
		para, ok := n.(*ast.Paragraph)
		if ok {
			for _, c := range para.Children {
				text, ok := c.(*ast.Text)
				if ok && len(text.Literal) > 0 {
					oneline := bytes.ReplaceAll(text.Literal, []byte("\n"), []byte(" "))
					textonly.Write(oneline)
					textonly.WriteByte(' ')
				}
			}
		} else {
			container := n.AsContainer()
			if container != nil {
				children := container.Children
				for _, c := range children {
					walk(c)
				}
			}
		}
	}
	walk(tree)

	paragraphs := []rune(strings.TrimSpace(textonly.String()))
	end := int(math.Min(float64(len(paragraphs)-1), MaxShortBodyLength))
	if len(paragraphs) > MaxShortBodyLength {
		for ; end > MaxShortBodyLength/2; end-- {
			if unicode.IsPunct(paragraphs[end]) || unicode.IsSpace(paragraphs[end]) {
				break
			}
		}
		// If stopped on a punctuation (like a comma) continue to walk backwards
		// until a letter is found. Since this function finally places an
		// elipsis at the end, a string ending like `hello, john` would output
		// as: `hello,...` which looks weird, so this makes sure the elipsis is
		// placed against a letter. If it fails, as with the above loop, it just
		// uses the max short body length cut in half as a fallback.
		if !unicode.IsLetter(paragraphs[end] - 1) {
			for ; end > MaxShortBodyLength/2; end-- {
				if unicode.IsLetter(paragraphs[end]) {
					// shift forwards again so we don't chop off the last char.
					end += 1
					break
				}
			}
		}
		return fmt.Sprint(string(paragraphs[:end]), "...")
	}

	return string(paragraphs)
}

func timeOrNil(x bool) *time.Time {
	if x {
		t := time.Now()
		return &t
	}
	return nil
}

func CanUserMutatePost(ctx context.Context, d *db.PrismaClient, authorID, id string) error {
	// First, check if this user is the author of the post.
	post, err := d.Post.
		FindUnique(db.Post.ID.Equals(id)).
		With(db.Post.Author.Fetch()).
		Exec(ctx)
	if err != nil {
		return err
	}
	if post.Author().ID == authorID {
		return nil
	}

	// If they are not the author, check if they are an admin.
	user, err := d.User.
		FindUnique(db.User.ID.Equals(authorID)).
		Exec(ctx)
	if err != nil {
		return err
	}
	if user.Admin {
		return nil
	}

	// Not either? Not authorised to edit.
	return ErrUnauthorised
}

func IsValidEmoji(e string) (string, bool) {
	if len(e) == 0 {
		return "", false
	}
	if e[1] == ':' {
		return "", false
	}
	return e, gomoji.ContainsEmoji(e)
}
