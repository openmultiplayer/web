---
title: OnPlayerPickUpPickup
description: Apelat atunci când un jucător preia un pick-up creat cu CreatePickup.
tags: ["player"]
---

## Descriere

Apelat atunci când un jucător preia un pick-up creat cu CreatePickup.

| Nume     | Descriere                                       |
| -------- | ----------------------------------------------- |
| playerid | ID-ul jucătorului care a ridicat pickup-ul.     |
| pickupid | ID-ul ridicării, returnat de CreatePickup.      |

## Returnări

Este întotdeauna numit primul în modul de joc.

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

## Funcții similare

- [CreatePickup](../functions/CreatePickup): Creați o ridicare.
- [DestroyPickup](../functions/DestroyPickup): Distrugeți un pickup.