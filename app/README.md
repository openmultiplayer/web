# Server

This directory contains the API codebase. It's written in Go and is fully cross-platform (does not depend on any platform-specific libraries or C code).

## Architecture

### Layout

The codebase follows idiomatic Go guidelines. Interfaces are preferred as a means of sharing functionality in order to facilitate easier mocking and testing. `cmd/server/main.go` contains the main setup code in a function named `Initialise`. The app itself starts up and blocks when `App.Start` is called. This fires up each of the components in the app in a goroutine then blocks until the root context is cancelled.

### HTTP API

The library of choice for HTTP routing etc is go-chi. In `src/api/` there is a directory for each API "Module" and the names of these must correspond to its respective API route except `legacy` because of how SA-MP legacy queries work.

Each handler goes in its own file, prefixed with `h_` followed by a simple description or HTTP method of what it does. The setup code for each API module lives in a file named `api.go`.

For example:

```
api/
├module1/
│ ├api.go
│ ├h_get.go
│ └h_post.go
└module2/
  ├api.go
  ├h_get.go
  ├h_post.go
  └h_search.go
```

The naming for these files is not super strict, most of the time a HTTP method such as "get" or "post" should be fine, but other simple verbs are fine too. What matters is consistency and ease of navigation.

### Database

The database code is managed by Prisma. The schema is declared in the `prisma` directory in the root.

The workflow to make changes to the data model is:

1. Make the change
2. Generate new Go code
3. Generate migrations
4. Apply migrations to dev instance

Once a pull request is approved, if it has data model changes, an admin will apply those changes to the live DB.

### SA-MP Server Query

SA-MP server queries are done by the `Worker` periodically querying the database for servers that haven't been updated within some time window. These servers are then passed to a `Scraper` which uses a `Queryer` to fetch updated information about the servers. The `Worker` then updates the database with the new data using the `server.Repository`

### Documentation

The docs/wiki part of the site (open.mp/docs) is very big. It contains around 3000 pages at the time of writing and will likely grow as more contributors translate the original pages. Because of this, Next.js and Vercel pre-rendering was taking upwards of 15 minutes for each pull request. Because we wanted faster build times, we sacrificed a bit of runtime performance for build-time. Page load times were only affected a tiny bit so it seemed a worthwhile tradeoff.

So, the solution to this was to move the static docs files to the API. Because the Docker image of this codebase just does `ADD . .`, the entire repo is available to the server. The `docs/` directory is served as a `http.FileServer` at `/docs/*`.

#### Documentation Search

There's also a [Bleve](https://blevesearch.com) search index built at image build time. This is done with `indexbuilder` which is a simple Go "script" that runs the Bleve index build code on the `docs/` directory. This search index is then accessible via `/docs/search?q=sometext`. This is done at image build time because it only needs to be done once for any change to the files. It takes a few minutes usually.

### Authentication

This service uses OAuth2 for authentication. The endpoints are in `src/api/auth/` and the implementation for each is in `src/authentication`. There are traces of code for password-based auth but this isn't exposed currently as OAuth2 is just safer, easier and results in reduced security responsibility on our part.
