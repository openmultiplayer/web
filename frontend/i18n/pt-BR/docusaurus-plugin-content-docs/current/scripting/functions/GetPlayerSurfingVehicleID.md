---
title: GetPlayerSurfingVehicleID
sidebar_label: GetPlayerSurfingVehicleID
description: "Obtenha o ID do veículo que o jogador está navegando (preso no teto)."
tags: ["player", "vehicle"]
---


## Descrição

Obtenha o ID do veículo que o jogador está navegando (preso no teto).

| Nome | Descrição |
| -------- | ---------------------------------------------------------------- |
| playerid | O ID do jogador que você deseja conhecer o veículo de surf ID. |

## Retornos

O ID do veículo que o jogador está navegando. Se eles não estiverem navegando em um veículo ou se o veículo em que estão navegando não tiver motorista, `INVALID_VEHICLE_ID`.

Se o jogador especificado não estiver conectado, `INVALID_VEHICLE_ID` também.

## Exemplos

```c
new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);
if (surfingVehicleId == INVALID_VEHICLE_ID)
{
	SendClientMessage(playerid, COLOR_RED, "You are not surfing.");
}
```
## Funções Relacionadas

- [GetPlayerVehicleID](GetPlayerVehicleID): Obtenha o ID do veículo em que o jogador está.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Verifique em que lugar o jogador está.
- [GetPlayerSurfingObjectID](GetPlayerSurfingObjectID): Obtém o ID do objeto em que o jogador está navegando.
- [GetPlayerSurfingOffsets](GetPlayerSurfingOffsets): Obtém as compensações de surf de um jogador.
