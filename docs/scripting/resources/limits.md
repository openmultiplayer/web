---
title: "Limits | open.mp"
description: "A list of all limitations imposed by the game/server."
canonical: https://open.mp/docs/scripting/resources/limits
language: en
---

# Limits

## In-game Entities

| Type | Limit (0.3.7) |
| --- | --- |
| Players | 1000 |
| [Vehicles](https://open.mp/docs/scripting/functions/CreateVehicle)(4)(6) | 2000 |
| [Vehicle Models](https://open.mp/docs/scripting/functions/CreateVehicle)(1) | Unlimited |
| [Objects](https://open.mp/docs/scripting/functions/CreateObject)(4)(6) | 1000 |
| [Virtual Worlds](https://open.mp/docs/scripting/functions/SetPlayerVirtualWorld) | 2,147,483,647 |
| [Interiors](https://open.mp/docs/scripting/functions/SetPlayerInterior) | 256 |
| [Classes](https://open.mp/docs/scripting/functions/AddPlayerClass) | 320 |
| [Map Icons](https://open.mp/docs/scripting/functions/SetPlayerMapIcon)(4) | 100 |
| [Race Checkpoints](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint)(4) | 1 |
| [Checkpoints](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint)(4) | 1 |
| [Pickups](https://open.mp/docs/scripting/functions/CreatePickup)(4) | 4096 |
| [Global 3D Labels](https://open.mp/docs/scripting/functions/Create3DTextLabel)(4) | 1024 |
| [Per-player 3D Text Labels](https://open.mp/docs/scripting/functions/CreatePlayer3DTextLabel)(4) | 1024 |
| [Chat Bubble String](https://open.mp/docs/scripting/functions/SetPlayerChatBubble) | 144 characters |
| [SetObjectMaterialText](https://open.mp/docs/scripting/functions/SetObjectMaterialText), [SetPlayerObjectMaterialText](https://open.mp/docs/scripting/functions/SetPlayerObjectMaterialText) Text length | 2048 characters |
| [Gangzones](https://open.mp/docs/scripting/functions/GangZoneCreate) | 1024 |
| [Per-player Gangzones](https://open.mp/docs/scripting/functions/CreatePlayerGangZone) | 1024 |
| [Menus](https://open.mp/docs/scripting/functions/CreateMenu) | 128 |
| [Attached player objects](https://open.mp/docs/scripting/functions/SetPlayerAttachedObject) | 10 |
| [Player Variables](https://open.mp/docs/scripting/functions/SetPVarInt) | 800 |
| [Server Variables (0.3.7 R2/omp)](https://open.mp/docs/scripting/functions/SetSVarInt) | Unlimited |
| [Actors](https://open.mp/docs/scripting/functions/CreateActor) (since 0.3.7)(4)(5) | 1000 |
| [Explosions](https://open.mp/docs/scripting/functions/CreateExplosion) | 10 |

## Server Properties - SA-MP / omp

| Type | SA-MP Limit (0.3.7) | omp |
| --- | --- | --- |
| Gamemodes | 16 | Unlimited |
| Filterscripts | 16 | Unlimited |
| Text Input (Chat/Commands) | 128 cells (512 bytes) | 128 cells (512 bytes) |
| [Text Output](https://open.mp/docs/scripting/functions/SendClientMessage) | 144 cells (576 bytes) | 144 cells (576 bytes) |
| Name Length ([SetPlayerName](https://open.mp/docs/scripting/functions/SetPlayerName)) | 24 characters | 24 characters |

## Textdraws

| Type | Limit (0.3.7) |
| --- | --- |
| String Length(2) | 1024 characters |
| Shown In A Single Client's Screen(3) | 2048 + 256 |
| Shown In A Single Client's Screen (sprites) | 100 |
| Created Serverwise ([Global](https://open.mp/docs/scripting/functions/TextDrawCreate)) | 2048 |
| Created Serverwise ([Per-Player](https://open.mp/docs/scripting/functions/CreatePlayerTextDraw)) | 256 |

## Dialogs

| Type | Limit (0.3.7) |
| --- | --- |
| [Dialog IDs](https://open.mp/docs/scripting/functions/ShowPlayerDialog) | 32768 |
| Info (Main text) | 4096 |
| Caption | 64 |
| Input Text Box (DIALOG\_STYLE\_INPUT/PASSWORD) | 128 |
| Tab List Columns (DIALOG\_STYLE\_TABLIST(\_HEADERS)) | 4 |
| Tab List Column Characters (DIALOG\_STYLE\_TABLIST(\_HEADERS)) | 128 |
| Tab List Row Characters (DIALOG\_STYLE\_TABLIST(\_HEADERS)) | 256 |

**Notes:**

1.  Although the vehicle model limit in 0.3 is unlimited, if you use a large amount of vehicle models then it will affect client performance.
2.  Although the textdraw string limit is 1024 characters, if [colour codes](https://open.mp/docs/scripting/resources/gametextstyles#text-colors) (e.g. `~r~`) are used beyond the 255th character it may crash the client.
3.  It is possible to show all Textdraws at the same time for one player, however this is not recommended.
4.  To circumvent these limits, it is possible to use a [streamer](https://github.com/samp-incognito/samp-streamer-plugin). Streamers work by only creating the entities etc. that are close to players.
5.  Due to client limitations only up to 51 actors may actually be shown at a time.
6.  Vehicle IDs start at ID 1 and thus range from 1 to 1999, even if MAX\_VEHICLES is 2000. Objects and player objects also start at ID 1.
