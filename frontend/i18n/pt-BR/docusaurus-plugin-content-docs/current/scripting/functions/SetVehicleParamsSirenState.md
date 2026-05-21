---
title: SetVehicleParamsSirenState
sidebar_label: SetVehicleParamsSirenState
description: "Ligue ou desligue a sirene de um veículo."
tags: ["vehicle"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Ligue ou desligue a sirene de um veículo.

## Parâmetros

| Nome | Descrição |
| ------------ | ----------------------------- |
| vehicleid | O ID do veículo.        |
| bool:enabled | **true**: Ligado - **false**: Desligado |

## Exemplos

```c
SetVehicleParamsSirenState(vehicleid, true);
```
## Funções Relacionadas

- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): Retorna o estado da sirene de um veículo (ligado/desligado).
- [GetVehicleSirenState](GetVehicleSirenState): Obtém o estado da sirene do veículo.
- [GetPlayerSirenState](GetPlayerSirenState): Obtém o estado da sirene do veículo do jogador.
