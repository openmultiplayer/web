---
title: GetPlayerGhostMode
sidebar_label: GetPlayerGhostMode
description: "Obtenha o modo fantasma do jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o modo fantasma do jogador.

| Nome | Descrição |
| -------- | ---------------------------------------------- |
| playerid | O ID do jogador para obter o modo fantasma. |

## Retornos

**true** - O modo fantasma está ativado.

**false** - O modo fantasma está desativado.

## Exemplos

```c
new string[64];
format(string, sizeof(string), "Your ghost mode is %s", GetPlayerGhostMode(playerid) == true ? "enable" : "disable");
SendClientMessage(playerid, -1, string);
```
## Funções Relacionadas

- [TogglePlayerGhostMode](TogglePlayerGhostMode): Alterna o modo fantasma do jogador.
