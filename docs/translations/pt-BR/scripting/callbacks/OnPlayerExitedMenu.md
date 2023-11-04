---
title: OnPlayerExitedMenu
description: Chamado quando um jogador sai se um menu.
tags: ["player", "menu"]
---

## Descrição

Chamado quando um jogador sai se um menu.

| Nome     | Descrição                        |
| -------- | -------------------------------- |
| playerid | O ID do jogador que saiu do menu |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // Descongela o jogador quando ele sai do menu
    return 1;
}
```

## Funções Relacionadas

- [CreateMenu](../functions/CreateMenu): Cria um Menu.
- [DestroyMenu](../functions/DestroyMenu): Destroi um Menu.
