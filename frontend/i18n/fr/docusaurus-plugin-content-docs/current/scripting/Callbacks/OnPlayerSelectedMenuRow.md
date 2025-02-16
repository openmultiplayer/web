---
title: OnPlayerSelectedMenuRow
sidebar_label: OnPlayerSelectedMenuRow
description: Cette callback est appelée lorsqu'un joueur sélectionne un article depuis un menu (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Paramètres

Cette callback est appelée lorsqu'un joueur sélectionne un article depuis un menu [(ShowMenuForPlayer)](../functions/ShowMenuForPlayer).

| Nom            | Description                                                          |
| -------------- | -------------------------------------------------------------------- |
| `int` playerid | L'ID du joueur qui a sélectionné le menu.                            |
| `int` row      | 	L'ID de la ligne qui a été sélectionnée. La première ligne = **0**. |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("Menu 1", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "Item 1");
    AddMenuItem(MyMenu, 0, "Item 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch(row)
        {
            case 0: print("Item 1 sélectionné");
            case 1: print("Item 2 sélectionné");
        }
    }
    return 1;
}
```

## Astuces

:::tip


L'ID du menu choisi n'est pas un paramètre de cette callback. GetPlayerMenu doit être utilisé pour déterminer quel menu le joueur a-t-il sélectionné.

:::

## Fonctions connexes

- [CreateMenu](../functions/CreateMenu): Créer un menu.
- [DestroyMenu](../functions/DestroyMenu): Détruit un menu.
- [AddMenuItem](../functions/AddMenuItem): Ajoute un item dans un menu spécifique.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): Montre un menu pour un joueur.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): Cache un menu pour un joueur.
