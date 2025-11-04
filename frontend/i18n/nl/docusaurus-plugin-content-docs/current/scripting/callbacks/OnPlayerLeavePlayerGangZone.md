---
title: OnPlayerLeavePlayerGangZone
sidebar_label: OnPlayerLeavePlayerGangZone
description: Deze callback wordt aangeroepen wanneer een speler een player gangzone verlaat.
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een player gangzone verlaat.

| Naam     | Beschrijving                                           |
| -------- | ----------------------------------------------------- |
| playerid | Het ID van de speler die de player gangzone verliet.  |
| zoneid   | Het ID van de player gangzone die de speler verliet.  |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are leaving player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerEnterPlayerGangZone](OnPlayerEnterPlayerGangZone): Deze callback wordt aangeroepen wanneer een speler een player gangzone binnengaat.

## Gerelateerde Functies

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Maak een player gangzone.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Vernietig een player gangzone.
- [UsePlayerGangZoneCheck](../functions/UsePlayerGangZoneCheck): Schakelt de callback in wanneer een speler deze zone verlaat.


