---
title: OnPlayerPickUpPickup
sidebar_label: OnPlayerPickUpPickup
description: Deze callback wordt aangeroepen wanneer een speler een pickup oppakt die gemaakt is met CreatePickup.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een pickup oppakt die gemaakt is met [CreatePickup](../functions/CreatePickup).

| Naam     | Beschrijving                                                                 |
| -------- | --------------------------------------------------------------------------- |
| playerid | Het ID van de speler die de pickup oppakte.                                 |
| pickupid | Het ID van de pickup, geretourneerd door [CreatePickup](../functions/CreatePickup) |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    pickup_Health = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
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

## Gerelateerde Callbacks

De volgende callbacks kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [OnPickupStreamIn](OnPickupStreamIn): Wordt aangeroepen wanneer een pickup het visuele bereik van een speler binnenkomt.
- [OnPickupStreamOut](OnPickupStreamOut): Wordt aangeroepen wanneer een pickup het visuele bereik van een speler verlaat.

## Gerelateerde Functies

De volgende functies kunnen nuttig zijn, omdat ze gerelateerd zijn aan deze callback.

- [CreatePickup](../functions/CreatePickup): Maak een pickup.
- [DestroyPickup](../functions/DestroyPickup): Vernietig een pickup.
