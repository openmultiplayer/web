---
title: SetPlayerObjectMoveSpeed
sidebar_label: SetPlayerObjectMoveSpeed
description: "Defina a velocidade de movimento de um objeto do jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Defina a velocidade de movimento de um objeto do jogador.

| Nome | Descrição |
| ----------- | --------------------------------------------------------- |
| playerid | O ID do jogador.                                     |
| objectid | O ID do objeto do jogador para definir a velocidade de movimento.     |
| Float:speed | A velocidade na qual mover o objeto (unidades por segundo). |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

SetPlayerObjectMoveSpeed(playerid, playerobjectid, 1.5);
// Velocidade de movimento alterada de 0.8 para 1.5
```
## Funções Relacionadas

- [MovePlayerObject](MovePlayerObject): Mova um objeto do jogador para uma nova posição com uma velocidade definida.
- [GetPlayerObjectMoveSpeed](GetPlayerObjectMoveSpeed): Obtenha a velocidade de movimento de um objeto do jogador.
- [SetObjectMoveSpeed](SetObjectMoveSpeed): Define a velocidade de movimento de um objeto.
