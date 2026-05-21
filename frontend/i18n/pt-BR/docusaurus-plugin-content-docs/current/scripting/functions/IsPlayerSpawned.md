---
title: IsPlayerSpawned
sidebar_label: IsPlayerSpawned
description: "Verifica se um jogador foi gerado."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se um jogador foi gerado.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

**true** - O jogador é gerado.

**false** - O jogador não é gerado.

## Exemplos

```c
public OnPlayerText(playerid, text[])
{
    if (!IsPlayerSpawned(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "ERROR: You must be spawned to send messages.");
        return 0;
    }
    return 1;
}
```
## Funções Relacionadas

- [SpawnPlayer](SpawnPlayer): (Re)gera um jogador.
