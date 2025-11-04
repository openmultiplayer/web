---
title: OnVehicleDamageStatusUpdate
sidebar_label: OnVehicleDamageStatusUpdate
description: Deze callback wordt aangeroepen wanneer voertuigonderdelen zoals deuren, banden, panelen of lampen hun damage status wijzigen.
tags: ["vehicle"]
---

:::tip

Voor handige functies rond vehicle damage values, zie [hier](../resources/damagestatus).

:::

## Beschrijving

Deze callback wordt aangeroepen wanneer voertuigonderdelen zoals deuren, banden, panelen of lampen hun damage status wijzigen.

| Naam      | Beschrijving                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------- |
| vehicleid | Het ID van het voertuig waarvan de damage status wijzigde.                                        |
| playerid  | Het ID van de speler die de wijziging synchroniseerde (die de schade veroorzaakte of repareerde). |

## Returns

**1** - Voorkomt dat andere filterscripts deze callback ontvangen.

**0** - Geeft aan dat deze callback wordt doorgegeven aan het volgende filterscript.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Damage status van alle componenten ophalen
    new
        VEHICLE_PANEL_STATUS:panels,
        VEHICLE_DOOR_STATUS:doors,
        VEHICLE_LIGHT_STATUS:lights,
        VEHICLE_TYRE_STATUS:tyres;

    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);

    // Stel banden in op 0 = geen lekke banden
    tyres = VEHICLE_TYRE_STATUS_NONE;

    // Damage status bijwerken met onbeschadigde banden
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);
    return 1;
}
```

## Notities

:::tip

Dit omvat geen veranderingen in vehicle health.

:::

## Gerelateerde Functies

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): Haal per onderdeel de damage state op.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): Werk de vehicle damage bij.
