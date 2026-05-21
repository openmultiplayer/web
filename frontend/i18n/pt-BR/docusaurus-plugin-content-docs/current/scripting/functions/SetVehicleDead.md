---
title: SetVehicleDead
sidebar_label: SetVehicleDead
description: "Define o veículo para morto."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

## Descrição

Define o veículo para morto.

## Parâmetros

| Nome | Descrição |
| --------- | ------------------------------------ |
| vehicleid | O ID do veículo.               |
| bool:dead | **true**: morto - **false**: não morto |

## Exemplos

```c
SetVehicleDead(vehicleid, true);
```
## Funções Relacionadas

- [IsVehicleDead](IsVehicleDead): Verifique se um veículo está morto.
