---
title: OnPlayerExitedMenu
sidebar_label: OnPlayerExitedMenu
description: Callback appelée un joueur quitte un menu.
tags: ["player", "menu"]
---

## Paramètres

Callback appelée un joueur quitte un menu.

| Nom            | Description                     |
| -------------- | ------------------------------- |
| `int` playerid | ID du joueur qui quitte le menu |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // unfreeze le joueur quand il quitte le menu
    return 1;
}
```

## Callbacks connexes

Les Callbacks ci-dessous sont indirectement ou directement liées à cette Callback.

- [OnPlayerSelectedMenuRow](OnPlayerSelectedMenuRow): Appelée quand un joueur sélectionne une ligne d'un menu.

## Fonctions connexes

Les fonctions suivantes peuvent être utiles, car elles sont liées à ce rappel d'une manière ou d'une autre.

- [CreateMenu](../functions/CreateMenu): Créer un menu.
- [DestroyMenu](../functions/DestroyMenu): Détruit un menu.
