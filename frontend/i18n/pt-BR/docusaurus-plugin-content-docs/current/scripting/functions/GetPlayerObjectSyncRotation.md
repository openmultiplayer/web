---
title: GetPlayerObjectSyncRotation
sidebar_label: GetPlayerObjectSyncRotation
description: "Obtenha a rotação de sincronização de um objeto de jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a rotação de sincronização de um objeto de jogador.

| Nome | Descrição |
| -------- | ---------------------------- |
| playerid | O ID do jogador.        |
| objectid | O ID do objeto do jogador. |

## Retornos

Retorna a rotação de sincronização do objeto player como booleano (`true`/`false`).

## Exemplos

```c
new objectid = CreatePlayerObject(...);
new parentid = CreatePlayerObject(...);
AttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);

new bool:syncRotation = GetPlayerObjectSyncRotation(playerid, objectid);
// sincronizarRotation = verdadeiro
```
## Funções Relacionadas

- [AttachPlayerObjectToObject](AttachPlayerObjectToObject): Anexe objetos de jogador a outros objetos de jogador.
- [GetObjectSyncRotation](GetObjectSyncRotation): Obtenha a rotação sincronizada de um objeto.
