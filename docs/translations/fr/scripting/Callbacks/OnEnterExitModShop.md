---
title: OnEnterExitModShop
description: Cette callback est appelée quand un joueur entre / sort d'un modshop.
tags: [modshop, vehicle, véhicule, enterexit, interiorid, interior, intérieur, 0.3a]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Paramètres

Cette callback est appelée quand un joueur entre / sort d'un modshop.

| Nom              | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |    
| `int` playerid   | ID du joueur qui entre / sort du modshop                                            |
| `int` enterexit  | 1 si le joueur entre, 0 si le joueur sort                                           |
| `int` interiorid | ID de l'intérieur du modshop dans lequel le joueur est entré _(0 si le joueur sort) |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Si enterexit = 0, cela veut dire que les joueurs sortent
    {
        SendClientMessage(playerid, COLOR_WHITE, "Superbe voiture! Vous payez une redevance de 100$.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Notes

:::warning

Bug(s) connus : Les joueurs entrent en collision lorsqu'ils entrent dans le même magasin de mods

:::

## Fonctions connexes

- [AddVehicleComponent](../functions/AddVehicleComponent): Ajoute un composant à un véhicule.
