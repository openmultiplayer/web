---
title: OnPickupStreamIn
sidebar_label: OnPickupStreamIn
description: Deze callback wordt aangeroepen wanneer een pickup het visuele bereik van een speler binnenkomt.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een pickup het visuele bereik van een speler binnenkomt.

| Naam     | Beschrijving                                                                 |
| -------- | --------------------------------------------------------------------------- |
| pickupid | Het ID van de pickup, geretourneerd door [CreatePickup](../functions/CreatePickup) |
| playerid | Het ID van de speler voor wie de pickup in beeld komt.                       |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
new g_PickupHealth;

public OnGameModeInit()
{
    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPickupStreamIn(pickupid, playerid)
{
    if (pickupid == g_PickupHealth)
    {
        printf("g_PickupHealth is streamed in for player id %d", playerid);
    }
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup): Wordt aangeroepen wanneer een speler een pickup oppakt.
- [OnPickupStreamOut](OnPickupStreamOut): Wordt aangeroepen wanneer een pickup het visuele bereik verlaat.

## Gerelateerde Functies

- [CreatePickup](../functions/CreatePickup): Maak een pickup.
- [DestroyPickup](../functions/DestroyPickup): Vernietig een pickup.
