---
title: GetVehicleOccupiedTick
sidebar_label: GetVehicleOccupiedTick
description: "Obtenha o tick ocupado de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o tick ocupado de um veículo.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |

## Valores de retorno

Retorna o tick ocupado em milissegundos.

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new occupiedTick = GetVehicleOccupiedTick(vehicleid);
    printf("Vehicle ID %d occupied tick: %d ms", vehicleid, occupiedTick);
    return 1;
}
```
## Funções Relacionadas

- [SetVehicleOccupiedTick](SetVehicleOccupiedTick): Define o tick ocupado de um veículo.
