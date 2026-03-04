---
title: GetVehicleLandingGearState
sidebar_label: GetVehicleLandingGearState
description: Obtém o estado atual do trem de pouso do veículo com base no último motorista.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o [estado do trem de pouso](../resources/landinggearstate) atual do veículo com base no último motorista.

## Parâmetros

| Name      | Description            |
| --------- | ---------------------- |
| vehicleid | O ID do veículo.       |

## Exemplos

```c
new LANDING_GEAR_STATE:state = GetVehicleLandingGearState(vehicleid);
```

## Funções Relacionadas

- [GetPlayerLandingGearState](GetPlayerLandingGearState): Obtém o estado do trem de pouso do veículo atual do jogador.

## Recursos Relacionados

- [Estados do Trem de Pouso de Veículo](../resources/landinggearstate)
