---
title: OnPlayerPickupStreamIn
sidebar_label: OnPlayerPickupStreamIn
description: Deze callback wordt aangeroepen wanneer een player-pickup binnen de visuele range van de speler komt.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een player-pickup binnen de visuele range van de speler komt.

| Naam     | Beschrijving                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------- |
| pickupid | Het ID van de player-pickup, teruggegeven door [CreatePlayerPickup](../functions/CreatePlayerPickup) |
| playerid | Het ID van de speler voor wie de player-pickup wordt gestreamd.                                 |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
new g_PlayerPickupHealth[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPlayerPickupStreamIn(pickupid, playerid)
{
    if (pickupid == g_PlayerPickupHealth[playerid])
    {
        printf("g_PlayerPickupHealth is streamed in for player id %d", playerid);
    }
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): Wordt aangeroepen wanneer een speler een player-pickup oppakt.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Wordt aangeroepen wanneer een player-pickup buiten de visuele range van de speler gaat.

## Gerelateerde Functies

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Maakt een pickup die zichtbaar is voor slechts één speler.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Vernietig een player-pickup.


