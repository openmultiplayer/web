# Frontend

This directory contains the [Next.js](https://nextjs.org/) frontend codebase. It's written in TypeScript with some fairly relaxed but standard tsconfig rules (no strict mode).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Getting Started

To install the required dependencies:

```
yarn
```

To run the local development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Any edits to files in `src/` will trigger hot-reloads. Edits to any Markdown content in either `content/` or `../docs/` will not unfortunately.

## Development

Most of the time, you can just fire up the site and work on it. It will always use the live API at `api.open.mp` for things like server listings, user dashboard, etc. Some things may result in a CORS error so you may need to change API calls to use `http://localhost` instead.
