---
title: GetVehicleLastDriver
sidebar_label: GetVehicleLastDriver
description: "Obtenha o último motorista de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o último motorista de um veículo.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |

## Valores de retorno

Retorna o último driver ID (jogador ID).

`INVALID_PLAYER_ID` - O veículo não possui último condutor.

## Exemplos

```c
new g_Vehicle;

public OnGameModeInit()
{
    g_Vehicle = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);
}

public OnGameModeExit()
{
    new lastDriver = GetVehicleLastDriver(g_Vehicle);
    if (lastDriver != INVALID_PLAYER_ID)
    {
        printf("Vehicle ID %d last driver: %d", g_Vehicle, lastDriver);
    }
    else
    {
        printf("Vehicle ID %d has no last driver.", g_Vehicle);
    }
}
```
## Funções Relacionadas

- [GetVehicleDriver](GetVehicleDriver): Obtenha o playerid da pessoa que dirige o veículo.
