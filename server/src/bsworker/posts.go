package bsworker

import (
	"context"
	"time"

	md "github.com/JohannesKaufmann/html-to-markdown"
	"github.com/frustra/bbcode"
	"go.uber.org/zap"

	"github.com/openmultiplayer/web/server/src/resources/forum"
)

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
		forummap[f.Fid] = f.Name
		w.forum.CreateCategory(ctx, f.Name, f.Description, "#8577ce")
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

		categoryName := forummap[t.Fid]

		firstMd, err := bbcodeToMarkdown(first.Message)
		if err != nil {
			zap.L().Info("failed to convert old thread first post to markdown", zap.Error(err))
			firstMd = first.Message
		}

		replies := posts[1:]
		replyPosts := []forum.Post{}

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

			replyPosts = append(replyPosts, forum.Post{
				Body:      replyMd,
				Author:    forum.Author{ID: replyUser.ID},
				CreatedAt: time.Unix(int64(r.Dateline), 0).UTC(),
				UpdatedAt: time.Unix(int64(r.Edittime), 0).UTC(),
			})

			zap.L().Info("prepared post", zap.Time("date", time.Unix(int64(r.Dateline), 0).UTC()), zap.String("thread", first.Subject))
		}

		newthread, err := w.forum.CreateLegacyThread(
			ctx,
			first.Subject,
			categoryName,
			forum.Post{
				Body:      firstMd,
				Author:    forum.Author{ID: firstPostUser.ID},
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

func bbcodeToMarkdown(bbc string) (string, error) {
	compiler := bbcode.NewCompiler(true, true)
	converter := md.NewConverter("", true, nil)

	html := compiler.Compile(bbc)
	markdown, err := converter.ConvertString(html)
	if err != nil {
		return "", err
	}

	return markdown, nil
}
