---
title: OnPlayerPickUpPickup
description: Pozvano kada igrač pokupi pickup kreiran funkcijom CreatePickup.
tags: ["player"]
---

## Deskripcija

Pozvano kada igrač pokupi pickup kreiran funkcijom CreatePickup.

| Ime      | Deskripcija                                      |
| -------- | ------------------------------------------------ |
| playerid | ID igrača koji je pokupio pickup.                |
| pickupid | ID pickup-a, return-ovan od strane CreatePickup. |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

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

## Srodne Funkcije

- [CreatePickup](../functions/CreatePickup): Kreiraj pickup.
- [DestroyPickup](../functions/DestroyPickup): Uništi pickup.
