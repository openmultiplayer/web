---
tag: v1-RC2
publishedAt: "2023-01-09T21:41:26Z"
htmlUrl: https://github.com/openmultiplayer/open.mp/releases/tag/v1-RC2
assets:
  - label: Windows
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1-RC2/open.mp-win-x86.zip
    size: "43.0 MB"
  - label: Linux
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1-RC2/open.mp-linux-x86.tar.gz
    size: "23.6 MB"
  - label: Linux (DynSSL)
    url: https://github.com/openmultiplayer/open.mp/releases/download/v1-RC2/open.mp-linux-x86-dynssl.tar.gz
    size: "20.1 MB"
---

What's Changed
-------------------

* **Server**: Fix `.so` being required on Linux legacy plugins.
* **Server**: `reloadfs` reuses its slot to preserve filterscript order.
* **Server**: Attached objects are correctly shown to other players.
* **Server**: Fix a crash when loading invalid pawn memory.
* **Pawn**: Added `GetPlayerMarkerForPlayer`.
* **Pawn**: Added `a_???` file wrappers.
* **Upgrader**: Supports multiple codepages.
* **Upgrader**: Exclude files.
* **Upgrader**: Full replacements report.


**Full Changelog**: https://github.com/openmultiplayer/open.mp/compare/v1-RC1...v1-RC2
