---
title: OnVehicleStreamIn
sidebar_label: OnVehicleStreamIn
description: Deze callback wordt aangeroepen wanneer een voertuig ingestreamd wordt bij de client van een speler.
tags: ["vehicle"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een voertuig ingestreamd wordt bij de client van een speler.

| Naam        | Beschrijving                                         |
| ----------- | ---------------------------------------------------- |
| vehicleid   | Het ID van het voertuig dat voor de speler instreamde. |
| forplayerid | Het ID van de speler voor wie het voertuig instreamde. |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnVehicleStreamIn(vehicleid, forplayerid)
{
    new string[32];
    format(string, sizeof(string), "You can now see vehicle %d.", vehicleid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnVehicleStreamOut](OnVehicleStreamOut): Deze callback wordt aangeroepen wanneer een voertuig uit beeld streamt voor een speler.
- [OnPlayerStreamIn](OnPlayerStreamIn): Deze callback wordt aangeroepen wanneer een speler ingestreamd wordt.
- [OnPlayerStreamOut](OnPlayerStreamOut): Deze callback wordt aangeroepen wanneer een speler uitgestreamd wordt.
