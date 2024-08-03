---
title: OnPlayerEnterPlayerGangZone
description: Ce rappel est appelé lorsqu'un joueur entre dans une zone de gang de joueur.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Description

Ce rappel est appelé lorsqu'un joueur entre dans une zone de gang de joueur.

| Nom       | Description                                            |
| --------- | ------------------------------------------------------ |
| playerid  | L'ID du joueur qui est entré dans la zone de gang de joueur. |
| zoneid    | L'ID de la zone de gang de joueur dans laquelle le joueur est entré.      |

## Retours

Il est toujours appelé en premier dans le gamemode.

## Exemples

```c
public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Vous entrez dans la zone de gang de joueur %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnPlayerLeavePlayerGangZone](OnPlayerLeavePlayerGangZone): Ce rappel est appelé lorsqu'un joueur quitte une zone de gang de joueur.

## Fonctions Relatives

Les fonctions suivantes peuvent être utiles, car elles sont liées à ce rappel d'une manière ou d'une autre.

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Crée une zone de gang de joueur.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Détruit une zone de gang de joueur.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Active le rappel lorsque qu'un joueur entre dans cette zone.
