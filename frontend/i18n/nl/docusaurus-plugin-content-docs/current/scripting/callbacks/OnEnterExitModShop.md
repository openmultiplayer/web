---
title: OnEnterExitModShop
sidebar_label: OnEnterExitModShop
description: Deze callback wordt aangeroepen wanneer een speler een modshop binnenkomt of verlaat.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een modshop binnenkomt of verlaat.

| Naam       | Beschrijving                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| playerid   | Het ID van de speler die de modshop binnenkwam of verliet                     |
| enterexit  | 1 als de speler binnenkwam of 0 als ze verlieten                              |
| interiorid | Het interior ID van de modshop die de speler binnenkomt (of 0 als verlaten) |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Als enterexit 0 is, betekent dit dat ze verlaten
    {
        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Notities

:::warning

Bekende Bug(s):

- Spelers botsen wanneer ze in dezelfde modshop komen.

:::

## Gerelateerde Callbacks

- [OnVehicleMod](OnVehicleMod): Deze callback wordt aangeroepen wanneer een voertuig wordt gemod.
- [OnVehicleRespray](OnVehicleRespray): Deze callback wordt aangeroepen wanneer een speler een modshop verlaat, zelfs als de kleuren niet zijn veranderd.
- [OnVehiclePaintjob](OnVehiclePaintjob): Deze callback wordt aangeroepen wanneer een speler een voertuig paintjob bekijkt in een modshop.

## Gerelateerde Functies

- [IsPlayerInModShop](../functions/IsPlayerInModShop): Check of de speler in de modshop is.
- [AddVehicleComponent](../functions/AddVehicleComponent): Voeg een component toe aan een voertuig.
