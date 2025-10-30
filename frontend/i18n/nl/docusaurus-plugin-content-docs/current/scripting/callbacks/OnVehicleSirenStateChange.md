---
title: OnVehicleSirenStateChange
sidebar_label: OnVehicleSirenStateChange
description: Deze callback wordt aangeroepen wanneer de sirene van een voertuig wordt omgeschakeld.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Beschrijving

Deze callback wordt aangeroepen wanneer de sirene van een voertuig wordt omgeschakeld.

| Naam      | Beschrijving                                               |
| --------- | --------------------------------------------------------- |
| playerid  | Het ID van de speler die de sirene omschakelde (bestuurder). |
| vehicleid | Het ID van het voertuig waarvoor de sirene werd omgeschakeld. |
| newstate  | 0 als sirene werd uitgeschakeld, 1 als sirene werd ingeschakeld. |

## Returns

1 - Voorkomt dat gamemode deze callback ontvangt.

0 - Geeft aan dat deze callback wordt doorgegeven aan de gamemode.

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Siren ~G~on", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Siren ~r~off", 1000, 3);
    }
    return 1;
}
```

## Notities

:::tip

Deze callback wordt alleen aangeroepen wanneer de sirene van een voertuig wordt in- of uitgeschakeld, NIET wanneer de alternatieve sirene wordt gebruikt (toeter ingedrukt houden).

:::

## Gerelateerde Functies

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): Check of de sirene van een voertuig aan of uit staat.
