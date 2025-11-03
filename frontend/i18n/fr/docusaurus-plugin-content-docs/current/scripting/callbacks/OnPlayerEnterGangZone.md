---
title: OnPlayerEnterGangZone
sidebar_label: OnPlayerEnterGangZone
description: Ce rappel est appelé lorsqu'un joueur entre dans une zone de gang
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Description

Ce rappel est appelé lorsqu'un joueur entre dans une zone de gang

| Nom       | Description                                     |
| --------- | ----------------------------------------------- |
| playerid  | L'ID du joueur qui est entré dans la zone de gang. |
| zoneid    | L'ID de la zone de gang dans laquelle le joueur est entré. |

## Retours

Il est toujours appelé en premier dans le gamemode.

## Exemples

```c
public OnPlayerEnterGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Vous entrez dans la zone de gang %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Rappels Relatives

Les rappels suivants peuvent être utiles, car ils sont liés à ce rappel d'une manière ou d'une autre.

- [OnPlayerLeaveGangZone](OnPlayerLeaveGangZone): Ce rappel est appelé lorsqu'un joueur quitte une zone de gang. 

## Fonctions Relatives

Les fonctions suivantes peuvent être utiles, car elles sont liées à ce rappel d'une manière ou d'une autre.

- [GangZoneCreate](../functions/GangZoneCreate): Crée une zone de gang (zone radar colorée).
- [GangZoneDestroy](../functions/GangZoneDestroy): Détruit une zone de gang.
- [UseGangZoneCheck](../functions/UseGangZoneCheck): Active le rappel lorsque qu'un joueur entre dans cette zone.
