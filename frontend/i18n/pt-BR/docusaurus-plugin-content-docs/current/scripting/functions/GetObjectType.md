---
title: GetObjectType
sidebar_label: GetObjectType
description: "Obtenha o tipo de um objeto. (global ou jogador)"
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o tipo de um objeto. (global ou jogador)

| Nome | Descrição |
| -------- | ---------------------------------------- |
| playerid | O ID do jogador.                    |
| objectid | O ID do objeto do qual obter o tipo. |

## Retornos

`0` - Falha na execução da função. O objectid ou playerid especificado não existe.

`1` - Objeto global.

`2` - Objeto de jogador.

## Exemplos

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);

new objectType = GetObjectType(playerid, objectid);
// objectType = 1
```
Outro exemplo:

```c
new playerobjectid = CreatePlayerObject(playerid, 19174, 978.88757, -986.34918, 40.95220,   0.00000, 0.00000, 228.00000);

new objectType = GetObjectType(playerid, playerobjectid);
// objectType = 2
```
## Funções Relacionadas

- [CreateObject](CreateObject): Crie um objeto.
- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
