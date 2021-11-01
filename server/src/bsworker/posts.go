package bsworker

import (
	"context"

	md "github.com/JohannesKaufmann/html-to-markdown"
	"github.com/frustra/bbcode"
	"go.uber.org/zap"
)

func (w *Worker) migratePosts(ctx context.Context) error {
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
		w.forum.CreateCategory(ctx, f.Name)
	}

	for _, t := range threads {
		posts, err := w.bs.GetPosts(ctx, t.Tid)
		if err != nil {
			return err
		}

		first := posts[0]

		zap.L().Info("creating thread", zap.String("thread", first.Subject), zap.String("author", first.Username))

		bsuser := usermap[first.UId]

		user, err := w.users.GetUserByEmail(ctx, bsuser, false)
		if err != nil {
			return err
		}

		if user == nil {
			zap.L().Info("could not find thread author", zap.String("email", bsuser), zap.Int("uid", first.UId), zap.String("username", first.Username))
			continue
		}

		authorID := user.ID

		categoryName := forummap[t.Fid]

		markdown, err := bbcodeToMarkdown(first.Message)
		if err != nil {
			zap.L().Info("failed to convert old thread first post to markdown", zap.Error(err))
			markdown = first.Message
		}

		newthread, err := w.forum.CreateThread(ctx, t.Subject, markdown, authorID, categoryName, []string{})
		if err != nil {
			zap.L().Info("failed to create thread", zap.Error(err))
		}

		zap.L().Info("created thread", zap.String("thread", *newthread.Title), zap.String("b", newthread.Short))

		replies := posts[1:]
		for _, r := range replies {
			bsuser = usermap[r.UId]
			user, err = w.users.GetUserByEmail(ctx, bsuser, false)
			if err != nil {
				return err
			}

			if user == nil {
				zap.L().Info("could not find post author", zap.String("email", bsuser), zap.Int("uid", r.UId), zap.String("username", r.Username))
				continue
			}

			markdown, err = bbcodeToMarkdown(r.Message)
			if err != nil {
				zap.L().Info("failed to convert old post to markdown", zap.Error(err))
				markdown = r.Message
			}

			post, err := w.forum.CreatePost(ctx, markdown, user.ID, newthread.ID, "")
			if err != nil {
				zap.L().Info("failed to create post", zap.Error(err))
			}

			zap.L().Info("created post", zap.String("thread", *newthread.Title), zap.String("b", post.Short))
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
