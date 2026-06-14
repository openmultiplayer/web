---
title: GetVehicleRespawnTick
sidebar_label: GetVehicleRespawnTick
description: "Obtenha o tick de reaparecimento de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o tick de reaparecimento de um veículo.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |

## Valores de retorno

Retorna o tick de reaparecimento em milissegundos.

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new respawnTick = GetVehicleRespawnTick(vehicleid);
    printf("Vehicle ID %d respawn tick: %d ms", vehicleid, respawnTick);
    return 1;
}
```
## Funções Relacionadas

- [SetVehicleRespawnTick](SetVehicleRespawnTick): Define o tick de reaparecimento de um veículo.
