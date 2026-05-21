---
title: GetPlayerObjectMovingTargetPos
sidebar_label: GetPlayerObjectMovingTargetPos
description: "Obtenha a posição alvo do movimento de um objeto do jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a posição alvo do movimento de um objeto do jogador.

| Nome | Descrição |
| -------------- | ------------------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                           |
| objectid | O ID do objeto do jogador do qual obter a posição do alvo do movimento.                 |
| &Float:targetX | Uma variável flutuante na qual armazenar a coordenada targetX, passada por referência. |
| &Float:targetY | Uma variável flutuante na qual armazenar a coordenada targetY, passada por referência. |
| &Float:targetZ | Uma variável flutuante na qual armazenar a coordenada targetZ, passada por referência. |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

new
    Float:targetX,
    Float:targetY,
    Float:targetZ;

GetPlayerObjectMovingTargetPos(playerid, playerobjectid, targetX, targetY, targetZ);
// alvoX = 1003,3915
// alvoY = -643,3342
// alvoZ = 114,5122
```
## Funções Relacionadas

- [GetPlayerObjectMovingTargetRot](GetPlayerObjectMovingTargetRot): Obtenha a rotação do alvo de movimento de um objeto do jogador.
- [GetObjectMovingTargetPos](GetObjectMovingTargetPos): Obtenha a posição de destino de movimento de um objeto.
