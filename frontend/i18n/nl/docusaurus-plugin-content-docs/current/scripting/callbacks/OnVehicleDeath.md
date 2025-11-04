---
title: OnVehicleDeath
sidebar_label: OnVehicleDeath
description: Deze callback wordt aangeroepen wanneer een voertuig wordt vernietigd - door een explosie of door onderdompeling in water.
tags: ["vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een voertuig wordt vernietigd - door een explosie of door onderdompeling in water.

| Naam      | Beschrijving                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid | Het ID van het voertuig dat werd vernietigd.                                                                                                                   |
| killerid  | Het ID van de speler die de vernietiging van het voertuig rapporteerde (naam is misleidend). Meestal de bestuurder of een passagier (indien aanwezig) of de dichtstbijzijnde speler. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "Vehicle %i was destroyed. Reported by player %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notities

:::tip

- Deze callback wordt ook aangeroepen wanneer een voertuig water ingaat, maar het voertuig kan worden gered van vernietiging door teleportatie of eruit rijden (als het slechts gedeeltelijk ondergedompeld is).
- De callback wordt niet een tweede keer aangeroepen, en het voertuig kan verdwijnen wanneer de bestuurder uitstapt, of na korte tijd.

:::

## Gerelateerde Callbacks

- [OnVehicleSpawn](OnVehicleSpawn): Deze callback wordt aangeroepen wanneer een voertuig respawnt.

## Gerelateerde Functies

- [SetVehicleHealth](../functions/SetVehicleHealth): Stel de gezondheid van een voertuig in.
