---
title: GetPlayerSurfingOffsets
sidebar_label: GetPlayerSurfingOffsets
description: "Obtém as compensações de navegação de um jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém as compensações de navegação de um jogador.

| Nome | Descrição |
| -------------- | -------------------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                            |
| &Float:offsetX | Uma variável flutuante na qual armazenar a coordenada X de deslocamento, passada por referência. |
| &Float:offsetY | Uma variável flutuante na qual armazenar a coordenada Y do deslocamento, passada por referência. |
| &Float:offsetZ | Uma variável flutuante na qual armazenar a coordenada Z de deslocamento, passada por referência. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);
if (surfingVehicleId != INVALID_VEHICLE_ID)
{
    new
        Float:offsetX,
        Float:offsetY,
        Float:offsetZ;

    GetPlayerSurfingOffsets(playerid, offsetX, offsetY, offsetZ);

    SendClientMessage(playerid, -1, "offsetX = %.2f offsetY = %.2f offsetZ = %.2f", offsetX, offsetY, offsetZ);
}
```
## Funções Relacionadas

- [GetPlayerSurfingObjectID](GetPlayerSurfingObjectID): Obtém o ID do objeto em que o jogador está navegando.
- [GetPlayerSurfingVehicleID](GetPlayerSurfingVehicleID): Obtenha o ID do veículo que o jogador está navegando (preso no teto).
