---
title: IsPlayerAttachedObjectSlotUsed
sidebar_label: IsPlayerAttachedObjectSlotUsed
description: "Verifique se um jogador possui um objeto anexado no índice (slot) especificado."
tags: ["player", "object", "attachment"]
---


## Descrição

Verifique se um jogador possui um objeto anexado no índice (slot) especificado.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |
| index | O índice (slot) a ser verificado.     |

## Retornos

**true** - O slot especificado é usado para um objeto anexado.

**false** - O slot especificado não está em uso para um objeto anexado.

## Exemplos

```c
stock CountAttachedObjects(playerid)
{
    new count;
    for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
    {
        if (IsPlayerAttachedObjectSlotUsed(playerid, i))
        {
            count++;
        }
    }
    return count;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/count", true))
    {
        new string[32];
        format(string, sizeof(string), "Attached objects: %d", CountAttachedObjects(playerid));
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Anexa um objeto a um jogador
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remova um objeto anexado de um jogador
- [GetPlayerAttachedObject](GetPlayerAttachedObject): Obtém os dados do objeto de anexo do jogador por índice.
