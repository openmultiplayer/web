---
title: OnPlayerLeaveGangZone
sidebar_label: OnPlayerLeaveGangZone
description: Deze callback wordt aangeroepen wanneer een speler een gangzone verlaat.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een gangzone verlaat.

| Naam     | Beschrijving                                    |
| -------- | ---------------------------------------------- |
| playerid | Het ID van de speler die de gangzone verliet.  |
| zoneid   | Het ID van de gangzone die de speler verliet.  |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
public OnPlayerLeaveGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are leaving gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerEnterGangZone](OnPlayerEnterGangZone): Deze callback wordt aangeroepen wanneer een speler een gangzone binnengaat.

## Gerelateerde Functies

- [GangZoneCreate](../functions/GangZoneCreate): Maak een gangzone (gekleurd radargebied).
- [GangZoneDestroy](../functions/GangZoneDestroy): Vernietig een gangzone.


