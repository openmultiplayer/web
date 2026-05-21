---
title: StopPlayerHoldingObject
sidebar_label: StopPlayerHoldingObject
description: "Remove objetos anexados."
tags: ["player"]
---


## Descrição

Remove objetos anexados.

| Nome | Descrição |
| -------- | ---------------------------------------------------- |
| playerid | ID do jogador do qual você deseja remover o objeto. |

## Retornos

1 em sucesso, 0 em falha

## Exemplos

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerHoldingObject(playerid))
    {
        StopPlayerHoldingObject(playerid);
    }
    return 1;
}
```
## Notas

:::warning

Esta função foi removida em SA-MP 0.3c. Consulte [RemovePlayerAttachedObject](RemovePlayerAttachedObject)

:::

## Funções Relacionadas

- [SetPlayerHoldingObject](SetPlayerHoldingObject): Anexa um objeto a um osso.
