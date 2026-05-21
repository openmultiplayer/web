---
title: SetObjectMoveSpeed
sidebar_label: SetObjectMoveSpeed
description: "Defina a velocidade de movimento de um objeto."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Defina a velocidade de movimento de um objeto.

| Nome | Descrição |
| ----------- | --------------------------------------------------------- |
| objectid | O ID do objeto para definir a velocidade de movimento.            |
| Float:speed | A velocidade na qual mover o objeto (unidades por segundo). |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

SetObjectMoveSpeed(objectid, 1.5);
// Velocidade de movimento alterada de 0.8 para 1.5
```
## Funções Relacionadas

- [MoveObject](MoveObject): Mova um objeto para uma nova posição com uma velocidade definida.
- [GetObjectMoveSpeed](GetObjectMoveSpeed): Obtenha a velocidade de movimento de um objeto.
- [SetPlayerObjectMoveSpeed](SetPlayerObjectMoveSpeed): Define a velocidade de movimento de um objeto do jogador.
