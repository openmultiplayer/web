---
title: GetObjectModel
sidebar_label: GetObjectModel
description: Obtém o ID do modelo de um objeto (CreateObject).
tags: []
---

Esta função foi implementada no SA-MP 0.3.7 e não funcionará em versões anteriores.

## Descrição

Obtém o ID do modelo de um objeto (CreateObject).

| Nome     | Descrição                                     |
| -------- | --------------------------------------------- |
| objectid | O ID do objeto do qual deseja obter o modelo. |

## Retorno

O modelo ID do objeto. -1 se o objeto não existir.

## Exemplos

```c
new objectid = CreateObject(1234, 0, 0, 0, 0, 0, 0);
new modelid = GetObjectModel(objectid);
```

## Funções Relacionadas

- [GetPlayerObjectModel](GetPlayerObjectModel): Obtém o modelo ID de um objeto de jogador (player-object).
