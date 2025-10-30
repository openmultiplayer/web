---
title: OnVehiclePaintjob
sidebar_label: OnVehiclePaintjob
description: Deze callback wordt aangeroepen wanneer een speler een voertuig paintjob bekijkt in een modshop.
tags: ["vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een voertuig paintjob bekijkt in een modshop. Let op, deze callback wordt niet aangeroepen wanneer de speler de paintjob koopt.

| Naam       | Beschrijving                                                      |
| ---------- | ---------------------------------------------------------------- |
| playerid   | Het ID van de speler die de paintjob van hun voertuig veranderde. |
| vehicleid  | Het ID van het voertuig waarvan de paintjob werd veranderd.       |
| paintjobid | Het ID van de nieuwe paintjob.                                   |

## Returns

Wordt altijd als eerste aangeroepen in gamemode; return 0 blokkeert andere filterscripts.

## Voorbeelden

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "You have changed your vehicle's paintjob to %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Notities

:::tip

Deze callback wordt niet aangeroepen door ChangeVehiclePaintjob. Je kunt OnVehicleChangePaintjob van vSync gebruiken om te weten wanneer de speler de paintjob koopt.

:::

## Gerelateerde Callbacks

- [OnVehicleRespray](OnVehicleRespray): Deze callback wordt aangeroepen wanneer een voertuig wordt resprayed.
- [OnVehicleMod](OnVehicleMod): Deze callback wordt aangeroepen wanneer een voertuig wordt gemod.

## Gerelateerde Functies

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Verander de paintjob van een voertuig.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Stel de kleur van een voertuig in.
