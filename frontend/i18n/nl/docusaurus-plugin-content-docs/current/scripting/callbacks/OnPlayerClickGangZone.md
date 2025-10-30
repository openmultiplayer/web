---
title: OnPlayerClickGangZone
sidebar_label: OnPlayerClickGangZone
description: Deze callback wordt aangeroepen wanneer een speler een gangzone aanklikt op de pauze-menu-kaart (via rechterklik).
tags: ["player", "gangzone"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een gangzone aanklikt op de pauze-menu-kaart (via rechterklik).

| Naam     | Beschrijving                                |
| -------- | ------------------------------------------- |
| playerid | Het ID van de speler die op een gangzone klikte |
| zoneid   | Het ID van de aangeklikte gangzone          |

## Returns

Deze callback behandelt geen returns.

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
public OnPlayerClickGangZone(playerid, zoneid)
{
    new string[128];
    format(string, sizeof(string), "You are click gangzone %i", zoneid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Gerelateerde Functies

- [GangZoneCreate](../functions/GangZoneCreate): Maak een gangzone (gekleurd radargebied).
- [GangZoneDestroy](../functions/GangZoneDestroy): Vernietig een gangzone.


