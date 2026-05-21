---
title: SetPlayerAdmin
sidebar_label: SetPlayerAdmin
description: "Define o jogador como administrador RCON."
tags: ["player", "rcon", "administration"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Define o jogador como administrador RCON.

| Nome | Descrição |
| ---------- | ------------------------------------------------------------------------ |
| playerid | O ID do jogador.                                                    |
| bool:admin | **true** para definir como administrador do RCON, **false** para remover do administrador do RCON. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/admin", true))
    {
        SetPlayerAdmin(playerid, true);
        SendClientMessage(playerid, -1, "SERVER: You are now RCON admin!");
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [IsPlayerAdmin](IsPlayerAdmin): Verifique se um jogador está logado como administrador RCON.

## Callbacks Relacionadas

- [OnRconLoginAttempt](OnRconLoginAttempt): Chamado quando é feita uma tentativa de login em RCON.
