---
title: HideVehicle
sidebar_label: HideVehicle
description: "Esconde um veículo do jogo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

:::warning

Esta função ainda não foi implementada.

:::

## Descrição

Esconde um veículo do jogo.

## Parâmetros

| Nome | Descrição |
| --------- | ------------------------------ |
| vehicleid | O ID do veículo a ser escondido. |

## Exemplos

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);
    HideVehicle(vehicleid);
    return 1;
}
```
## Funções Relacionadas

- [ShowVehicle](ShowVehicle): Mostra o veículo escondido.
- [IsVehicleHidden](IsVehicleHidden): Verifica se um veículo está oculto.
