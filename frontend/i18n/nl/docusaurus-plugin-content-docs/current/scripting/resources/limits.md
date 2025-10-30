---
title: "Limieten"
sidebar_label: "Limieten"
description: Overzicht van limieten opgelegd door game/server.
tags: []
---

## In-game entiteiten

| Type                                                                                                                                            | Limiet (0.3.7)  |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Spelers                                                                                                                                         | 1000            |
| [Voertuigen](../functions/CreateVehicle)<sup>(4)(6)</sup>                                                                                       | 2000            |
| [Voertuigmodellen](../functions/CreateVehicle)<sup>(1)</sup>                                                                                    | Onbeperkt       |
| [Objecten](../functions/CreateObject)<sup>(4)(6)</sup>                                                                                           | 1000            |
| [Virtual Worlds](../functions/SetPlayerVirtualWorld)                                                                                            | 2,147,483,647   |
| [Interiors](../functions/SetPlayerInterior)                                                                                                     | 256             |
| [Classes](../functions/AddPlayerClass)                                                                                                          | 320             |
| [Map Icons](../functions/SetPlayerMapIcon)<sup>(4)</sup>                                                                                        | 100             |
| [Race Checkpoints](../functions/SetPlayerRaceCheckpoint)<sup>(4)</sup>                                                                          | 1               |
| [Checkpoints](../functions/SetPlayerCheckpoint)<sup>(4)</sup>                                                                                   | 1               |
| [Pickups](../functions/CreatePickup)<sup>(4)</sup>                                                                                              | 4096            |
| [Global 3D Labels](../functions/Create3DTextLabel)<sup>(4)</sup>                                                                                | 1024            |
| [Per-player 3D Text Labels](../functions/CreatePlayer3DTextLabel)<sup>(4)</sup>                                                                 | 1024            |
| [Chat Bubble String](../functions/SetPlayerChatBubble)                                                                                          | 144 tekens      |
| [SetObjectMaterialText](../functions/SetObjectMaterialText), [SetPlayerObjectMaterialText](../functions/SetPlayerObjectMaterialText) tekstlengte | 2048 tekens     |
| [Gangzones](../functions/GangZoneCreate)                                                                                                        | 1024            |
| [Per-player Gangzones](../functions/CreatePlayerGangZone)                                                                                       | 1024            |
| [Menu’s](../functions/CreateMenu)                                                                                                               | 128             |
| [Attached player objects](../functions/SetPlayerAttachedObject)                                                                                 | 10              |
| [Player Variables](../functions/SetPVarInt)                                                                                                     | 800             |
| [Server Variables (0.3.7 R2/omp)](../functions/SetSVarInt)                                                                                      | Onbeperkt       |
| [Actors](../functions/CreateActor) (sinds 0.3.7)<sup>(4)(5)</sup>                                                                               | 1000            |
| [Explosies](../functions/CreateExplosion)                                                                                                       | 10              |

## Servereigenschappen - SA-MP / omp

| Type                                                     | SA-MP Limiet (0.3.7)  | omp                   |
| -------------------------------------------------------- | --------------------- | --------------------- |
| Gamemodes                                                | 16                    | Onbeperkt             |
| Filterscripts                                            | 16                    | Onbeperkt             |
| Tekstinvoer (Chat/Commands)                              | 128 cells (512 bytes) | 128 cells (512 bytes) |
| Tekstuitvoer                                            | 144 cells (576 bytes) | 128 cells (512 bytes) |
| NaamLengte ([SetPlayerName](../functions/SetPlayerName)) | 24 tekens             | 24 tekens             |

## Textdraws

| Type                                           | Limiet (0.3.7)  |
| ---------------------------------------------- | --------------- |
| Stringlengte<sup>(2)</sup>                     | 1024 tekens     |
| Zichtbaar op één clientscherm<sup>(3)</sup>    | 2048 + 256      |
| Zichtbaar op één clientscherm (sprites)        | 100             |
| Aangemaakt server-breed (Global)               | 2048            |
| Aangemaakt server-breed (Per-Player)           | 256             |

## Dialogen

| Type                                                        | Limiet (0.3.7) |
| ----------------------------------------------------------- | ------------- |
| Dialog IDs                                                  | 32768         |
| Info (Hoofdtekst)                                           | 4096          |
| Caption                                                     | 64            |
| Invoerveld (DIALOG_STYLE_INPUT/PASSWORD)                    | 128           |
| Tablist-kolommen (DIALOG_STYLE_TABLIST(_HEADERS))           | 4             |
| Tablist-kolomtekens (DIALOG_STYLE_TABLIST(_HEADERS))        | 128           |
| Tablist-rijtekens (DIALOG_STYLE_TABLIST(_HEADERS))          | 256           |

**Notities:**

1. Veel voertuigmodellen kunnen clientperformance beïnvloeden.
2. Boven ~255 met kleurcodes kan de client crashen.
3. Alle textdraws tegelijk tonen kan, maar is niet aan te raden.
4. Gebruik een [streamer](https://github.com/samp-incognito/samp-streamer-plugin) om limieten te omzeilen (nabij speler creëren).
5. Door clientlimieten worden maximaal 51 actors tegelijk getoond.
6. Vehicle IDs starten op 1; object-IDs ook.


