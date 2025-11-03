---
title: OnUnoccupiedVehicleUpdate
sidebar_label: OnUnoccupiedVehicleUpdate
description: Deze callback wordt aangeroepen wanneer de client van een speler de positie van een voertuig bijwerkt/synct waar hij niet in rijdt.
tags: ["vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer de client van een speler de positie van een voertuig bijwerkt/synct waarin hij niet rijdt. Dit kan buiten het voertuig gebeuren of wanneer de speler passagier is in een voertuig zonder bestuurder.

| Naam           | Beschrijving                                                                                                                                                       |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid      | Het ID van het voertuig waarvan de positie is bijgewerkt.                                                                                                         |
| playerid       | Het ID van de speler die een vehicle position sync-update stuurde.                                                                                                |
| passenger_seat | Het stoel-ID als de speler passagier is. 0=niet in voertuig, 1=voorpassagier, 2=achter-links 3=achter-rechts 4+ is voor coach/bus etc. met veel passagiersstoelen. |
| Float:new_x    | De nieuwe X-coördinaat van het voertuig.                                                                                                                          |
| Float:new_y    | De nieuwe Y-coördinaat van het voertuig.                                                                                                                          |
| Float:new_z    | De nieuwe Z-coördinaat van het voertuig.                                                                                                                          |
| Float:vel_x    | De nieuwe X-snelheid van het voertuig.                                                                                                                            |
| Float:vel_y    | De nieuwe Y-snelheid van het voertuig.                                                                                                                            |
| Float:vel_z    | De nieuwe Z-snelheid van het voertuig.                                                                                                                            |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts; return 0 blokkeert ook andere scripts.

## Voorbeelden

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Check of het ver bewoog
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Update afwijzen
        return 0;
    }

    return 1;
}
```

## Notities

:::warning

- Deze callback wordt zeer frequent aangeroepen per seconde per onbezet voertuig. Vermijd intensieve berekeningen of intensieve file I/O in deze callback.
- [GetVehiclePos](../functions/GetVehiclePos) geeft de oude coördinaten terug vóór deze update.

:::

## Gerelateerde Callbacks

- [OnTrailerUpdate](OnTrailerUpdate): Wordt aangeroepen wanneer de positie van een trailer door een client wordt gesynct.


