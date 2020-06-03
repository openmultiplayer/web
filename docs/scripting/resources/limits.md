---
id: limits
title: Limits
description: A list of all limitations imposed by the game/server.
tags: []
---

## In-game Entities

| Type                                                          | Limit           |
| ------------------------------------------------------------- | --------------- |
| Players                                                       | 1000            |
| Vehicles (4)                                                  | 2000            |
| Vehicle Models                                                | Unlimited (1)   |
| Objects (4)                                                   | 1000            |
| Virtual Worlds                                                | 2,147,483,647   |
| Interiors                                                     | 256             |
| Classes                                                       | 320             |
| Map Icons (4)                                                 | 100             |
| Race Checkpoints (4)                                          | 1               |
| Checkpoints (4)                                               | 1               |
| Pickups (4)                                                   | 4096            |
| Global 3D Labels (4)                                          | 1024            |
| Per-player 3D Text Labels (4)                                 | 1024            |
| Chat Bubble String                                            | 144 characters  |
| SetObjectMaterialText,SetPlayerObjectMaterialText Text length | 2048 characters |
| Gangzones                                                     | 1024            |
| Menus                                                         | 128             |
| Attached player objects                                       | 10              |
| Player Variables                                              | 800             |
| Actors (since 0.3.7) (4)(5)                                   | 1000            |

## Server Properties

| Type                        | Limit                 |
| --------------------------- | --------------------- |
| Gamemodes                   | 16                    |
| Filterscripts               | 16                    |
| Text Input (Chat/Commands)  | 128 cells (512 bytes) |
| Text Output                 | 144 cells (576 bytes) |
| Name Length (SetPlayerName) | 24 characters         |

## Textdraws

| Type                                        | Limit               |
| ------------------------------------------- | ------------------- |
| String Length                               | 1024 characters (2) |
| Shown In A Single Client's Screen           | 2048 + 256 (3)      |
| Shown In A Single Client's Screen (sprites) | 100                 |
| Created Serverwise (Global)                 | 2048                |
| Created Serverwise (Per-Player)             | 256                 |

## Dialogs

| Type                                                         | Limit |
| ------------------------------------------------------------ | ----- |
| Dialog IDs                                                   | 32768 |
| Info (Main text)                                             | 4096  |
| Caption                                                      | 64    |
| Input Text Box (DIALOG_STYLE_INPUT/PASSWORD)                 | 128   |
| Tab List Columns (DIALOG_STYLE_TABLIST(\_HEADERS))           | 4     |
| Tab List Column Characters (DIALOG_STYLE_TABLIST(\_HEADERS)) | 128   |
| Tab List Row Characters (DIALOG_STYLE_TABLIST(\_HEADERS))    | 256   |
