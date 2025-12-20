---
title: OnVehicleMod
sidebar_label: OnVehicleMod
description: Deze callback wordt aangeroepen wanneer een voertuig wordt gemod.
tags: ["vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een voertuig wordt gemod.

| Naam        | Beschrijving                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | Het ID van de bestuurder van het voertuig.              |
| vehicleid   | Het ID van het voertuig dat wordt gemod.                |
| componentid | Het ID van de component die aan het voertuig werd toegevoegd. |

## Returns

Wordt altijd als eerste aangeroepen in gamemode; return 0 blokkeert ook andere filterscripts.

## Voorbeelden

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Vehicle %d was modded by ID %d with the componentid %d", vehicleid, playerid, componentid);

    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Anti-tuning hacks script
        return 0; // Voorkomt dat de slechte modificatie wordt gesynct naar andere spelers
        // Getest en het werkt zelfs op servers die je toestaan je voertuig te modden via commands, menu's, dialogen, etc..
    }
    return 1;
}
```

## Notities

:::tip

Deze callback wordt NIET aangeroepen door AddVehicleComponent.

:::

## Gerelateerde Callbacks

- [OnEnterExitModShop](OnEnterExitModShop): Deze callback wordt aangeroepen wanneer een voertuig een modshop binnenkomt of verlaat.
- [OnVehiclePaintjob](OnVehiclePaintjob): Deze callback wordt aangeroepen wanneer de paintjob van een voertuig wordt veranderd.
- [OnVehicleRespray](OnVehicleRespray): Deze callback wordt aangeroepen wanneer een voertuig wordt resprayed.

## Gerelateerde Functies

- [AddVehicleComponent](../functions/AddVehicleComponent): Voeg een component toe aan een voertuig.
