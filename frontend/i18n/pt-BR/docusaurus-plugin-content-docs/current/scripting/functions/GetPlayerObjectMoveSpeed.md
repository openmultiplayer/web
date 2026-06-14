---
title: GetPlayerObjectMoveSpeed
sidebar_label: GetPlayerObjectMoveSpeed
description: "Obtenha a velocidade de movimento de um objeto do jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a velocidade de movimento de um objeto do jogador.

| Nome | Descrição |
| -------- | ----------------------------------------------------- |
| playerid | O ID do jogador.                                 |
| objectid | O ID do objeto do jogador do qual obter a velocidade de movimento. |

## Retornos

Retorna a velocidade de movimento como float.

## Exemplos

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

new Float:moveSpeed = GetPlayerObjectMoveSpeed(playerid, playerobjectid);
// velocidade de movimento = 0,8
```
## Funções Relacionadas

- [MovePlayerObject](MovePlayerObject): Mova um objeto do jogador para uma nova posição com uma velocidade definida.
- [SetPlayerObjectMoveSpeed](SetPlayerObjectMoveSpeed): Define a velocidade de movimento de um objeto do jogador.
- [GetObjectMoveSpeed](GetObjectMoveSpeed): Obtenha a velocidade de movimento de um objeto.
