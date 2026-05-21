---
title: SendChat
sidebar_label: SendChat
description: "Isso enviará um texto ao jogador pelo bot, assim como usar SendPlayerMessageToAll, mas esta função deve ser usada dentro dos scripts NPC."
tags: []
---


:::warning

Esta função está obsoleta. Consulte [SendPlayerMessageToAll](SendPlayerMessageToAll).

:::

## Descrição

Isso enviará um texto ao jogador pelo bot, assim como usar [SendPlayerMessageToAll](SendPlayerMessageToAll), mas esta função deve ser usada dentro dos scripts NPC.

| Nome | Descrição |
| ----- | ------------------------------- |
| msg[] | O texto a ser enviado pelo NPC. |

## Exemplos

```c
public OnPlayerDeath(playerid)
{
    new string[80], name[MAX_PLAYER_NAME];
    GetPlayerName(playerid, name, sizeof(name));
    format(string, sizeof(string), "Oh no %s! I didn't want you to die that way!", name);
    SendChat(string);
    return 1;
}
```
## Funções Relacionadas

- [SendCommand](SendCommand): Envia um comando como NPC.
