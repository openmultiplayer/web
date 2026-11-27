---
title: "open.mp Launcher | open.mp"
description: "Download open.mp launcher releases"
canonical: https://open.mp/downloads/launcher
language: en
---

# open.mp Launcher

Play GTA San Andreas multiplayer in open.mp and SA-MP servers.

## v1.7.0LATEST

### Highlights

-   Smoother in-game overlay and improved compatibility with ENB and graphics modifications
-   Models cache folder setting and recently used nickname history
-   More reliable connections, reconnections, and client stability
-   Armenian, Korean, and Bulgarian translations, with updates to several other languages

View full changelog

## What's Changed

### In-Game & Client Features

-   Made the in-game launcher overlay smoother and more reliable, including when its window is recreated.
-   Improved compatibility with ENB and other graphics modifications.
-   Fixed splash-screen images displaying incorrectly on some setups.
-   Fixed some custom textures failing to load when their names are long.
-   Improved connections from the in-game launcher when nicknames or passwords contain special characters.
-   Improved stability when joining or reconnecting to servers, receiving incomplete server responses, and closing the game.
-   Reduced some unnecessary work during gameplay and overlay rendering.

### Launcher Improvements

-   Added a **Models cache folder** setting in Advanced settings, with a folder picker and a default SA-MP cache path on Windows.
-   Added a history of up to five recently used nicknames, selectable from the main window and server join prompt.
-   Added the `--no-omp` command-line option to launch without injecting the open.mp client.
-   Added Armenian, Korean, and Bulgarian translations. Expanded or corrected Spanish, Lithuanian, Georgian, Italian, and Serbian translations.
-   Fixed edited per-server nicknames being reset in the join prompt, and preserved them when changing SA-MP versions.
-   Fixed connecting to password-protected servers from the server context menu.
-   Encoded nicknames and passwords in in-game connect messages so special characters are handled correctly.
-   Fixed CLI connections to hyphenated hostnames by resolving them to IPv4 addresses before launch.
-   Fixed the SA-MP ping query payload and guarded against replies too short to parse.
-   Restored the main window’s size after the loading screen, including after a reload.
-   Skipped update checks in the in-game launcher and improved fallback selection of download and plugin information.
-   Started the game IPC listener only when needed, improved client connection cleanup, and sent overlay window IDs to the game client.
-   Improved game executable launching by validating its path, setting the game directory, and disconnecting its standard input and output.
-   Improved logging: try a file beside the executable, then local app data, then standard error.
-   Kept server context menu colors in sync with theme changes, removed focus outlines in the server list, and aligned Advanced settings buttons with General settings styling.
-   Changed the installer to download the WebView2 bootstrapper.
-   Fixed the external server dialog.

## New Contributors

-   @khe4oyan made their first contribution in [https://github.com/openmultiplayer/launcher/pull/369](https://github.com/openmultiplayer/launcher/pull/369)
-   @sampmoder made their first contribution in [https://github.com/openmultiplayer/launcher/pull/375](https://github.com/openmultiplayer/launcher/pull/375)
-   @edgyaf made their first contribution in [https://github.com/openmultiplayer/launcher/pull/410](https://github.com/openmultiplayer/launcher/pull/410)
-   @ricardoofnl made their first contribution in [https://github.com/openmultiplayer/launcher/pull/416](https://github.com/openmultiplayer/launcher/pull/416)
-   @LopezDev7 made their first contribution in [https://github.com/openmultiplayer/launcher/pull/427](https://github.com/openmultiplayer/launcher/pull/427)
-   @PANZEHIR54 made their first contribution in [https://github.com/openmultiplayer/launcher/pull/390](https://github.com/openmultiplayer/launcher/pull/390)
-   @JOsee321 made their first contribution in [https://github.com/openmultiplayer/launcher/pull/428](https://github.com/openmultiplayer/launcher/pull/428)

**Full Changelog**: [https://github.com/openmultiplayer/launcher/compare/v1.6.1...v1.7.0](https://github.com/openmultiplayer/launcher/compare/v1.6.1...v1.7.0)

[

Download Launcher Installer (.exe)(3.8 MB)

](https://github.com/openmultiplayer/launcher/releases/download/v1.7.0/omp-launcher-setup.exe)[

Download Portable Launcher (.exe)(8.7 MB)

](https://github.com/openmultiplayer/launcher/releases/download/v1.7.0/omp-launcher.exe)[GitHub](https://github.com/openmultiplayer/launcher/releases/tag/v1.7.0 "View release on GitHub")

## v1.6.1

### Highlights

-   In-game server browser (F9) to browse, switch, and rejoin servers without leaving the game
-   Import and export your favourite servers, with drag-and-drop reordering
-   Support for custom game executable names
-   Automatic client version selection, with per-server client version control

View full changelog

## What's Changed

### In-Game & Client Features

-   Added an **in-game server browser** (press **F9**), allowing you to browse the server list and switch or rejoin servers **without leaving the game**.
-   Added **custom splash screens**.
-   Added **open.mp settings** directly to the in-game pause menu.
-   Added options in open.mp settings to **toggle Discord status** (and other status indicators).
-   Improved Discord status handling and fixed incorrect IP reporting.
-   Fixed multiple issues related to **reconnection logic and the open.mp protocol**.
-   Fixed several **SA-MP crash scenarios**, improving overall stability.

### Launcher Improvements

-   **Massively improved stability and performance** across the entire launcher.
-   Major **codebase refactor** on both the Rust and TypeScript sides for long-term maintainability.
-   Significantly improved the **server query mechanism** for better efficiency and spam prevention.
-   Added **drag & drop reordering** for favorite servers.
-   Improved **Windows 7 compatibility**.
-   Installer now ships with the **WebView2 installer bundled**, simplifying setup.
-   Removed Discord status settings from the Advanced tab.
-   Added support for **custom game executable names** in the Advanced settings.
-   Added the ability to **import and export favorite server lists**.
-   Automatically selects the **appropriate client version** if SA-MP is not already installed.
-   Added **per-server client version selection**.
-   Added extensive and meaningful **log messages** to improve diagnostics and support.
-   Added a **join prompt** for password-protected servers when using quick connect.
-   Added **API timeouts** for most APIs to improve responsiveness and reliability.

### Bug Fixes & UX Improvements

-   Fixed issues with file copying when files are missing (notably font files).
-   Fixed server data being cached even after relaunching the application.
-   Fixed theme switching glitches.
-   Fixed per-server nickname input glitches.
-   Fixed inverted sorting arrows.
-   Fixed search input not including gamemode text.
-   Improved server hostname resolution.
-   Improved permission handling and user-facing messages.
-   Fixed web URL validation issues.
-   Fixed settings tab titles not updating after language changes.
-   Added rate-limiting for server query requests to prevent spam.
-   Updated and expanded localization files across multiple languages.

### Documentation & Community

-   Main website: [https://open.mp/](https://open.mp/)
-   Documentation: [https://open.mp/docs](https://open.mp/docs)
-   Join the community on Discord: [https://discord.gg/samp](https://discord.gg/samp)
-   Support development via OpenCollective: [https://opencollective.com/openmultiplayer](https://opencollective.com/openmultiplayer)

## Change log by merged pull requests

-   Update Italian translation by @ReshiramZekrom1 in [https://github.com/openmultiplayer/launcher/pull/286](https://github.com/openmultiplayer/launcher/pull/286)
-   Edited sr.ts by @Trysha-rbrn in [https://github.com/openmultiplayer/launcher/pull/287](https://github.com/openmultiplayer/launcher/pull/287)
-   Add translations for Indonesian by @flxzor in [https://github.com/openmultiplayer/launcher/pull/294](https://github.com/openmultiplayer/launcher/pull/294)
-   Polish translation update by @Slideinn in [https://github.com/openmultiplayer/launcher/pull/293](https://github.com/openmultiplayer/launcher/pull/293)
-   Turkish translation update by @ulasbayraktar in [https://github.com/openmultiplayer/launcher/pull/295](https://github.com/openmultiplayer/launcher/pull/295)
-   Georgian translation update by @Lasho4 in [https://github.com/openmultiplayer/launcher/pull/288](https://github.com/openmultiplayer/launcher/pull/288)
-   Update Lithuanian translation by @tnz1992 in [https://github.com/openmultiplayer/launcher/pull/216](https://github.com/openmultiplayer/launcher/pull/216)
-   Fix Discord Update status Binding by @brunorrr in [https://github.com/openmultiplayer/launcher/pull/300](https://github.com/openmultiplayer/launcher/pull/300)
-   This fixes the sort arrow direction, it was inverted by @Bios-Marcel in [https://github.com/openmultiplayer/launcher/pull/301](https://github.com/openmultiplayer/launcher/pull/301)
-   Fixes #233 by @Bios-Marcel in [https://github.com/openmultiplayer/launcher/pull/302](https://github.com/openmultiplayer/launcher/pull/302)
-   The appearances tab in settings now has a radiobutton by @Bios-Marcel in [https://github.com/openmultiplayer/launcher/pull/303](https://github.com/openmultiplayer/launcher/pull/303)
-   update Vietnamese locale by @aujiz11 in [https://github.com/openmultiplayer/launcher/pull/305](https://github.com/openmultiplayer/launcher/pull/305)
-   add Finnish (Suomi) language support by @weltschmerzie in [https://github.com/openmultiplayer/launcher/pull/304](https://github.com/openmultiplayer/launcher/pull/304)
-   Implementation of import/export functionality for favourite servers list by @itsneufox in [https://github.com/openmultiplayer/launcher/pull/307](https://github.com/openmultiplayer/launcher/pull/307)
-   update Chinese translation by @dockfries in [https://github.com/openmultiplayer/launcher/pull/312](https://github.com/openmultiplayer/launcher/pull/312)
-   Update Italian Translation (Import/Export feature) by @ReshiramZekrom1 in [https://github.com/openmultiplayer/launcher/pull/315](https://github.com/openmultiplayer/launcher/pull/315)
-   feat: Added missing entries for french translation file by @MichaelAceAnderson in [https://github.com/openmultiplayer/launcher/pull/321](https://github.com/openmultiplayer/launcher/pull/321)
-   Ability to reorder servers in the favourites tab by dragging them around by @itsneufox in [https://github.com/openmultiplayer/launcher/pull/320](https://github.com/openmultiplayer/launcher/pull/320)
-   Update sr.ts by @Trysha-rbrn in [https://github.com/openmultiplayer/launcher/pull/323](https://github.com/openmultiplayer/launcher/pull/323)
-   Ditch PanResolver in favour of dnd-kit by @itsneufox in [https://github.com/openmultiplayer/launcher/pull/324](https://github.com/openmultiplayer/launcher/pull/324)
-   update georgian translation & advanced search for georgian servers by @Lasho4 in [https://github.com/openmultiplayer/launcher/pull/326](https://github.com/openmultiplayer/launcher/pull/326)
-   add dutch (nederlands) translations by @DignitySAMP in [https://github.com/openmultiplayer/launcher/pull/329](https://github.com/openmultiplayer/launcher/pull/329)
-   Update Hungarian translations with minor fixes and new strings by @Cappsyhun in [https://github.com/openmultiplayer/launcher/pull/331](https://github.com/openmultiplayer/launcher/pull/331)
-   Small update ru.ts with proposed corrections by @NexiusTailer in [https://github.com/openmultiplayer/launcher/pull/337](https://github.com/openmultiplayer/launcher/pull/337)
-   Update ru localization with latest additions by @NexiusTailer in [https://github.com/openmultiplayer/launcher/pull/338](https://github.com/openmultiplayer/launcher/pull/338)
-   add pt strings by @itsneufox in [https://github.com/openmultiplayer/launcher/pull/339](https://github.com/openmultiplayer/launcher/pull/339)

## New Contributors

-   @flxzor made their first contribution in [https://github.com/openmultiplayer/launcher/pull/294](https://github.com/openmultiplayer/launcher/pull/294)
-   @Slideinn made their first contribution in [https://github.com/openmultiplayer/launcher/pull/293](https://github.com/openmultiplayer/launcher/pull/293)
-   @brunorrr made their first contribution in [https://github.com/openmultiplayer/launcher/pull/300](https://github.com/openmultiplayer/launcher/pull/300)
-   @weltschmerzie made their first contribution in [https://github.com/openmultiplayer/launcher/pull/304](https://github.com/openmultiplayer/launcher/pull/304)
-   @dockfries made their first contribution in [https://github.com/openmultiplayer/launcher/pull/312](https://github.com/openmultiplayer/launcher/pull/312)
-   @MichaelAceAnderson made their first contribution in [https://github.com/openmultiplayer/launcher/pull/321](https://github.com/openmultiplayer/launcher/pull/321)
-   @DignitySAMP made their first contribution in [https://github.com/openmultiplayer/launcher/pull/329](https://github.com/openmultiplayer/launcher/pull/329)
-   @Cappsyhun made their first contribution in [https://github.com/openmultiplayer/launcher/pull/331](https://github.com/openmultiplayer/launcher/pull/331)

**Full Changelog**: [https://github.com/openmultiplayer/launcher/compare/v1.5.2...v1.6.1](https://github.com/openmultiplayer/launcher/compare/v1.5.2...v1.6.1)

[

Download Launcher (.exe)(5.1 MB)

](https://github.com/openmultiplayer/launcher/releases/download/v1.6.1/omp-launcher-setup.exe)[GitHub](https://github.com/openmultiplayer/launcher/releases/tag/v1.6.1 "View release on GitHub")

Every release is open source. Build from source, or download directly from GitHub.

[Download from GitHub](https://github.com/openmultiplayer/launcher/releases)
