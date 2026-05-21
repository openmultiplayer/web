---
title: GetObjectMovingTargetPos
sidebar_label: GetObjectMovingTargetPos
description: "Obtenha a posição alvo do movimento de um objeto."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a posição alvo do movimento de um objeto.

| Nome | Descrição |
| -------------- | ------------------------------------------------------------------------------- |
| objectid | O ID do objeto do qual obter a posição de destino da movimentação.                        |
| &Float:targetX | Uma variável flutuante na qual armazenar a coordenada targetX, passada por referência. |
| &Float:targetY | Uma variável flutuante na qual armazenar a coordenada targetY, passada por referência. |
| &Float:targetZ | Uma variável flutuante na qual armazenar a coordenada targetZ, passada por referência. |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

new
    Float:targetX,
    Float:targetY,
    Float:targetZ;

GetObjectMovingTargetPos(objectid, targetX, targetY, targetZ);
// alvoX = 1003,3915
// alvoY = -643,3342
// alvoZ = 114,5122
```
## Funções Relacionadas

- [GetObjectMovingTargetRot](GetObjectMovingTargetRot): Obtenha a rotação do alvo de movimentação de um objeto.
- [GetPlayerObjectMovingTargetPos](GetPlayerObjectMovingTargetPos): Obtenha a posição alvo do movimento de um objeto do jogador.
