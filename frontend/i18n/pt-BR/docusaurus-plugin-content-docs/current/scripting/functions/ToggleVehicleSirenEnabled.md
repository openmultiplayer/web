---
title: ToggleVehicleSirenEnabled
sidebar_label: ToggleVehicleSirenEnabled
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
ToggleVehicleSirenEnabled(vehicleid, true);
```
## Funções Relacionadas

- [GetVehicleSirenState](GetVehicleSirenState): Obtém o estado da sirene do veículo.
- [GetPlayerSirenState](GetPlayerSirenState): Obtém o estado da sirene do veículo do jogador.
