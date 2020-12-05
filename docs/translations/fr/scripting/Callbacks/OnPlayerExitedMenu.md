---
title: OnPlayerExitedMenu
description: Callback appelée un joueur quitte un menu.
tags: ["player", "menu"]
---

## Paramètres

Callback appelée un joueur quitte un menu.

| Nom            | Description                               |
| -------------- | ----------------------------------------- |
| `int` playerid | ID du joueur qui quitte le menu           |

## Valeur de retour

Cette callback est toujours appelée en premier dans le gamemode.

## Exemple

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // unfreeze le joueur quand il quitte le menu
    return 1;
}
```

## Fonctions connexes

- [CreateMenu](../functions/CreateMenu): Créer un menu.
- [DestroyMenu](../functions/DestroyMenu): Détruit un menu.
