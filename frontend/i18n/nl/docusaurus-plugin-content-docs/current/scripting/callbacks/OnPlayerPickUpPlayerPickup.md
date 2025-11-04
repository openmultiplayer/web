---
title: OnPlayerPickUpPlayerPickup
sidebar_label: OnPlayerPickUpPlayerPickup
description: Deze callback wordt aangeroepen wanneer een speler een player-pickup oppakt die met CreatePlayerPickup is gemaakt.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een player-pickup oppakt die met [CreatePlayerPickup](../functions/CreatePlayerPickup) is gemaakt.

| Naam     | Beschrijving                                                                                 |
| -------- | ------------------------------------------------------------------------------------------- |
| playerid | Het ID van de speler die de player-pickup oppakte.                                          |
| pickupid | Het ID van de player-pickup, teruggegeven door [CreatePlayerPickup](../functions/CreatePlayerPickup) |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
new player_pickup_Cash[MAX_PLAYERS];
new player_pickup_Health[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    player_pickup_Cash[playerid] = CreatePlayerPickup(playerid, 1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    player_pickup_Health[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPlayerPickup(playerid, pickupid)
{
    if (pickupid == player_pickup_Cash[playerid])
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == player_pickup_Health[playerid])
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Wordt aangeroepen wanneer een player-pickup binnen de visuele range van de speler komt.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Wordt aangeroepen wanneer een player-pickup buiten de visuele range van de speler gaat.

## Gerelateerde Functies

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Maakt een pickup die zichtbaar is voor slechts één speler.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Vernietig een player-pickup.


