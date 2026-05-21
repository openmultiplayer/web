---
title: RemovePlayerAttachedObject
sidebar_label: RemovePlayerAttachedObject
description: "Remova um objeto anexado de um jogador."
tags: ["player", "object", "attachment"]
---


## Descrição

Remova um objeto anexado de um jogador.

| Nome | Descrição |
| -------- | ------------------------------------------------------------------------------------------------ |
| playerid | O ID do jogador do qual remover o objeto.                                                  |
| index | O índice do objeto a ser removido (definido com [SetPlayerAttachedObject](SetPlayerAttachedObject)). |

## Retornos

**1** em caso de sucesso, **0** em caso de falha.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strmp(cmdtext, "/remove", true)) // Remover objetos anexados
    {
        for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
        {
            if (IsPlayerAttachedObjectSlotUsed(playerid, i))
            {
                RemovePlayerAttachedObject(playerid, i);
            }
        }
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Anexa um objeto a um jogador
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Verifica se um objeto está anexado a um jogador em um índice especificado
