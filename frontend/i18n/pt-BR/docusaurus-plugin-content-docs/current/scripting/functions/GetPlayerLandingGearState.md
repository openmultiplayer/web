---
title: GetPlayerLandingGearState
sidebar_label: GetPlayerLandingGearState
description: Obtém o estado do trem de pouso do veículo atual do jogador.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém o [estado do trem de pouso](../resources/landinggearstate) do veículo atual do jogador.

## Parâmetros

| Name     | Description           |
| -------- | --------------------- |
| playerid | O ID do jogador.      |

## Exemplos

```c
new LANDING_GEAR_STATE:state = GetPlayerLandingGearState(playerid);
```

## Funções Relacionadas

- [GetVehicleLandingGearState](GetVehicleLandingGearState): Obtém o estado atual do trem de pouso do veículo com base no último motorista.

## Recursos Relacionados

- [Estados do Trem de Pouso de Veículo](../resources/landinggearstate)
