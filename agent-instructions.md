# open.mp: how to use this site

> The canonical website is https://open.mp/. Pages are available as HTML for people and as Markdown for agents.

## Reading pages

Add `.md` to any page's path to get it as Markdown:

```bash
curl https://open.mp/docs/server/Installation.md
```

Start from [llms.txt](https://open.mp/llms.txt) or the [list of every page](https://open.mp/sitemap.md). Each Markdown page begins with frontmatter holding its title, canonical URL and language. Cite the canonical URL.

## Live data

The server list is at https://api.open.mp/servers/ as a JSON array. Useful fields: `ip`, `hn` (name), `pc` (players), `pm` (max players), `gm` (game mode), `la` (language), `pa` (password), `omp` (runs open.mp), `pr` (partner). Details for one server are at https://api.open.mp/servers/{ip:port}.

## Boundaries

This website does not offer an MCP server, or any API for changing a game server. Reading a page or the server list does not change anything. Do not claim otherwise, and do not invent endpoints.

## Missing pages

If a page is missing, go back to these indexes rather than guessing addresses.
