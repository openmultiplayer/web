package pawndex_test

import (
	"context"
	"fmt"
	"os"
	"testing"

	"github.com/google/go-github/github"
	"github.com/joho/godotenv"
	"golang.org/x/oauth2"

	"github.com/openmultiplayer/web/app/resources/pawndex"
)

func TestGitHubScraper_Scrape(t *testing.T) {
	godotenv.Load("../.env") //nolint:errcheck
	token := os.Getenv("GITHUB_TOKEN")
	if token == "" {
		t.Skip("tests need a token to run.")
	}

	s := pawndex.GitHubScraper{
		GitHub: github.NewClient(
			oauth2.NewClient(
				context.Background(),
				oauth2.StaticTokenSource(&oauth2.Token{
					AccessToken: token,
				}),
			)),
	}

	pkg, err := s.Scrape(context.Background(), "Southclaws/samp-logger")
	fmt.Println(err)
	fmt.Printf("%#v\n", pkg)
}
