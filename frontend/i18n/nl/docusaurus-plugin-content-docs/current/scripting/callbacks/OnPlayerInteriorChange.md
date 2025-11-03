---
title: OnPlayerInteriorChange
sidebar_label: OnPlayerInteriorChange
description: Deze callback wordt aangeroepen wanneer een speler van interior verandert.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler van interior verandert. Kan getriggerd worden door SetPlayerInterior of bij het betreden/verlaten van een gebouw.

| Naam          | Beschrijving                          |
| ------------- | ------------------------------------ |
| playerid      | De speler die van interior veranderde. |
| newinteriorid | De nieuwe interior waarin de speler nu is. |
| oldinteriorid | De vorige interior waarin de speler was. |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "You went from interior %d to interior %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## Gerelateerde Callbacks

- [OnPlayerStateChange](OnPlayerStateChange): Deze callback wordt aangeroepen wanneer een speler van staat verandert.

## Gerelateerde Functies

- [SetPlayerInterior](../functions/SetPlayerInterior): Stel de interior van een speler in.
- [GetPlayerInterior](../functions/GetPlayerInterior): Krijg de huidige interior van een speler.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): Verander de interior waarin een voertuig zichtbaar is.
