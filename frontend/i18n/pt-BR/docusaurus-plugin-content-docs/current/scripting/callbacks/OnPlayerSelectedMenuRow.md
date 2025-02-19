---
title: OnPlayerSelectedMenuRow
sidebar_label: OnPlayerSelectedMenuRow
description: Esta callback é chamada quano um jogador seleciona um item de um menu (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Descrição

Esta callback é chamada quano um jogador seleciona um item de um menu (ShowMenuForPlayer).

| Nome     | Descrição                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | O ID do jogador que selecionou um item de um menu           |
| row      | O ID da linha que o jogador selecionou, sendo a primeira o ID 0. |

## Retorno

Sempre é chamada primeiro na Gamemode.

## Exemplo

```c
new Menu:MeuMenu;

public OnGameModeInit()
{
    MeuMenu = CreateMenu("Menu Exemplo", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MeuMenu, 0, "Item 1");
    AddMenuItem(MeuMenu, 0, "Item 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MeuMenu)
    {
        switch(row)
        {
            case 0: print("Item 1 Selecionado");
            case 1: print("Item 2 Selecionado");
        }
    }
    return 1;
}
```

## Notas

:::tip

O ID do menu não é passado através da callback, portanto, GetPlayerMenu deve ser utilizado para determinar em qual menu o jogador selecionou o item.

:::

## Funções Relacionadas

- [CreateMenu](../functions/CreateMenu): Cria um menu.
- [DestroyMenu](../functions/DestroyMenu): Destrói um menu.
- [AddMenuItem](../functions/AddMenuItem): Adiciona um item a um menu em específico.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): Mostra o menu para algum jogador.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): Esconde o menu para algum jogador.
