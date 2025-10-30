---
title: OnPlayerEnterVehicle
sidebar_label: OnPlayerEnterVehicle
description: Deze callback wordt aangeroepen wanneer een speler begint een voertuig in te gaan, wat betekent dat de speler nog niet in het voertuig is wanneer deze callback wordt aangeroepen.
tags: ["player", "vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler begint een voertuig in te gaan, wat betekent dat de speler nog niet in het voertuig is wanneer deze callback wordt aangeroepen.

| Naam        | Beschrijving                                          |
| ----------- | ---------------------------------------------------- |
| playerid    | ID van de speler die probeert een voertuig in te gaan.    |
| vehicleid   | ID van het voertuig dat de speler probeert in te gaan. |
| ispassenger | 0 als bestuurder. 1 als passagier. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new string[128];
    format(string, sizeof(string), "You are entering vehicle %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notities

:::tip

- Deze callback wordt aangeroepen wanneer een speler BEGINT een voertuig in te gaan, niet wanneer ze er al IN zitten. Zie [OnPlayerStateChange](OnPlayerStateChange).
- Deze callback wordt nog steeds aangeroepen als de speler wordt geweigerd toegang tot een voertuig (bijv. het is vergrendeld of vol) maar alleen als passagier.

:::

## Gerelateerde Callbacks

- [OnPlayerExitVehicle](OnPlayerExitVehicle): Deze callback wordt aangeroepen wanneer een speler een voertuig verlaat.
- [OnPlayerStateChange](OnPlayerStateChange): Deze callback wordt aangeroepen wanneer een speler van staat verandert.

## Gerelateerde Functies

- [PutPlayerInVehicle](../functions/PutPlayerInVehicle): Zet een speler in een voertuig.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): Check op welke stoel een speler zit.