---
title: GetVehicleDriver
sidebar_label: GetVehicleDriver
description: "Obtenha o playerid da pessoa que dirige o veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o playerid da pessoa que dirige o veículo.

## Parâmetros

| Nome | Descrição |
| --------- | ------------------------------------------- |
| vehicleid | O ID do veículo cujo motorista deseja obter. |

## Retornos

Retorna o driver ID (jogador ID).

`INVALID_PLAYER_ID` - O veículo não possui condutor.

## Exemplos

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new driverid = GetVehicleDriver(vehicleid);
    if (driverid != INVALID_PLAYER_ID)
    {
        SendClientMessage(driverid, -1, "Someone is exiting your vehicle.");
    }
    return 1;
}
```
## Funções Relacionadas

- [GetVehicleLastDriver](GetVehicleLastDriver): Obtenha o último motorista de um veículo.
