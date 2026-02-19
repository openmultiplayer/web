---
tag: v1-RC1
publishedAt: "2023-01-05T21:22:44Z"
htmlUrl: https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC1
assets:
  - label: Windows
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1-RC1/open.mp-win-x86.zip
    size: "31.4 MB"
  - label: Linux
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1-RC1/open.mp-linux-x86.tar.xz
    size: "15.5 MB"
  - label: Linux (DynSSL)
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1-RC1/open.mp-linux-x86-dynssl.tar.xz
    size: "12.6 MB"
---

## O que mudou
* Memory reduction. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/550
* Use `Span<>`, don't expose `vector<>`. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/548
* Fix `funcidx` in the streamer plugin. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/552
* In memory db by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/553
* Component load pr by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/554
* Append `.so` to plugin names. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/555
* CMake changes and m1/macos support by @AmyrAhmady in https://github.com/openmultiplayer/open.mp/pull/551
* Use the correct string search function. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/557
* command text sanity check by checking cmd length by @AmyrAhmady in https://github.com/openmultiplayer/open.mp/pull/556
* Actually ignore missing `main`, like the comment says. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/560
* Deprecate `str_buf_addr` from PawnPlus. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/558
* Special-case NPCs (and localhost in general) in connection code. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/559
* Log SQLite queries. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/561
* Keep a local copy of the loaded defaults and revert to them on GMX. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/562
* TD crash fix. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/563
* Configurable http threads count. by @ksenonadv in https://github.com/openmultiplayer/open.mp/pull/564
* Fix GDK hooks by @Cheaterman in https://github.com/openmultiplayer/open.mp/pull/566
* Player attached objects. by @ksenonadv in https://github.com/openmultiplayer/open.mp/pull/565
* Check supported major version when loading components. by @Y-Less in https://github.com/openmultiplayer/open.mp/pull/568
