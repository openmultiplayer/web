---
title: OnPlayerEnterPlayerGangZone
sidebar_label: OnPlayerEnterPlayerGangZone
description: Deze callback wordt aangeroepen wanneer een speler een player gangzone binnengaat.
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een player gangzone binnengaat.

| Naam     | Beschrijving                                            |
| -------- | ------------------------------------------------------ |
| playerid | Het ID van de speler die de player gangzone binnenging. |
| zoneid   | Het ID van de player gangzone die de speler binnenging. |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are entering player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerLeavePlayerGangZone](OnPlayerLeavePlayerGangZone): Deze callback wordt aangeroepen wanneer een speler een player gangzone verlaat.

## Gerelateerde Functies

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Maak een player gangzone.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Vernietig een player gangzone.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Schakelt de callback in wanneer een speler deze zone binnengaat.


