---
title: SetVehicleOccupiedTick
sidebar_label: SetVehicleOccupiedTick
description: "Defina o tique ocupado de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

## Descrição

Defina o tique ocupado de um veículo.

## Parâmetros

| Nome | Descrição |
| --------- | ---------------------- |
| vehicleid | O ID do veículo. |
| ticks | Os ticks a serem definidos.      |

## Valores de retorno

**true** - Função executada com sucesso.

**false** - Falha na execução da função.

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    SetVehicleOccupiedTick(vehicleid, 300);
    return 1;
}
```
## Funções Relacionadas

- [GetVehicleOccupiedTick](GetVehicleOccupiedTick): Obtenha o tick ocupado de um veículo.
