---
title: "open.mp Server | open.mp"
description: "Download open.mp server releases"
canonical: https://open.mp/downloads/server
language: en
---

# open.mp Server

Host your own GTA San Andreas multiplayer server.

## v1.6.7.3218LATEST

### Highlights

-   New NPC vehicle position and rotation natives, with improved NPC vehicle movement
-   Networking fixes for ban reloads, connections, broadcasts, and server shutdown
-   Pawn, component, and C API fixes, plus Conan 2 and macOS ARM build support

View full changelog

## open.mp server — changes since v1.5.8.3079

### Server operation and networking

-   Added `artwork.show_crc_logs` to enable TXD and DFF CRC logging when needed. It is disabled by default. [#1164](https://github.com/openmultiplayer/open.mp/pull/1164)
-   Fixed environment-variable substitution in server configuration, including numeric and boolean settings. [#1195](https://github.com/openmultiplayer/open.mp/pull/1195)
-   Fixed `reloadbans` so reloaded bans are enforced by the network again. Matching connected players are also removed. [#1276](https://github.com/openmultiplayer/open.mp/pull/1276)
-   Fixed false “server is full” conditions after kicks, rejected invalid connection-lost packets, and temporarily banned invalid connection attempts to reduce log spam. [#1209](https://github.com/openmultiplayer/open.mp/pull/1209), [#1173](https://github.com/openmultiplayer/open.mp/pull/1173)
-   Fixed connections attempted immediately after server startup being rejected by an invalid network cookie. [#1213](https://github.com/openmultiplayer/open.mp/pull/1213)
-   Fixed broadcast RPC payloads being shortened when a plugin reads them before transmission. This affected features such as weather changes, messages, and game text. [#1215](https://github.com/openmultiplayer/open.mp/pull/1215)
-   Fixed Linux shutdown hanging or crashing when the server runs without a terminal, such as under `nohup`. [#1203](https://github.com/openmultiplayer/open.mp/pull/1203)
-   Vehicle paintjobs now reset when vehicles respawn. [#1213](https://github.com/openmultiplayer/open.mp/pull/1213)

### Scripting and components

-   Fixed `%q` escaping in Pawn `format()`, a crash when reading a missing console variable as a string, and crashes caused by invalid `SetTimerEx` arguments. [#1159](https://github.com/openmultiplayer/open.mp/pull/1159), [#1171](https://github.com/openmultiplayer/open.mp/pull/1171), [#1223](https://github.com/openmultiplayer/open.mp/pull/1223)
-   Fixed spawning after leaving spectator mode and made `TogglePlayerSpectating` reliably enable spectating again. [#1187](https://github.com/openmultiplayer/open.mp/pull/1187), [#1092](https://github.com/openmultiplayer/open.mp/pull/1092)
-   Changed main-script unloading so components reset after the script is unloaded, preventing callbacks and timers from referring to an unloaded script. [#1190](https://github.com/openmultiplayer/open.mp/pull/1190)
-   Added usage messages when script-loading console commands are called without a filename, and clearer errors for missing legacy plugins. [#1032](https://github.com/openmultiplayer/open.mp/pull/1032), [#1273](https://github.com/openmultiplayer/open.mp/pull/1273)
-   Added separate object and attached-object editing state checks, and validated incoming editing responses against the active edit mode. [#1188](https://github.com/openmultiplayer/open.mp/pull/1188)
-   Fixed the `syncRotation` argument being ignored by `AttachPlayerObjectToObject`, including its C API path. [#1163](https://github.com/openmultiplayer/open.mp/pull/1163)
-   Fixed C API gang-zone and pickup destruction failing to release their legacy IDs for reuse. [#1231](https://github.com/openmultiplayer/open.mp/pull/1231)
-   Updated Pawn with fixes for `memcpy` and `fwrite` on packed strings, and corrected presets in the legacy server-side game-text component. [#1180](https://github.com/openmultiplayer/open.mp/pull/1180)

### NPCs

-   Added `NPC_SetVehiclePos`, `NPC_SetVehicleRot`, `NPC_GetVehiclePos`, and `NPC_GetVehicleRot`. **Behavior change:** `NPC_SetPos` now removes an NPC from its vehicle; use the vehicle-specific setter to reposition it while seated. [#1182](https://github.com/openmultiplayer/open.mp/pull/1182), [#1237](https://github.com/openmultiplayer/open.mp/pull/1237)
-   Fixed NPC vehicles appearing flat or teleporting while driving on slopes, and improved vehicle movement synchronization. [#1249](https://github.com/openmultiplayer/open.mp/pull/1249), [#1280](https://github.com/openmultiplayer/open.mp/pull/1280)
-   Fixed `NPC_PutInVehicle` leaving NPCs visibly on foot in boats. [#1236](https://github.com/openmultiplayer/open.mp/pull/1236)
-   Fixed dead NPCs appearing standing when streamed in. `NPC_Respawn` now clears their death state. [#1238](https://github.com/openmultiplayer/open.mp/pull/1238), [#1184](https://github.com/openmultiplayer/open.mp/pull/1184)
-   Fixed NPC infinite ammo when `NPC_SetAmmo` had not been called, corrected `NPC_GetSkin`’s return value, and fixed the angle calculated by `NPC_SetAngleToPos`. [#1165](https://github.com/openmultiplayer/open.mp/pull/1165), [#1182](https://github.com/openmultiplayer/open.mp/pull/1182), [#1252](https://github.com/openmultiplayer/open.mp/pull/1252)
-   Improved movement between short NPC path nodes and prevented zero-time node transitions from repeatedly running in one tick. [Movement change](https://github.com/openmultiplayer/open.mp/commit/d39310858caa62557545a93e59a917ea417ca0d9), [transition limit](https://github.com/openmultiplayer/open.mp/commit/958349e44a9f122a9182bd380e493b5bf1b5911b)
-   Fixed NPC cleanup and several crashes when optional components are missing or unloading. [#1175](https://github.com/openmultiplayer/open.mp/pull/1175), [#1182](https://github.com/openmultiplayer/open.mp/pull/1182)

### Building and deployment

-   Migrated builds to **Conan 2** and added a dedicated [build guide](https://github.com/openmultiplayer/open.mp/blob/master/BUILD.md) for Windows, Linux, and macOS. [#1233](https://github.com/openmultiplayer/open.mp/pull/1233), [#998](https://github.com/openmultiplayer/open.mp/pull/998)
-   Added macOS ARM build support and fixed Windows compatibility with newer Microsoft toolchains. [#1234](https://github.com/openmultiplayer/open.mp/pull/1234), [#1235](https://github.com/openmultiplayer/open.mp/pull/1235), [#1166](https://github.com/openmultiplayer/open.mp/pull/1166)
-   Fixed the 32-bit Docker runtime image missing libraries required to start `omp-server`. [#1263](https://github.com/openmultiplayer/open.mp/pull/1263)

## All pull requests merged

-   Restore Artwork CRC logs by @SimoSbara in [https://github.com/openmultiplayer/open.mp/pull/1164](https://github.com/openmultiplayer/open.mp/pull/1164)
-   fix microsoft's shitty ABI compat breakage by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1166](https://github.com/openmultiplayer/open.mp/pull/1166)
-   Fix string escape with %q in format() by @SimoSbara in [https://github.com/openmultiplayer/open.mp/pull/1159](https://github.com/openmultiplayer/open.mp/pull/1159)
-   Fix GetConsoleVarAsString crash by @ksenonadv in [https://github.com/openmultiplayer/open.mp/pull/1171](https://github.com/openmultiplayer/open.mp/pull/1171)
-   Ignore networked ID\_CONNECTION\_LOST packet. by @ksenonadv in [https://github.com/openmultiplayer/open.mp/pull/1173](https://github.com/openmultiplayer/open.mp/pull/1173)
-   Fix NPC component cleanup by @vincenzocorso in [https://github.com/openmultiplayer/open.mp/pull/1175](https://github.com/openmultiplayer/open.mp/pull/1175)
-   Fix issues with NPCs by @SimoSbara in [https://github.com/openmultiplayer/open.mp/pull/1165](https://github.com/openmultiplayer/open.mp/pull/1165)
-   NPC\_Respawn now resets death state to false by @stley in [https://github.com/openmultiplayer/open.mp/pull/1184](https://github.com/openmultiplayer/open.mp/pull/1184)
-   Call components reset after finishing unloading the main script. by @ksenonadv in [https://github.com/openmultiplayer/open.mp/pull/1190](https://github.com/openmultiplayer/open.mp/pull/1190)
-   Fix spawn when leaving spectator state by @ksenonadv in [https://github.com/openmultiplayer/open.mp/pull/1187](https://github.com/openmultiplayer/open.mp/pull/1187)
-   NPC changes and fixes by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1182](https://github.com/openmultiplayer/open.mp/pull/1182)
-   Patch to fix env vars by @itsneufox in [https://github.com/openmultiplayer/open.mp/pull/1195](https://github.com/openmultiplayer/open.mp/pull/1195)
-   Fix Linux server deadlock on shutdown without TTY by @TanF12 in [https://github.com/openmultiplayer/open.mp/pull/1203](https://github.com/openmultiplayer/open.mp/pull/1203)
-   Fix server-full issue introduced by Kick changes by @ksenonadv in [https://github.com/openmultiplayer/open.mp/pull/1209](https://github.com/openmultiplayer/open.mp/pull/1209)
-   Fix RPC call to use correct bit count for data transmission by @bssth in [https://github.com/openmultiplayer/open.mp/pull/1215](https://github.com/openmultiplayer/open.mp/pull/1215)
-   Tweaks for pawn component and more by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/1180](https://github.com/openmultiplayer/open.mp/pull/1180)
-   CAPI: Fix legacy slots not being released for GZ and Pickups by @markski1 in [https://github.com/openmultiplayer/open.mp/pull/1231](https://github.com/openmultiplayer/open.mp/pull/1231)
-   Fix server crash for invalid SetTimerEx args by @ksenonadv in [https://github.com/openmultiplayer/open.mp/pull/1223](https://github.com/openmultiplayer/open.mp/pull/1223)
-   conan 2 (remembered mj goat today) by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1233](https://github.com/openmultiplayer/open.mp/pull/1233)
-   Some more fixes for macOS by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/1235](https://github.com/openmultiplayer/open.mp/pull/1235)
-   macos fix, add macos ci, fix conan cache for conan 2 by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1234](https://github.com/openmultiplayer/open.mp/pull/1234)
-   Add help message when attempting to load a script without arguments by @xerox8521 in [https://github.com/openmultiplayer/open.mp/pull/1032](https://github.com/openmultiplayer/open.mp/pull/1032)
-   Fix syncRotation ignored to AttachPlayerObjectToObject by @SimoSbara in [https://github.com/openmultiplayer/open.mp/pull/1163](https://github.com/openmultiplayer/open.mp/pull/1163)
-   Fix NPC\_SetAngleToPos(): use `{vec.x, vec.y}` instead of `{vec.x, vec.z}` by @KW46 in [https://github.com/openmultiplayer/open.mp/pull/1252](https://github.com/openmultiplayer/open.mp/pull/1252)
-   docker/run.sh: fix omp-server failing to start due to missing libraries by @vincenzocorso in [https://github.com/openmultiplayer/open.mp/pull/1263](https://github.com/openmultiplayer/open.mp/pull/1263)
-   Fix moving NPC vehicle pitch not synced by @Fanorisky in [https://github.com/openmultiplayer/open.mp/pull/1249](https://github.com/openmultiplayer/open.mp/pull/1249)
-   fix: NPC\_PutInVehicle not visually attaching NPC to boat seat by @Revelts in [https://github.com/openmultiplayer/open.mp/pull/1236](https://github.com/openmultiplayer/open.mp/pull/1236)
-   Reset vehicle paintjob on respawn and seed cookies after network start by @berkleblebiciii in [https://github.com/openmultiplayer/open.mp/pull/1213](https://github.com/openmultiplayer/open.mp/pull/1213)
-   Fix dead NPC appearing standing when streamed in by @krzysztofmotas in [https://github.com/openmultiplayer/open.mp/pull/1238](https://github.com/openmultiplayer/open.mp/pull/1238)
-   Core: re-apply bans to networks in reloadBans by @berkleblebiciii in [https://github.com/openmultiplayer/open.mp/pull/1276](https://github.com/openmultiplayer/open.mp/pull/1276)
-   add linux build instructions to README.md by @aszarth in [https://github.com/openmultiplayer/open.mp/pull/998](https://github.com/openmultiplayer/open.mp/pull/998)
-   Fixed: TogglePlayerSpectating by @uifdev in [https://github.com/openmultiplayer/open.mp/pull/1092](https://github.com/openmultiplayer/open.mp/pull/1092)
-   fix misleading message for missing legacy plugins by @dockfries in [https://github.com/openmultiplayer/open.mp/pull/1273](https://github.com/openmultiplayer/open.mp/pull/1273)
-   Fix NPC teleporting on slopes while driving by @itsneufox in [https://github.com/openmultiplayer/open.mp/pull/1280](https://github.com/openmultiplayer/open.mp/pull/1280)
-   Add NPC\_GetVehiclePos and NPC\_GetVehicleRot natives by @Revelts in [https://github.com/openmultiplayer/open.mp/pull/1237](https://github.com/openmultiplayer/open.mp/pull/1237)
-   Object editing types by @xunder-matth in [https://github.com/openmultiplayer/open.mp/pull/1188](https://github.com/openmultiplayer/open.mp/pull/1188)

## New Contributors

-   @SimoSbara made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1164](https://github.com/openmultiplayer/open.mp/pull/1164)
-   @vincenzocorso made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1175](https://github.com/openmultiplayer/open.mp/pull/1175)
-   @stley made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1184](https://github.com/openmultiplayer/open.mp/pull/1184)
-   @TanF12 made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1203](https://github.com/openmultiplayer/open.mp/pull/1203)
-   @bssth made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1215](https://github.com/openmultiplayer/open.mp/pull/1215)
-   @markski1 made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1231](https://github.com/openmultiplayer/open.mp/pull/1231)
-   @xerox8521 made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1032](https://github.com/openmultiplayer/open.mp/pull/1032)
-   @KW46 made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1252](https://github.com/openmultiplayer/open.mp/pull/1252)
-   @Fanorisky made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1249](https://github.com/openmultiplayer/open.mp/pull/1249)
-   @Revelts made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1236](https://github.com/openmultiplayer/open.mp/pull/1236)
-   @berkleblebiciii made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1213](https://github.com/openmultiplayer/open.mp/pull/1213)
-   @krzysztofmotas made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1238](https://github.com/openmultiplayer/open.mp/pull/1238)
-   @aszarth made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/998](https://github.com/openmultiplayer/open.mp/pull/998)
-   @dockfries made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1273](https://github.com/openmultiplayer/open.mp/pull/1273)

**Full Changelog**: [https://github.com/openmultiplayer/open.mp/compare/v1.5.8.3079...v1.6.7.3218](https://github.com/openmultiplayer/open.mp/compare/v1.5.8.3079...v1.6.7.3218)

[

Windows(35.6 MB)

](https://github.com/openmultiplayer/open.mp/releases/download/v1.6.7.3218/open.mp-win-x86.zip)[

Linux(32.1 MB)

](https://github.com/openmultiplayer/open.mp/releases/download/v1.6.7.3218/open.mp-linux-x86.tar.gz)[

Linux (DynSSL) \*(26.9 MB)

](https://github.com/openmultiplayer/open.mp/releases/download/v1.6.7.3218/open.mp-linux-x86-dynssl.tar.gz)[GitHub](https://github.com/openmultiplayer/open.mp/releases/tag/v1.6.7.3218 "View release on GitHub")

\* The DynSSL version requires libssl to be installed on your Linux distribution.

## v1.5.8.3079

### Highlights

-   Built-in server side fully controllable NPC
-   New C API / C API SDK and improved Pawn-to-SDK interoperability
-   Major network performance improvements with stronger sync validation checks
-   OpenSSL 3.0.13 upgrade

View full changelog

## What's changed

### Major Features

-   Introdued **fully controllable NPCs as a built-in server feature**, removing the need for external NPC plugins and enabling deeper server-side AI and automation.
-   Added a **C API and C API SDK**, allowing developers to integrate open.mp directly with native code and external tooling.
-   Added the ability to **call Pawn natives from the open.mp C++ SDK**, significantly improving interoperability between scripting and native modules.

### Networking & Performance

-   Significant **network performance improvements**, resulting in faster synchronization and more responsive gameplay.
-   Added multiple **sync validation checks** to prevent invalid data, spoofed states, and malformed packets.
-   MTU values are now **validated against the maximum allowed per client version**, preventing misconfiguration and instability.

### Platform & Compatibility

-   Upgraded **OpenSSL from 1.1.1 to 3.0.13**, officially deprecating legacy Linux distributions and ensuring proper support for modern systems.
-   Added **environment variable support for `config.json`**, making containerized, CI/CD, and production deployments easier and more flexible.

### NPC & Gameplay Improvements

-   NPC IDs now allocate from **highest to lowest**, preventing conflicts and improving predictability.
-   Deprecated `ConnectNPC` in favor of the new built-in NPC system.
-   Forced train creation to always use **4 consecutive IDs**, fixing long-standing inconsistencies.
-   Fixed train passenger synchronization issues.

### Stability & Bug Fixes

-   Fixed an infamous issue with spawn data
-   Fixed kick delay issues.
-   Fixed crashes related to gangzones in the checking list during server restarts.
-   Fixed random occurrences of player state being set to `None` after spectating.
-   Fixed stdin lock on Linux during server shutdown.
-   Fixed `chatlogging` not affecting death messages.
-   Removed the legacy **Fixes** component due to instability, redundancy, and its functionality being superseded by newer systems.
-   Numerous small Pawn native fixes for improved correctness and usability.

### Documentation & Community

-   New and updated **NPC scripting API (Pawn natives)** are available in the official documentation: [https://open.mp/docs](https://open.mp/docs)
-   Join the community and get support on Discord: [https://discord.gg/samp](https://discord.gg/samp)
-   Support development via OpenCollective: [https://opencollective.com/openmultiplayer](https://opencollective.com/openmultiplayer)
-   Main website: [https://open.mp/](https://open.mp/)

## Change log by merged pull requests:

-   Fix for non-bullet guns returned as 0 in weapon data by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/1046](https://github.com/openmultiplayer/open.mp/pull/1046)
-   Update gitignore for CLion && macOS by @povargek in [https://github.com/openmultiplayer/open.mp/pull/1049](https://github.com/openmultiplayer/open.mp/pull/1049)
-   fix ci by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1054](https://github.com/openmultiplayer/open.mp/pull/1054)
-   Fix apple silicon build by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1062](https://github.com/openmultiplayer/open.mp/pull/1062)
-   Fixes for a couple of issues by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/999](https://github.com/openmultiplayer/open.mp/pull/999)
-   Fixed: legacy config variable 'chatlogging' does not control death logging by @uifdev in [https://github.com/openmultiplayer/open.mp/pull/1057](https://github.com/openmultiplayer/open.mp/pull/1057)
-   Pack Vehicle and StreamInVehicle more tightly by @PTemuri in [https://github.com/openmultiplayer/open.mp/pull/1091](https://github.com/openmultiplayer/open.mp/pull/1091)
-   Fixed: train passenger sync by @uifdev in [https://github.com/openmultiplayer/open.mp/pull/1100](https://github.com/openmultiplayer/open.mp/pull/1100)
-   Fixed `logging.log_connection_messages` option check by @Northn in [https://github.com/openmultiplayer/open.mp/pull/1094](https://github.com/openmultiplayer/open.mp/pull/1094)
-   Fixed "reverse search for NPC id in player pool" by @NoPressF in [https://github.com/openmultiplayer/open.mp/pull/1088](https://github.com/openmultiplayer/open.mp/pull/1088)
-   Return string length for some natives by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/1098](https://github.com/openmultiplayer/open.mp/pull/1098)
-   Check provided mtu value against max allowed per client version by @ksenonadv in [https://github.com/openmultiplayer/open.mp/pull/1111](https://github.com/openmultiplayer/open.mp/pull/1111)
-   Reverse search for NPC id in player pool by @ksenonadv in [https://github.com/openmultiplayer/open.mp/pull/1075](https://github.com/openmultiplayer/open.mp/pull/1075)
-   add NPC\_HasPathPointInRadius by @NoPressF in [https://github.com/openmultiplayer/open.mp/pull/1115](https://github.com/openmultiplayer/open.mp/pull/1115)
-   One big beautiful pull request by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/1113](https://github.com/openmultiplayer/open.mp/pull/1113)
-   Create FUNDING.yml by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1121](https://github.com/openmultiplayer/open.mp/pull/1121)
-   Store natives globally & ability to call them from using SDK by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1128](https://github.com/openmultiplayer/open.mp/pull/1128)
-   fix sdtin lock from getline when shutting down by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1131](https://github.com/openmultiplayer/open.mp/pull/1131)
-   NPC Component by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/916](https://github.com/openmultiplayer/open.mp/pull/916)
-   Update FCNPC deprecation message by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/1132](https://github.com/openmultiplayer/open.mp/pull/1132)
-   add capi component and submodule by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1125](https://github.com/openmultiplayer/open.mp/pull/1125)
-   Some fixes and changes by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1133](https://github.com/openmultiplayer/open.mp/pull/1133)
-   upgrade openssl version from 1.1.1 to 3.0.13 by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1096](https://github.com/openmultiplayer/open.mp/pull/1096)
-   Some NPC fixes and changes by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1135](https://github.com/openmultiplayer/open.mp/pull/1135)
-   Add trams where they are missed by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/1140](https://github.com/openmultiplayer/open.mp/pull/1140)
-   Force train to be 4 consecutive ids by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1139](https://github.com/openmultiplayer/open.mp/pull/1139)
-   Fix event handling by @0x617374726F in [https://github.com/openmultiplayer/open.mp/pull/1144](https://github.com/openmultiplayer/open.mp/pull/1144)
-   Use entry create for dialog data creation by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1145](https://github.com/openmultiplayer/open.mp/pull/1145)
-   Add environment variable support in config.json by @itsneufox in [https://github.com/openmultiplayer/open.mp/pull/1142](https://github.com/openmultiplayer/open.mp/pull/1142)
-   network, npcs, and docker script changes by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1148](https://github.com/openmultiplayer/open.mp/pull/1148)
-   fix TextDraw\_SetProportional by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1149](https://github.com/openmultiplayer/open.mp/pull/1149)
-   fix slot reserving for players outside of raknet by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1150](https://github.com/openmultiplayer/open.mp/pull/1150)
-   Fix Kick Issue by @Tiaansu in [https://github.com/openmultiplayer/open.mp/pull/1151](https://github.com/openmultiplayer/open.mp/pull/1151)
-   fix: clear checkingList when component is reseted by @nidi21 in [https://github.com/openmultiplayer/open.mp/pull/1152](https://github.com/openmultiplayer/open.mp/pull/1152)
-   bump version by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1153](https://github.com/openmultiplayer/open.mp/pull/1153)
-   update sdk module to the right ref by @AmyrAhmady in [https://github.com/openmultiplayer/open.mp/pull/1154](https://github.com/openmultiplayer/open.mp/pull/1154)
-   Couple of fixes for NPC component by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/1156](https://github.com/openmultiplayer/open.mp/pull/1156)
-   Fix for random occurrence of player state none by @NexiusTailer in [https://github.com/openmultiplayer/open.mp/pull/1146](https://github.com/openmultiplayer/open.mp/pull/1146)

## New Contributors

-   @povargek made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1049](https://github.com/openmultiplayer/open.mp/pull/1049)
-   @PTemuri made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1091](https://github.com/openmultiplayer/open.mp/pull/1091)
-   @Northn made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1094](https://github.com/openmultiplayer/open.mp/pull/1094)
-   @NoPressF made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1088](https://github.com/openmultiplayer/open.mp/pull/1088)
-   @0x617374726F made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1144](https://github.com/openmultiplayer/open.mp/pull/1144)
-   @itsneufox made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1142](https://github.com/openmultiplayer/open.mp/pull/1142)
-   @Tiaansu made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1151](https://github.com/openmultiplayer/open.mp/pull/1151)
-   @nidi21 made their first contribution in [https://github.com/openmultiplayer/open.mp/pull/1152](https://github.com/openmultiplayer/open.mp/pull/1152)

**Full Changelog**: [https://github.com/openmultiplayer/open.mp/compare/v1.4.0.2779...v1.5.8.3079](https://github.com/openmultiplayer/open.mp/compare/v1.4.0.2779...v1.5.8.3079)

[

Windows(34.9 MB)

](https://github.com/openmultiplayer/open.mp/releases/download/v1.5.8.3079/open.mp-win-x86.zip)[

Linux(30.5 MB)

](https://github.com/openmultiplayer/open.mp/releases/download/v1.5.8.3079/open.mp-linux-x86.tar.gz)[

Linux (DynSSL) \*(25.5 MB)

](https://github.com/openmultiplayer/open.mp/releases/download/v1.5.8.3079/open.mp-linux-x86-dynssl.tar.gz)[GitHub](https://github.com/openmultiplayer/open.mp/releases/tag/v1.5.8.3079 "View release on GitHub")

\* The DynSSL version requires libssl to be installed on your Linux distribution.

Every release is open source. Build from source, or download directly from GitHub.

[Download from GitHub](https://github.com/openmultiplayer/open.mp/releases)
