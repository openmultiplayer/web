package config

import (
	"time"

	"github.com/kelseyhightower/envconfig"
	"go.uber.org/zap/zapcore"
)

// Config represents environment variable configuration parameters
type Config struct {
	Production bool          `envconfig:"PRODUCTION" default:"false"`
	LogLevel   zapcore.Level `envconfig:"LOG_LEVEL"  default:"info"`

	DatabaseURL            string        `envconfig:"DATABASE_URL"             required:"true"`
	ListenAddr             string        `envconfig:"LISTEN_ADDR"              default:"0.0.0.0:8000"`
	CookieDomain           string        `envconfig:"COOKIE_DOMAIN"            default:".open.mp"`
	PublicWebAddress       string        `envconfig:"PUBLIC_WEB_ADDRESS"       default:"https://open.mp"`
	LauncherBackendAddress string        `envconfig:"LAUNCHER_BACKEND_ADDRESS" default:"http://localhost:1420"`
	PublicApiAddress       string        `envconfig:"PUBLIC_API_ADDRESS"       default:"https://api.open.mp"`
	HashKey                []byte        `envconfig:"HASH_KEY"                 required:"true"`
	BlockKey               []byte        `envconfig:"BLOCK_KEY"                required:"true"`
	GithubClientID         string        `envconfig:"GITHUB_CLIENT_ID"         required:"true"`
	GithubClientSecret     string        `envconfig:"GITHUB_CLIENT_SECRET"     required:"true"`
	DiscordClientID        string        `envconfig:"DISCORD_CLIENT_ID"        required:"true"`
	DiscordClientSecret    string        `envconfig:"DISCORD_CLIENT_SECRET"    required:"true"`
	GithubToken            string        `envconfig:"GITHUB_TOKEN"             required:"true"`
	DocsSourcesPath        string        `envconfig:"DOCS_SOURCES_PATH"        required:"false" default:"docs/"`
	DocsIndexPath          string        `envconfig:"DOCS_INDEX_PATH"          required:"false" default:"docs.bleve"`
	PackagesDB             string        `envconfig:"PACKAGES_DB"              required:"false" default:"data/packages.db"`
	CachedServers          string        `envconfig:"CACHED_SERVERS_FILE"      required:"false" default:"data/cachedServers.json"`
	ServerScrapeInterval   time.Duration `envconfig:"SERVER_SCRAPE_INTERVAL"   required:"false" default:"5m"`
	PackageSearchInterval  time.Duration `envconfig:"PACKAGE_SEARCH_INTERVAL"  required:"false" default:"24h"`
	PackageScrapeInterval  time.Duration `envconfig:"PACKAGE_SCRAPE_INTERVAL"  required:"false" default:"24h"`
	LauncherVersion        string        `envconfig:"LAUNCHER_VERSION"         required:"false" default:"5"`
	AuthenticatedAPIKey    string        `envconfig:"AUTHENTICATED_API_KEY"    required:"true"`
}

func New() (c Config, err error) {
	if err = envconfig.Process("", &c); err != nil {
		return c, err
	}

	return
}
