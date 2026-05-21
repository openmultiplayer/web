---
title: Limits
sidebar_label: Limits
description: "Uma lista de todas as limitações impostas pelo jogo/servidor."
tags: []
---


## Entidades no jogo

| Tipo | Limite (0.3.7) |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| Players | 1000 |
| [Vehicles](../functions/CreateVehicle)<sup>(4)(6)</sup> | 2000 |
| [Vehicle Models](../functions/CreateVehicle)<sup>(1)</sup> | Ilimitado |
| [Objects](../functions/CreateObject)<sup>(4)(6)</sup> | 1000 |
| [Virtual Worlds](../functions/SetPlayerVirtualWorld) | 2.147.483.647 |
| [Interiors](../functions/SetPlayerInterior) | 256 |
| [Classes](../functions/AddPlayerClass) | 320 |
| [Map Icons](../functions/SetPlayerMapIcon)<sup>(4)</sup> | 100 |
| [Race Checkpoints](../functions/SetPlayerRaceCheckpoint)<sup>(4)</sup> | 1 |
| [Checkpoints](../functions/SetPlayerCheckpoint)<sup>(4)</sup> | 1 |
| [Pickups](../functions/CreatePickup)<sup>(4)</sup> | 4096 |
| [Global 3D Labels](../functions/Create3DTextLabel)<sup>(4)</sup> | 1024 |
| [Per-player 3D Text Labels](../functions/CreatePlayer3DTextLabel)<sup>(4)</sup> | 1024 |
| [Chat Bubble String](../functions/SetPlayerChatBubble) | 144 caracteres |
| [SetObjectMaterialText](../functions/SetObjectMaterialText), [SetPlayerObjectMaterialText](../functions/SetPlayerObjectMaterialText) Text length | 2.048 caracteres |
| [Gangzones](../functions/GangZoneCreate) | 1024 |
| [Per-player Gangzones](../functions/CreatePlayerGangZone) | 1024 |
| [Menus](../functions/CreateMenu) | 128 |
| [Attached player objects](../functions/SetPlayerAttachedObject) | 10 |
| [Player Variables](../functions/SetPVarInt) | 800 |
| [Server Variables (0.3.7 R2/omp)](../functions/SetSVarInt) | Ilimitado |
| [Actors](../functions/CreateActor) (since 0.3.7)<sup>(4)(5)</sup> | 1000 |
| [Explosions](../functions/CreateExplosion) | 10 |

## Propriedades do servidor - SA-MP / omp

| Tipo | Limite SA-MP (0.3.7) | op |
| --------------------------------------------------------- | --------------------- | --------------------- |
| Gamemodes | 16 | Ilimitado |
| Filterscripts | 16 | Ilimitado |
| Text Input (Chat/Commands) | 128 células (512 bytes) | 128 células (512 bytes) |
| Text Output | 144 células (576 bytes) | 128 células (512 bytes) |
| Name Length ([SetPlayerName](../functions/SetPlayerName)) | 24 caracteres | 24 caracteres |

## Textdraws

| Tipo | Limite (0.3.7) |
| ----------------------------------------------- | --------------- |
| String Length<sup>(2)</sup> | 1024 caracteres |
| Shown In A Single Client's Screen<sup>(3)</sup> | 2048 + 256 |
| Shown In A Single Client's Screen (sprites) | 100 |
| Created Serverwise (Global) | 2048 |
| Created Serverwise (Per-Player) | 256 |

## Diálogos

| Tipo | Limite (0.3.7) |
| ------------------------------------------------------------ | ------------- |
| Dialog IDs | 32768 |
| Info (Main text) | 4096 |
| Caption | 64 |
| Input Text Box (DIALOG_STYLE_INPUT/PASSWORD) | 128 |
| Tab List Columns (DIALOG_STYLE_TABLIST(\_HEADERS)) | 4 |
| Tab List Column Characters (DIALOG_STYLE_TABLIST(\_HEADERS)) | 128 |
| Tab List Row Characters (DIALOG_STYLE_TABLIST(\_HEADERS)) | 256 |

**Notas:**

1. Embora o limite de modelo de veículo em 0,3 seja ilimitado, se você usar uma grande quantidade de modelos de veículos, isso afetará o desempenho do cliente.
2. Embora o limite da string textdraw seja de 1.024 caracteres, se códigos de cores (por exemplo, `~r~`) forem usados ​​além do 255º caractere, o cliente poderá travar.
3. É possível mostrar todos os Textdraws ao mesmo tempo para um jogador, porém isso não é recomendado.
4. Para contornar esses limites, é possível utilizar um [streamer](https://github.com/samp-incognito/samp-streamer-plugin). Os streamers funcionam apenas criando entidades, etc., que estão próximas dos jogadores.
5. Devido a limitações do cliente, apenas até 51 atores podem ser exibidos por vez.
6. O veículo IDs começa em ID 1 e, portanto, varia de 1 a 1999, mesmo que MAX_VEHICLES seja 2000. Objetos e objetos de jogador também começam em ID 1.
