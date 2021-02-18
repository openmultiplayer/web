package config

import (
	"github.com/kelseyhightower/envconfig"
	"go.uber.org/zap/zapcore"
)

// Config represents environment variable configuration parameters
type Config struct {
	Production bool          `envconfig:"PRODUCTION" default:"false"`
	LogLevel   zapcore.Level `envconfig:"LOG_LEVEL"  default:"info"`

	DatabaseURL         string `envconfig:"DATABASE_URL"          required:"true"`
	ListenAddr          string `envconfig:"LISTEN_ADDR"           default:"0.0.0.0:8000"`
	CookieDomain        string `envconfig:"COOKIE_DOMAIN"         default:".open.mp"`
	AmqpAddress         string `envconfig:"AMQP_ADDRESS"          default:"amqp://rabbit:5672"`
	HashKey             []byte `envconfig:"HASH_KEY"              required:"true"`
	BlockKey            []byte `envconfig:"BLOCK_KEY"             required:"true"`
	GithubClientID      string `envconfig:"GITHUB_CLIENT_ID"      required:"true"`
	GithubClientSecret  string `envconfig:"GITHUB_CLIENT_SECRET"  required:"true"`
	DiscordClientID     string `envconfig:"DISCORD_CLIENT_ID"     required:"true"`
	DiscordClientSecret string `envconfig:"DISCORD_CLIENT_SECRET" required:"true"`
	SendgridAPIKey      string `envconfig:"SENDGRID_API_KEY"      required:"true"`
	GithubToken         string `envconfig:"GITHUB_TOKEN"          required:"true"`
	DocsSourcesPath     string `required:"false"                  default:"docs/"      split_words:"false" `
	DocsIndexPath       string `required:"false"                  default:"docs.bleve" split_words:"false" `
	PackagesDB          string `required:"false"                  default:"/data/packages.db" split_words:"true" `
}

func New() (c Config, err error) {
	if err = envconfig.Process("", &c); err != nil {
		return c, err
	}

	return
}
