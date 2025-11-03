---
title: OnPlayerClickMap
sidebar_label: OnPlayerClickMap
description: Deze callback wordt aangeroepen wanneer een speler een target/waypoint op de pauze-menu-kaart plaatst (via rechterklik).
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een target/waypoint op de pauze-menu-kaart plaatst (via rechterklik).

| Naam     | Beschrijving                                                                 |
| -------- | --------------------------------------------------------------------------- |
| playerid | Het ID van de speler die een target/waypoint plaatste                        |
| Float:fX | De X-coördinaat waar de speler klikte                                        |
| Float:fY | De Y-coördinaat waar de speler klikte                                        |
| Float:fZ | De Z-coördinaat waar de speler klikte (onnauwkeurig – zie notitie hieronder) |

## Returns

1 - Voorkomt dat andere filterscripts deze callback ontvangen.

0 - Geeft aan dat deze callback wordt doorgegeven aan het volgende filterscript.

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Notities

:::tip

Zoals de naam al zegt, wordt dit alleen aangeroepen wanneer de speler klikt om een target te markeren, niet bij het indrukken van een toets. De Z-waarde is 0 (ongeldig) als de geklikte locatie ver van de speler is; gebruik de [MapAndreas](https://github.com/philip1337/samp-plugin-mapandreas) of [ColAndreas](https://github.com/Pottus/ColAndreas) plugin voor nauwkeurige Z-coördinaten.

:::

## Gerelateerde Functies

- [GetPlayerPos](../functions/GetPlayerPos): Krijg de positie van een speler.
- [SetPlayerPos](../functions/SetPlayerPos): Stel de positie van een speler in.
- [SetPlayerPosFindZ](../functions/SetPlayerPosFindZ): Stel positie in en vind de grond.
