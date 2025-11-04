---
title: OnVehicleStreamOut
sidebar_label: OnVehicleStreamOut
description: Deze callback wordt aangeroepen wanneer een voertuig uit beeld streamt bij de client van een speler (zo ver weg dat het niet zichtbaar is).
tags: ["vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een voertuig uit beeld streamt bij de client van een speler (zo ver weg dat het niet zichtbaar is).

| Naam        | Beschrijving                                                |
| ----------- | ----------------------------------------------------------- |
| vehicleid   | Het ID van het voertuig dat uit beeld streamde.            |
| forplayerid | Het ID van de speler voor wie het voertuig niet meer zichtbaar is. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnVehicleStreamOut(vehicleid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Your client is no longer streaming vehicle %d", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnVehicleStreamIn](OnVehicleStreamIn): Deze callback wordt aangeroepen wanneer een voertuig ingestreamd wordt.
- [OnPlayerStreamIn](OnPlayerStreamIn): Deze callback wordt aangeroepen wanneer een speler ingestreamd wordt.
- [OnPlayerStreamOut](OnPlayerStreamOut): Deze callback wordt aangeroepen wanneer een speler uitgestreamd wordt.
