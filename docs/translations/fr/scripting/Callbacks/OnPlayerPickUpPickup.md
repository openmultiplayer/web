---
title: OnPlayerPickUpPickup
description: Appelée lorsqu'un joueur prend un pickup crée via CreatePickup.
tags: ["player"]
---

## Paramètres

Appelée lorsqu'un joueur prend un pickup crée via CreatePickup.

| Nom     | Description                                 |
| -------- | ------------------------------------------ |
| `int` playerid | L'ID du joueur qui a prit le pickup. |
| `int` pickupid | L'ID du pickup que le joueur a prit. |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 0.0, 0.0, 9.0);
    pickup_Health = CreatePickup(1240, 2, 0.0, 0.0, 9.0);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Fonctions connexes

- [CreatePickup](../functions/CreatePickup): Créer un pickup.
- [DestroyPickup](../functions/DestroyPickup): Détruit un pickup.
