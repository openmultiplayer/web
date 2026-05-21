---
title: TogglePlayerGhostMode
sidebar_label: TogglePlayerGhostMode
description: "Alternar o modo fantasma do jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Alternar o modo fantasma do jogador.
O modo fantasma desativa a colisão entre modelos de jogadores.

| Nome | Descrição |
| ----------- | ---------------------------------------------- |
| playerid | O ID do jogador para alternar o modo fantasma. |
| bool:toggle | true para ativar e false para desativar.         |

## Retornos

Esta função sempre retorna true.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ghostmode", true))
    {
        TogglePlayerGhostMode(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You enabled the ghost mode!");
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [GetPlayerGhostMode](GetPlayerGhostMode): Obtenha o modo fantasma do jogador.
