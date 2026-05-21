---
title: GetVehicleRespawnDelay
sidebar_label: GetVehicleRespawnDelay
description: "Obtenha o atraso de reaparecimento de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o atraso de reaparecimento de um veículo.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new respawnDelay = GetVehicleRespawnDelay(vehicleid);
    // atraso de reaparecimento = 60
    return 1;
}
```
## Funções Relacionadas

- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): Define o atraso de reaparecimento de um veículo.
