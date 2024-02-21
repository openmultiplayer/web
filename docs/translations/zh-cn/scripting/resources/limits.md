---
title: Limits
description: A list of all limitations imposed by the game/server.
tags: []
---

## In-game Entities

| Type                                                          | Limit (0.3.7)   |
| ------------------------------------------------------------- | --------------- |
| Players                                                       | 1000            |
| Vehicles<sup>(4)(6)</sup>                                     | 2000            |
| Vehicle Models<sup>(1)</sup>                                  | Unlimited       |
| Objects<sup>(4)(6)</sup>                                      | 1000            |
| Virtual Worlds                                                | 2,147,483,647   |
| Interiors                                                     | 256             |
| Classes                                                       | 320             |
| Map Icons<sup>(4)</sup>                                       | 100             |
| Race Checkpoints<sup>(4)</sup>                                | 1               |
| Checkpoints<sup>(4)</sup>                                     | 1               |
| Pickups<sup>(4)</sup>                                         | 4096            |
| Global 3D Labels<sup>(4)</sup>                                | 1024            |
| Per-player 3D Text Labels<sup>(4)</sup>                       | 1024            |
| Chat Bubble String                                            | 144 characters  |
| [SetObjectMaterialText](../functions/SetObjectMaterialText), [SetPlayerObjectMaterialText](../functions/SetPlayerObjectMaterialText) Text length | 2048 characters |
| Gangzones                                                     | 1024            |
| Menus                                                         | 128             |
| Attached player objects                                       | 10              |
| Player Variables                                              | 800             |
| Actors (since 0.3.7)<sup>(4)(5)</sup>                         | 1000            |
| Explosions                                                    | 10              |

## Server Properties

| Type                        | Limit (0.3.7)         |
| --------------------------- | --------------------- |
| Gamemodes                   | 16                    |
| Filterscripts               | 16                    |
| Text Input (Chat/Commands)  | 128 cells (512 bytes) |
| Text Output                 | 144 cells (576 bytes) |
| Name Length ([SetPlayerName](../functions/SetPlayerName)) | 24 characters         |

## Textdraws

| Type                                            | Limit (0.3.7)   |
| ----------------------------------------------- | --------------- |
| String Length<sup>(2)</sup>                     | 1024 characters |
| Shown In A Single Client's Screen<sup>(3)</sup> | 2048 + 256      |
| Shown In A Single Client's Screen (sprites)     | 100             |
| Created Serverwise (Global)                     | 2048            |
| Created Serverwise (Per-Player)                 | 256             |

## Dialogs

| Type                                                         | Limit (0.3.7) |
| ------------------------------------------------------------ | ------------- |
| Dialog IDs                                                   | 32768         |
| Info (Main text)                                             | 4096          |
| Caption                                                      | 64            |
| Input Text Box (DIALOG_STYLE_INPUT/PASSWORD)                 | 128           |
| Tab List Columns (DIALOG_STYLE_TABLIST(\_HEADERS))           | 4             |
| Tab List Column Characters (DIALOG_STYLE_TABLIST(\_HEADERS)) | 128           |
| Tab List Row Characters (DIALOG_STYLE_TABLIST(\_HEADERS))    | 256           |

**Notes:**

1. Although the vehicle model limit in 0.3 is unlimited, if you use a large amount of vehicle models then it will affect client performance.
2. Although the textdraw string limit is 1024 characters, if colour codes (e.g. ~r~) are used beyond the 255th character it may crash the client.
3. It is possible to show all Textdraws at the same time for one player, however this is not recommended.
4. To circumvent these limits, it is possible to use a [streamer](https://github.com/samp-incognito/samp-streamer-plugin). Streamers work by only creating the entities etc. that are close to players.
5. Due to client limitations only up to 51 actors may actually be shown at a time.
6. Vehicle IDs start at ID 1 and thus range from 1 to 1999, even if MAX_VEHICLES is 2000. Objects and player objects also start at ID 1.
