# Server Index for open.mp

A replacement for the SA-MP server list built for the current SA-MP version and ready for the future of open.mp servers.

`server/` contains the backend, which is written in Go. `frontend/` contains the website which is written in JavaScript using the Next.js framework. Database migrations and bindings are handled by Prisma.

## Deployment

`docker-compose up -d` to run the stack. There's currently no database security in place.

Environment variables required:

- `DATA_DIR`
- `POSTGRES_USER`
- `POSTGRES_PASSWORD`
