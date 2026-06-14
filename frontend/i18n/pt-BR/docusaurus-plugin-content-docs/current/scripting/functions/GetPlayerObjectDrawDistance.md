---
title: GetPlayerObjectDrawDistance
sidebar_label: GetPlayerObjectDrawDistance
description: "Obtenha a distância de visão de um objeto de jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a distância de visão de um objeto de jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------------- |
| playerid | O ID do jogador |
| objectid | O ID do objeto do jogador para obter a distância de visão de |

## Retornos

Retorna a distância de desenho como float.

## Exemplos

```c
new playerobjectid = CreatePlayerObject(playerid, 3335, 672.53485, -656.11023, 15.26560,  3.00000, 0.00000, 0.00000,  100.0);

new Float:drawDistance = GetPlayerObjectDrawDistance(playerid, playerobjectid);
// distância de desenho = 100,0
```
## Funções Relacionadas

- [GetObjectDrawDistance](GetObjectDrawDistance): Obtenha a distância de visão de um objeto.
