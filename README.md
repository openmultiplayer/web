<p align="center">
  <a aria-label="open.mp logo" href="https://open.mp">
    <img src="https://assets.open.mp/assets/images/assets/wordmark-light-mono.png" width="420" />
  </a>
</p>

<p align="center">
  <em>open.mp multiplayer game framework</em>
</p>

<p align="center">
  <a
    href="https://open.mp/docs"
  >Wiki</a>
  |
  <a
    href="https://discord.gg/samp"
  >Discord</a>
</p>

<p align="center">
  A multiplayer mod for Grand Theft Auto: San Andreas that is fully backwards
  compatible with San Andreas Multiplayer.
</p>

<p align="center">
  <a href="https://www.open.mp">open.mp</a>
</p>

<hr>

# open.mp Web Services

This monorepo contains the web services and documentation for open.mp and SA-MP.

## Overview

- `docs/` Wiki documentation for SA-MP and open.mp in Markdown format including translations.
- `frontend/` [Next.js](https://nextjs.org) app for the https://open.mp site.
- `prisma/` [Prisma](https://prisma.io/) database models for generating Go code and SQL migrations.
- `app/` Backend API for server listings, accounts, etc.

## Frontend Development

To work on the frontend, you mostly only need to focus on the `frontend/` directory. Run `npm` commands in there such as `npm run dev`. See the readme file in there for more details.

The only files that the frontend need that _are not_ in that directory are `docs/` which it uses to for the https://open.mp/docs pages. `.env` is not used for frontend development.

## Backend/Full Stack Development

When working on the backend, the root of the repository is where you need to be. The server application will assume it's being run from the root, _not_ from within `cmd/`.

To start the API server, use [Taskfile](https://taskfile.dev) and run `task`, the default task is to build and run the API server.

The frontend, by default, only uses the live API. To change this you must edit any URLs from `https://api.open.mp/...` to `http://localhost/...`.

You can run the following command to get a minimal development environment ready:

```
docker-compose -f .\docker-compose.dev.yml up -d
```

The `.dev.yml` Compose configuration contains services that aren't secure or production ready and suitable for local testing.

## Deployment

The frontend is deployed directly to [Vercel](https://vercel.com) from the `master` branch.

The backend is deployed to a server from the `master` branch using the `docker-compose.yml` file. You can simulate a production deployment by running `docker-compose up`.

### Uploading Assets

We host large static assets such as images and videos on an S3-compatible object storage. This runs at `assets.open.mp` and you can use the task `upload-assets` to upload all public assets from `frontend/public`.

The easiest way to do this is via the [Minio client](https://docs.min.io/docs/minio-client-quickstart-guide.html). Once installed, set up an alias called `omp`:

```
mc alias set omp https://assets.open.mp ACCESS_KEY SECRET_KEY
```

Replace the two keys with the real keys.

Then run the task:

```
task upload-assets
```
