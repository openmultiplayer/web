---
title: OnPlayerStreamIn
sidebar_label: OnPlayerStreamIn
description: Deze callback wordt aangeroepen wanneer een speler door de client van een andere speler wordt gestreamd.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler door de client van een andere speler wordt gestreamd.

| Naam        | Beschrijving                                           |
| ----------- | ------------------------------------------------------ |
| playerid    | Het ID van de speler die is gestreamd.                 |
| forplayerid | Het ID van de speler voor wie de ander is gestreamd.   |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnPlayerStreamOut](OnPlayerStreamOut): Deze callback wordt aangeroepen wanneer een speler uit beeld streamt voor een andere speler.
- [OnActorStreamIn](OnPlayerStreamOut): Deze callback wordt aangeroepen wanneer een actor wordt ingestreamd.
- [OnVehicleStreamIn](OnVehicleStreamIn): Deze callback wordt aangeroepen wanneer een voertuig wordt ingestreamd.
