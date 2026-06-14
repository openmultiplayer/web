---
title: GetPlayer3DTextLabelAttachedData
sidebar_label: GetPlayer3DTextLabelAttachedData
description: "Obtém os dados anexados ao rótulo de texto 3D do jogador."
tags: ["player", "3dtextlabel"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém os dados anexados ao rótulo de texto 3D do jogador.

| Nome | Descrição |
| ------------------- | ------------------------------------------------------------------------ |
| playerid | O ID do jogador.                                                    |
| PlayerText3D:textid | O ID da etiqueta de texto 3D do jogador para obter os dados anexados.        |
| &parentPlayerid | Uma variável na qual armazenar o parentPlayerid, passado por referência.  |
| &parentVehicleid | Uma variável na qual armazenar o parentVehicleid, passado por referência. |

## Exemplos

Um exemplo para **parentPlayerid**:

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new attachedplayer = 37; // Anexar ao ID do jogador 37

new parentPlayerid;
new parentVehicleid;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0, attachedplayer, INVALID_VEHICLE_ID);

GetPlayer3DTextLabelAttachedData(playerid, playerTextId, parentPlayerid, parentVehicleid);
// O `parentPlayerid` será '37'
```
Um exemplo para **parentVehicleid**:

```c
new PlayerText3D:gVehicle3dText[MAX_VEHICLES];
new gVehicleId;

new parentPlayerid;
new parentVehicleid;

gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);
gVehicle3dText[gVehicleId] = CreatePlayer3DTextLabel(playerid, "Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, INVALID_PLAYER_ID, gVehicleId);

GetPlayer3DTextLabelAttachedData(playerid, gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);
// O `parentVehicleid` será o valor de 'gVehicleId'
```
## Funções Relacionadas

- [Get3DTextLabelAttachedData](Get3DTextLabelAttachedData): Obtém os dados anexados da etiqueta de texto 3D.
