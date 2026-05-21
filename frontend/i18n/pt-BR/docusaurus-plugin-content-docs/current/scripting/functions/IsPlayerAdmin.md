---
title: IsPlayerAdmin
sidebar_label: IsPlayerAdmin
description: "Verifique se um jogador está logado como administrador RCON."
tags: ["player", "rcon", "administration"]
---


## Descrição

Verifique se um jogador está logado como administrador RCON.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

**true** – O jogador é um administrador RCON.

**false** - O jogador não é um administrador RCON.

## Exemplos

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerAdmin(playerid))
    {
        SendClientMessageToAll(0xDEEE20FF, "An admin spawned.");
    }
    return 1;
}
```
## Funções Relacionadas

- [SetPlayerAdmin](SetPlayerAdmin): Define o jogador como administrador RCON.
- [SendRconCommand](SendRconCommand): Envia um comando RCON por meio do script.

## Callbacks Relacionadas

- [OnRconLoginAttempt](../callbacks/OnRconLoginAttempt): Chamado quando é feita uma tentativa de login em RCON.
