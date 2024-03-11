---
title: GangZoneFlashForAll
description: GangZoneFlashForAll treperi gangzonu za sve igrače.
tags: ["gangzone"]
---

## Deskripcija

GangZoneFlashForAll treperi gangzonu za sve igrače.

| Ime        | Deskripcija                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| zone       | Zona za treperiti.                                                                                       |
| flashcolor | Boja za bljeskanje gangzone, kao cijeli broj ili hex u RGBA formatu boja. Podržana alfa transparentnost. |

## Returns

Ova funkcija ne returna (vraća) nikakve posebne vrijednosti.

## Primjeri

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GangZoneFlashForAll(gGangZoneId, COLOR_RED);
    return 1;
}
```

## Srodne Funkcije

- [GangZoneCreate](GangZoneCreate): Kreiraj gangzonu.
- [GangZoneDestroy](GangZoneDestroy): Uništi gang zonu.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Prikaži gang zonu za igrača.
- [GangZoneShowForAll](GangZoneShowForAll): Prikaži gang zonu za sve igrače.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Sakrij gangzonu za igrača.
- [GangZoneHideForAll](GangZoneHideForAll): Sakrij gangzonu za sve igrače.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Kreiraj bljeskalicu gang zone za igrača.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Zaustavi gang zonu da bljeska za igrača.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Zaustavi gang zonu da bljeska za sve igrače.
