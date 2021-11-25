package bsworker

import (
	"context"
	"time"

	md "github.com/JohannesKaufmann/html-to-markdown"
	"github.com/frustra/bbcode"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/resources/forum/post"
)

type TargetProperties struct {
	Hidden   bool
	Category string
	Tags     []string
	Order    int
}

var targetMapping = map[string]TargetProperties{
	"General Discussions":/*          */ {false, "Chat" /*                     */, []string{} /*                                */, 0},
	"General":/*                      */ {false, "Chat" /*                     */, []string{} /*                                */, 0},
	"Chat":/*                         */ {false, "Chat" /*                     */, []string{} /*                                */, 0},
	"Life":/*                         */ {false, "Chat" /*                     */, []string{} /*                                */, 0},
	"Questions and Suggestions":/*    */ {false, "Chat" /*                     */, []string{"question"} /*                      */, 0},
	"Tech":/*                         */ {false, "Chat" /*                     */, []string{"tech"} /*                          */, 0},
	"open.mp":/*                      */ {false, "Chat" /*                     */, []string{"open.mp"} /*                       */, 0},
	"SA-MP":/*                        */ {false, "Chat" /*                     */, []string{"sa-mp"} /*                         */, 0},
	"Other":/*                        */ {false, "Chat" /*                     */, []string{} /*                                */, 0},
	"Offtopic":/*                     */ {false, "Chat" /*                     */, []string{} /*                                */, 0},
	"Development Updates":/*          */ {false, "Chat" /*                     */, []string{"update"} /*                        */, 0},

	"Releases":/*                     */ {false, "Show" /*                     */, []string{"release"} /*                       */, 1},
	"Gamemodes":/*                    */ {false, "Show" /*                     */, []string{"release", "gamemode"} /*           */, 1},
	"Filterscripts":/*                */ {false, "Show" /*                     */, []string{"release", "filterscript"} /*       */, 1},
	"Libraries":/*                    */ {false, "Show" /*                     */, []string{"release", "include", "library"} /* */, 1},
	"Plugins":/*                      */ {false, "Show" /*                     */, []string{"release", "plugin"} /*             */, 1},
	"Maps":/*                         */ {false, "Show" /*                     */, []string{"map"} /*                           */, 1},
	"Tutorials":/*                    */ {false, "Show" /*                     */, []string{"tutorial"} /*                      */, 1},
	"Videos and Screenshots":/*       */ {false, "Show" /*                     */, []string{"media"} /*                         */, 1},
	"Art":/*                          */ {false, "Show" /*                     */, []string{"art"} /*                           */, 1},

	"Support":/*                      */ {false, "Support" /*                  */, []string{} /*                                */, 2},
	"Pawn Scripting":/*               */ {false, "Support" /*                  */, []string{"pawn", "scripting", "help"} /*     */, 2},
	"Programming":/*                  */ {false, "Support" /*                  */, []string{"programming", "help"} /*           */, 2},

	"Internal":/*                     */ {true, "Admin" /*                     */, []string{} /*                                */, 3},
	"Team":/*                         */ {true, "Admin" /*                     */, []string{} /*                                */, 3},

	"Hidden":/*                       */ {true, "Archived" /*                  */, []string{} /**/, 4},
	"Archived":/*                     */ {true, "Archived" /*                  */, []string{} /**/, 4},

	"Other languages":/*              */ {true, "Other languages" /*           */, []string{} /**/, 99},

	"Polish/Polski":/*                */ {true, "Polski" /*                    */, []string{} /*                          */, 99},
	"Filmiki i zdjęcia":/*            */ {true, "Polski" /*                    */, []string{"filmiki", "zdjęcia"} /*      */, 99},
	"Skryptowanie":/*                 */ {true, "Polski" /*                    */, []string{"skryptowanie"} /*            */, 99},
	"Ogólne":/*                       */ {true, "Polski" /*                    */, []string{"ogólne"} /*                  */, 99},
	"Serwery":/*                      */ {true, "Polski" /*                    */, []string{"serwery"} /*                 */, 99},

	"Spanish/Español":/*              */ {true, "Español" /*                   */, []string{} /**/, 99},
	"Mods":/*                         */ {true, "Español" /*                   */, []string{"mod"} /**/, 99},
	"Programación":/*                 */ {true, "Español" /*                   */, []string{"programación"} /**/, 99},
	"Discusión GTA SA Multijugador":/**/ {true, "Español" /*                   */, []string{} /**/, 99},

	"Russian/Русский":/*              */ {true, "Русский" /*                   */, []string{} /**/, 99},
	"Portuguese/Português":/*         */ {true, "Português" /*                 */, []string{} /**/, 99},
	"Italian/Italiano":/*             */ {true, "Italiano" /*                  */, []string{} /**/, 99},
	"Dutch/Nederlands":/*             */ {true, "Nederlands" /*                */, []string{} /**/, 99},
	"German/Deutsch":/*               */ {true, "Deutsch" /*                   */, []string{} /**/, 99},
	"Romanian/Română":/*              */ {true, "Română" /*                    */, []string{} /**/, 99},
	"Ex-Yu":/*                        */ {true, "Ex-Yu" /*                     */, []string{} /**/, 99},
	"Lithuanian/Lietuviškas":/*       */ {true, "Lietuviškas" /*               */, []string{} /**/, 99},
	"Hungarian/Magyar":/*             */ {true, "Magyar" /*                    */, []string{} /**/, 99},
	"Juegos":/*                       */ {true, "Juegos" /*                    */, []string{} /**/, 99},
	"French/Français":/*              */ {true, "Français" /*                  */, []string{} /**/, 99},
	"Hindi/Urdu":/*                   */ {true, "Urdu" /*                      */, []string{} /**/, 99},
	"Turkish":/*                      */ {true, "Turkish" /*                   */, []string{} /**/, 99},
}

func (w *Worker) MigratePosts(ctx context.Context) error {
	threads, err := w.bs.GetThreads(ctx)
	if err != nil {
		return err
	}

	users, err := w.bs.GetUsers(ctx)
	if err != nil {
		return err
	}

	usermap := make(map[int]string)
	for _, u := range users {
		usermap[u.UId] = u.Email
	}

	forums, err := w.bs.GetForums(ctx)
	if err != nil {
		return err
	}
	forummap := make(map[int]string)
	for _, f := range forums {
		target, ok := targetMapping[f.Name]
		if !ok {
			zap.L().Info("dropping forum", zap.String("forum", f.Name))
			continue
		}

		zap.L().Info("creating category", zap.String("name", target.Category), zap.Bool("hidden", target.Hidden))

		forummap[f.Fid] = f.Name
		w.category.CreateCategory(ctx, target.Category, f.Description, "#8577ce", target.Order, target.Hidden)
	}

	for _, t := range threads {
		posts, err := w.bs.GetPosts(ctx, t.Tid)
		if err != nil {
			return err
		}

		if len(posts) == 0 {
			zap.L().Info("thread has no posts", zap.Int("tid", t.Tid), zap.String("thread", t.Subject), zap.String("author", t.Username))
			continue
		}

		first := posts[0]

		zap.L().Info("creating thread", zap.String("thread", first.Subject), zap.String("author", first.Username))

		bsuser := usermap[first.UId]

		firstPostUser, err := w.users.GetUserByEmail(ctx, bsuser, false)
		if err != nil {
			return err
		}

		if firstPostUser == nil {
			zap.L().Info("could not find thread author", zap.String("email", bsuser), zap.Int("uid", first.UId), zap.String("username", first.Username))
			continue
		}

		forumName := forummap[t.Fid]
		target, ok := targetMapping[forumName]
		if !ok {
			zap.L().Info("dropping post", zap.String("forum", forumName))
			continue
		}

		firstMd, err := bbcodeToMarkdown(first.Message)
		if err != nil {
			zap.L().Info("failed to convert old thread first post to markdown", zap.Error(err))
			firstMd = first.Message
		}

		replies := posts[1:]
		replyPosts := []post.Post{}

		for _, r := range replies {
			bsuser = usermap[r.UId]
			replyUser, err := w.users.GetUserByEmail(ctx, bsuser, false)
			if err != nil {
				return err
			}

			if replyUser == nil {
				zap.L().Info("could not find post author", zap.String("email", bsuser), zap.Int("uid", r.UId), zap.String("username", r.Username))
				continue
			}

			replyMd, err := bbcodeToMarkdown(r.Message)
			if err != nil {
				zap.L().Info("failed to convert old post to markdown", zap.Error(err))
				replyMd = r.Message
			}

			replyPosts = append(replyPosts, post.Post{
				Body:      replyMd,
				Author:    post.Author{ID: replyUser.ID},
				CreatedAt: time.Unix(int64(r.Dateline), 0).UTC(),
				UpdatedAt: time.Unix(int64(r.Edittime), 0).UTC(),
			})

			zap.L().Info("prepared post", zap.Time("date", time.Unix(int64(r.Dateline), 0).UTC()), zap.String("thread", first.Subject))
		}

		newthread, err := w.thread.CreateLegacyThread(
			ctx,
			first.Subject,
			target.Category,
			target.Tags,
			post.Post{
				Body:      firstMd,
				Author:    post.Author{ID: firstPostUser.ID},
				CreatedAt: time.Unix(int64(first.Dateline), 0).UTC(),
				UpdatedAt: time.Unix(int64(first.Edittime), 0).UTC(),
			},
			replyPosts,
		)
		if err != nil {
			zap.L().Info("failed to create legacy thread", zap.String("email", bsuser), zap.Int("uid", t.UId), zap.String("username", t.Username), zap.Error(err))
		} else {
			zap.L().Info("created thread", zap.String("thread", *newthread.Title), zap.String("b", newthread.Short))
		}
	}

	return nil
}

// These tags don't have a Markdown equivalent, strip them completely.
var emptyTags = []string{
	"font",
	"align",
}

func bbcodeToMarkdown(bbc string) (string, error) {
	compiler := bbcode.NewCompiler(true, true)
	converter := md.NewConverter("", true, nil)

	for _, t := range emptyTags {
		compiler.SetTag(t, func(node *bbcode.BBCodeNode) (*bbcode.HTMLTag, bool) {
			out := bbcode.NewHTMLTag("")
			out.Name = ""
			return out, true
		})
	}

	compiler.SetTag("video", func(node *bbcode.BBCodeNode) (*bbcode.HTMLTag, bool) {
		out := bbcode.NewHTMLTag("")
		out.Name = "a"
		text := bbcode.CompileText(node)
		if len(text) > 0 {
			out.Attrs["href"] = bbcode.ValidURL(text)
		}
		return out, true
	})

	compiler.SetTag("list", func(node *bbcode.BBCodeNode) (*bbcode.HTMLTag, bool) {
		out := bbcode.NewHTMLTag("")
		out.Name = "ul"
		style := node.GetOpeningTag().Value
		switch style {
		case "a":
			out.Attrs["style"] = "list-style-type: lower-alpha;"
		case "A":
			out.Attrs["style"] = "list-style-type: upper-alpha;"
		case "i":
			out.Attrs["style"] = "list-style-type: lower-roman;"
		case "I":
			out.Attrs["style"] = "list-style-type: upper-roman;"
		case "1":
			out.Attrs["style"] = "list-style-type: decimal;"
		default:
			out.Attrs["style"] = "list-style-type: disc;"
		}

		if len(node.Children) == 0 {
			out.AppendChild(bbcode.NewHTMLTag(""))
		} else {
			node.Info = []*bbcode.HTMLTag{out, out}
			tags := node.Info.([]*bbcode.HTMLTag)
			for _, child := range node.Children {
				curr := tags[1]
				curr.AppendChild(node.Compiler.CompileTree(child))
			}
			if len(tags[1].Children) > 0 {
				last := tags[1].Children[len(tags[1].Children)-1]
				if len(last.Children) > 0 && last.Children[len(last.Children)-1].Name == "br" {
					last.Children[len(last.Children)-1] = bbcode.NewHTMLTag("")
				}
			} else {
				tags[1].AppendChild(bbcode.NewHTMLTag(""))
			}
		}
		return out, false
	})

	compiler.SetTag("*", func(node *bbcode.BBCodeNode) (*bbcode.HTMLTag, bool) {
		parent := node.Parent
		for parent != nil {
			if parent.ID == bbcode.OPENING_TAG && parent.GetOpeningTag().Name == "list" {
				out := bbcode.NewHTMLTag("")
				out.Name = "li"
				tags := parent.Info.([]*bbcode.HTMLTag)
				if len(tags[1].Children) > 0 {
					last := tags[1].Children[len(tags[1].Children)-1]
					if len(last.Children) > 0 && last.Children[len(last.Children)-1].Name == "br" {
						last.Children[len(last.Children)-1] = bbcode.NewHTMLTag("")
					}
				} else {
					tags[1].AppendChild(bbcode.NewHTMLTag(""))
				}
				tags[1] = out
				tags[0].AppendChild(out)

				if len(parent.Children) == 0 {
					out.AppendChild(bbcode.NewHTMLTag(""))
				} else {
					for _, child := range node.Children {
						curr := tags[1]
						curr.AppendChild(node.Compiler.CompileTree(child))
					}
				}
				if node.ClosingTag != nil {
					tag := bbcode.NewHTMLTag(node.ClosingTag.Raw)
					bbcode.InsertNewlines(tag)
					out.AppendChild(tag)
				}
				return nil, false
			}
			parent = parent.Parent
		}
		return bbcode.DefaultTagCompiler(node)
	})

	html := compiler.Compile(bbc)
	markdown, err := converter.ConvertString(html)
	if err != nil {
		return "", err
	}

	return markdown, nil
}
