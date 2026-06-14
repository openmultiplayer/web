---
title: SetVehicleRespawnDelay
sidebar_label: SetVehicleRespawnDelay
description: "Defina o atraso de reaparecimento de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Defina o atraso de reaparecimento de um veículo.

## Parâmetros

| Nome | Descrição |
| ------------ | -------------------------------------- |
| vehicleid | O ID do veículo.                 |
| respawnDelay | O atraso de reaparecimento (em segundos) a ser definido. |

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    SetVehicleRespawnDelay(vehicleid, 120);
    return 1;
}
```
## Funções Relacionadas

- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): Obtenha o atraso de reaparecimento de um veículo.
