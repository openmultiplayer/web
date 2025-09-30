---
title: OnPickupStreamOut
sidebar_label: OnPickupStreamOut
description: Deze callback wordt aangeroepen wanneer een pickup het visuele bereik van een speler verlaat.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een pickup het visuele bereik van een speler verlaat.

| Naam     | Beschrijving                                                                 |
| -------- | --------------------------------------------------------------------------- |
| pickupid | Het ID van de pickup, geretourneerd door [CreatePickup](../functions/CreatePickup) |
| playerid | Het ID van de speler voor wie de pickup uit beeld gaat.                      |

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

public OnPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PickupHealth)
    {
        printf("g_PickupHealth is streamed out for player id %d", playerid);
    }
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup): Wordt aangeroepen wanneer een speler een pickup oppakt.
- [OnPickupStreamIn](OnPickupStreamIn): Wordt aangeroepen wanneer een pickup in beeld komt.

## Gerelateerde Functies

- [CreatePickup](../functions/CreatePickup): Maak een pickup.
- [DestroyPickup](../functions/DestroyPickup): Vernietig een pickup.
