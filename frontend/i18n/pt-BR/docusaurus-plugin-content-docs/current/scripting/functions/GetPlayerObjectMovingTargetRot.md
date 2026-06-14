---
title: GetPlayerObjectMovingTargetRot
sidebar_label: GetPlayerObjectMovingTargetRot
description: "Obtenha a rotação do alvo do movimento de um objeto do jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a rotação do alvo do movimento de um objeto do jogador.

| Nome | Descrição |
| ---------------- | --------------------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                             |
| objectid | O ID do objeto do jogador do qual obter a rotação do alvo de movimento.                   |
| &Float:rotationX | Uma variável flutuante na qual armazenar a coordenada rotaçãoX, passada por referência. |
| &Float:rotationY | Uma variável flutuante na qual armazenar a coordenada de rotaçãoY, passada por referência. |
| &Float:rotationZ | Uma variável flutuante na qual armazenar a coordenada rotaçãoZ, passada por referência. |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
new playerobjectid = CreatePlayerObject(playerid, 968, 1023.79541, -943.75879, 42.31450,   0.00000, 0.00000, 10.00000);
MovePlayerObject(playerid, playerobjectid, 1023.79541, -943.75879, 42.31450,  0.8,   0.00000, -90.00000, 10.00000);

new
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetPlayerObjectMovingTargetRot(playerid, playerobjectid, rotationX, rotationY, rotationZ);
// rotaçãoX = 0,00000
// rotaçãoY = -90,00000
// rotaçãoZ = 10,00000
```
## Funções Relacionadas

- [GetPlayerObjectMovingTargetPos](GetPlayerObjectMovingTargetPos): Obtenha a posição alvo do movimento de um objeto do jogador.
- [GetObjectMovingTargetRot](GetObjectMovingTargetRot): Obtenha a rotação do alvo de movimentação de um objeto.
