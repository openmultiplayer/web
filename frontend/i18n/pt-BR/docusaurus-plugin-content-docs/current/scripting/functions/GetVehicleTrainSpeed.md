---
title: GetVehicleTrainSpeed
sidebar_label: GetVehicleTrainSpeed
description: Obtém a velocidade do trem.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a velocidade do trem.

## Parâmetros

| Name      | Description            |
| --------- | ---------------------- |
| vehicleid | O ID do veículo.       |

## Exemplos

```c
new vehicleid = GetPlayerVehicleID(playerid);

new Float:speed = GetVehicleTrainSpeed(vehicleid);
```

## Funções Relacionadas

- [GetPlayerTrainSpeed](GetPlayerTrainSpeed): Obtém a velocidade do trem do jogador.
