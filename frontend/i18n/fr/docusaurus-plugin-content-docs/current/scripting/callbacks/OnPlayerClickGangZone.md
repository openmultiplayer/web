---
title: OnPlayerClickGangZone
sidebar_label: OnPlayerClickGangZone
description: Ce rappel est appelé lorsqu'un joueur clique sur une zone de gang sur la carte du menu de pause (en cliquant avec le bouton droit).
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Description

Ce rappel est appelé lorsqu'un joueur clique sur une zone de gang sur la carte du menu de pause (en cliquant avec le bouton droit).

| Nom       | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| playerid  | L'ID du joueur qui a cliqué sur une zone de gang                              |
| zoneid    | L'ID de la zone de gang sur laquelle le joueur a cliqué                       |

## Retours

Ce rappel ne gère pas les retours.
Il est toujours appelé en premier dans le gamemode.

## Exemples

```c
public OnPlayerClickGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "Vous avez cliqué sur la zone de gang %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Fonctions Relatives

Les fonctions suivantes peuvent être utiles, car elles sont liées à ce rappel d'une manière ou d'une autre. 

- [GangZoneCreate](../functions/GangZoneCreate): Créer une zone de gang (zone radar colorée).
- [GangZoneDestroy](../functions/GangZoneDestroy): Détruire une zone de gang.
