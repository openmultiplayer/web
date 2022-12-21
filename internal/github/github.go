package github

import (
	"context"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"

	"github.com/openmultiplayer/web/internal/config"
)

func New(cfg config.Config) *github.Client {
	return github.NewClient(oauth2.NewClient(
		context.Background(),
		oauth2.StaticTokenSource(&oauth2.Token{AccessToken: cfg.GithubToken}),
	))
}
