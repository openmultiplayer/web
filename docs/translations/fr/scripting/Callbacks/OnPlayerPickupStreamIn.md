---
title: OnPlayerPickupStreamIn
description: Ce rappel est appelé lorsque qu'un objet joueur-pickup entre dans la portée visuelle du joueur.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Ce rappel est appelé lorsque qu'un objet joueur-pickup entre dans la portée visuelle du joueur.

| Nom       | Description                                                                                    |
|----------|------------------------------------------------------------------------------------------------|
| pickupid | L'ID de l'objet joueur-pickup, retourné par [CreatePlayerPickup](../functions/CreatePlayerPickup) |
| playerid | L'ID du joueur dans la portée visuelle duquel l'objet joueur-pickup entre.                     |

## Retours

Il est toujours appelé en premier dans le gamemode.

## Exemples

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
        printf("g_PlayerPickupHealth est diffusé pour l'ID du joueur %d", playerid);
    }
    return 1;
}
```

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): Appelé lorsque qu'un joueur ramasse un objet joueur-pickup.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): Appelé lorsque qu'un objet joueur-pickup quitte la portée visuelle du joueur.

## Fonctions Relatives

Les fonctions suivantes peuvent être utiles, car elles sont liées à ce rappel d'une manière ou d'une autre.

- [CreatePlayerPickup](../functions/CreatePlayerPickup): Crée un objet joueur-pickup qui sera visible pour un seul joueur.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): Détruit un objet joueur-pickup.
