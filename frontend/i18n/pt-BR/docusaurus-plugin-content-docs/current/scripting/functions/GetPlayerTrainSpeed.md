---
title: GetPlayerTrainSpeed
sidebar_label: GetPlayerTrainSpeed
description: Obtém a velocidade do trem do jogador.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtém a velocidade do trem do jogador.

## Parâmetros

| Name     | Description           |
| -------- | --------------------- |
| playerid | O ID do jogador.      |

## Exemplos

```c
new Float:speed = GetPlayerTrainSpeed(playerid);
SendClientMessage(playerid, 0xFFFF00FF, "A velocidade do seu trem: %f", speed);
```

## Funções Relacionadas

- [GetVehicleTrainSpeed](GetVehicleTrainSpeed): Obtém a velocidade do trem.
