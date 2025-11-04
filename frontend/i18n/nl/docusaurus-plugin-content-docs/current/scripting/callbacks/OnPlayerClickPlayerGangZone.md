---
title: OnPlayerClickPlayerGangZone
sidebar_label: OnPlayerClickPlayerGangZone
description: Deze callback wordt aangeroepen wanneer een speler een player gangzone aanklikt op de pauze-menu-kaart (via rechterklik).
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een player gangzone aanklikt op de pauze-menu-kaart (via rechterklik).

| Naam     | Beschrijving                                         |
| -------- | --------------------------------------------------- |
| playerid | Het ID van de speler die op een player gangzone klikte |
| zoneid   | Het ID van de aangeklikte player gangzone           |

## Returns

Deze callback behandelt geen returns.

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
public OnPlayerClickPlayerGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are click player gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Gerelateerde Functies

- [CreatePlayerGangZone](../functions/CreatePlayerGangZone): Maak een player gangzone.
- [PlayerGangZoneDestroy](../functions/PlayerGangZoneDestroy): Vernietig een player gangzone.


