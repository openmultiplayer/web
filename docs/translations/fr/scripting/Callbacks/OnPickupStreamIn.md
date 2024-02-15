---
title: OnPickupStreamIn
description: Ce rappel est appelé lorsqu'un objet à récupérer entre dans la portée visuelle d'un joueur.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Ce rappel est appelé lorsqu'un objet à récupérer entre dans la portée visuelle d'un joueur.

| Nom       | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| pickupid  | L'ID de l'objet à récupérer, retourné par [CreatePickup](../functions/CreatePickup) |
| playerid  | L'ID du joueur pour lequel l'objet à récupérer entre dans la portée visuelle.                   |

## Retours

Il est toujours appelé en premier dans le gamemode.

## Exemples

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
        printf("g_PickupHealth est diffusé en continu pour l'ID du joueur %d", playerid);
    }
    return 1;
}

```

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup): Appelé lorsqu'un joueur ramasse un objet à récupérer.
- [OnPickupStreamOut](OnPickupStreamOut): Appelé lorsqu'un objet à récupérer quitte la portée visuelle d'un joueur.

## Fonctions Relatives

Les fonctions suivantes peuvent être utiles, car elles sont liées à ce rappel d'une manière ou d'une autre.

- [CreatePickup](../functions/CreatePickup): Crée un objet à récupérer.
- [DestroyPickup](../functions/DestroyPickup): Détruit un objet à récupérer.
