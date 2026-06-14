---
title: IsPlayerNPC
sidebar_label: IsPlayerNPC
description: "Verifique se um jogador é um jogador real ou um NPC."
tags: ["player", "npc"]
---


## Descrição

Verifique se um jogador é um jogador real ou um NPC.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

**true** – O jogador é um NPC.

**false** – O jogador não é um NPC.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerNPC(playerid))
    {
        SendClientMessageToAll(-1, "An NPC connected!");
        return 1;
    }

    // O restante do código aqui só será executado se for um jogador
}
```
## Funções Relacionadas

- [ConnectNPC](ConnectNPC): Conecte um NPC.
- [IsPlayerAdmin](IsPlayerAdmin): Verifica se um jogador está logado em RCON.
