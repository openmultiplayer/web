---
title: SetVehicleBeenOccupied
sidebar_label: SetVehicleBeenOccupied
description: "Define a ocupação do veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

## Descrição

Define a ocupação do veículo.

## Parâmetros

| Nome | Descrição |
| ------------- | -------------------------------------------- |
| vehicleid | O ID do veículo.                       |
| bool:occupied | **true**: ocupado - **false**: não ocupado |

## Exemplos

```c
SetVehicleBeenOccupied(vehicleid, true);
```
## Funções Relacionadas

- [HasVehicleBeenOccupied](HasVehicleBeenOccupied): Verifica se um veículo está ocupado.
