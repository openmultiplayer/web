---
title: OnPlayerPickUpPlayerPickup
description: Ce rappel est appelé lorsqu'un joueur ramasse un objet joueur-pickup créé avec CreatePlayerPickup.
tags: ["player", "pickup", "playerpickup"]
---

## Description

Ce rappel est appelé lorsqu'un joueur ramasse un objet joueur-pickup créé avec [CreatePlayerPickup](../functions/CreatePlayerPickup).

| Nom       | Description                                                                                    |
|----------|------------------------------------------------------------------------------------------------|
| playerid | L'ID du joueur qui a ramassé l'objet joueur-pickup.                                          |
| pickupid | L'ID de l'objet joueur-pickup, retourné par [CreatePlayerPickup](../functions/CreatePlayerPickup) |

## Retours

Il est toujours appelé en premier dans le gamemode.

## Exemples

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

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): Appelé lorsque qu'un objet joueur-pickup entre dans la portée visuelle du joueur.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Appelé lorsque qu'un objet joueur-pickup quitte la portée visuelle du joueur.

## Fonctions Relatives

Les fonctions suivantes peuvent être utiles, car elles sont liées à ce rappel d'une manière ou d'une autre.

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Crée un objet joueur-pickup qui sera visible pour un seul joueur.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Destroy a player-pickup.
