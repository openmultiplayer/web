This folder works like blog content, one markdown file per release.
Sorting is automatic by `publishedAt` (newest first) and if `assets` is empty, the block falls back to a single GitHub release button.

Usage:

- `frontend/content/releases/server/` for server releases
- `frontend/content/releases/launcher/` for launcher releases

Name files by tag (for example `v1.6.2.md`).

## How to add a release

1. Copy an existing release file in the right folder.
2. Update the frontmatter (`tag`, `publishedAt`, `htmlUrl`, `assets`).
3. Optional: add `highlights` and/or `admonition`.
4. Paste the full changelog in the markdown body.

That is it :)

## Locale support

If you want to translate the release text, mirror the same file names in:

- `frontend/i18n/<your_locale>/content/releases/server/`
- `frontend/i18n/<your_locale>/content/releases/launcher/`

## Frontmatter reference

Required:

- `tag`
- `publishedAt` (ISO format, example: `"2026-02-14T12:00:00Z"`)
- `htmlUrl`
- `assets` (download buttons)

Optional:

- `highlights` (shown above "View full changelog")
- `admonition` (small warning/info box)

## Server example

```md
---
tag: v1.5.9.0000
publishedAt: "2026-02-14T12:00:00Z"
htmlUrl: https://github.com/openmultiplayer/open.mp/releases/tag/v1.5.9.0000
highlights:
  - Built-in NPC improvements
  - Better networking and sync checks
admonition:
  type: warning
  title: Linux note
  body: "Example warning text."
assets:
  - label: Windows
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1.5.9.0000/open.mp-win-x86.zip
    size: "35.0 MB"
  - label: Linux
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1.5.9.0000/open.mp-linux-x86.tar.gz
    size: "30.0 MB"
---

## What's Changed
...
```

## Launcher example

```md
---
tag: v1.6.2
publishedAt: "2026-02-14T12:00:00Z"
htmlUrl: https://github.com/openmultiplayer/launcher/releases/tag/v1.6.2
highlights:
  - Better stability
  - Better favorites management
admonition:
  type: warning
  title: Antivirus false positive
  body: "Example warning text."
assets:
  - label: "Download Launcher (.exe)"
    url: https://github.com/openmultiplayer/launcher/releases/download/v1.6.2/omp-launcher-setup.exe
    size: "5.2 MB"
---

## What's Changed
...
```
