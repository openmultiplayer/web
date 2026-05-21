---
title: GetObjectSyncRotation
sidebar_label: GetObjectSyncRotation
description: "Obtenha a rotação sincronizada de um objeto."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a rotação sincronizada de um objeto.

| Nome | Descrição |
| -------- | --------------------- |
| objectid | O ID do objeto. |

## Retornos

Retorna a rotação sincronizada do objeto como booleano (`true`/`false`).

## Exemplos

```c
new objectid = CreateObject(...);
new parentid = CreateObject(...);
AttachObjectToObject(objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, false);

new bool:syncRotation = GetObjectSyncRotation(objectid);
// sincronizaçãoRotation = falso
```
## Funções Relacionadas

- [AttachObjectToObject](AttachObjectToObject): Anexar objeto a outro objeto.
- [GetPlayerObjectSyncRotation](GetPlayerObjectSyncRotation): Obtenha a rotação sincronizada de um objeto de jogador.
