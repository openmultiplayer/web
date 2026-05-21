---
title: GetObjectMoveSpeed
sidebar_label: GetObjectMoveSpeed
description: "Obtenha a velocidade de movimento de um objeto."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a velocidade de movimento de um objeto.

| Nome | Descrição |
| -------- | ---------------------------------------------- |
| objectid | O ID do objeto do qual obter a velocidade de movimento. |

## Retornos

Retorna a velocidade de movimento como float.

## Exemplos

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

new Float:moveSpeed = GetObjectMoveSpeed(objectid);
// velocidade de movimento = 0,8
```
## Funções Relacionadas

- [MoveObject](MoveObject): Mova um objeto para uma nova posição com uma velocidade definida.
- [SetObjectMoveSpeed](SetObjectMoveSpeed): Define a velocidade de movimento de um objeto.
- [GetPlayerObjectMoveSpeed](GetPlayerObjectMoveSpeed): Obtenha a velocidade de movimento de um objeto do jogador.
