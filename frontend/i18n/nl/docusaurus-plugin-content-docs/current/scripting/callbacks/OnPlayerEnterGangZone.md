---
title: OnPlayerEnterGangZone
sidebar_label: OnPlayerEnterGangZone
description: Deze callback wordt aangeroepen wanneer een speler een gangzone binnengaat.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een gangzone binnengaat.

| Naam     | Beschrijving                                     |
| -------- | ----------------------------------------------- |
| playerid | Het ID van de speler die de gangzone binnenging. |
| zoneid   | Het ID van de gangzone die de speler binnenging. |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
public OnPlayerEnterGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are entering gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerLeaveGangZone](OnPlayerLeaveGangZone): Deze callback wordt aangeroepen wanneer een speler een gangzone verlaat.

## Gerelateerde Functies

- [GangZoneCreate](../functions/GangZoneCreate): Maak een gangzone (gekleurd radargebied).
- [GangZoneDestroy](../functions/GangZoneDestroy): Vernietig een gangzone.
- [UseGangZoneCheck](../functions/UseGangZoneCheck): Schakelt de callback in wanneer een speler deze zone binnengaat.


