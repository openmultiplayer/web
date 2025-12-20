---
title: OnPlayerStreamOut
sidebar_label: OnPlayerStreamOut
description: Deze callback wordt aangeroepen wanneer een speler uit beeld streamt bij de client van een andere speler.
tags: ["player"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler uit beeld streamt bij de client van een andere speler.

| Naam        | Beschrijving                                 |
| ----------- | -------------------------------------------- |
| playerid    | De speler die gedestreamd werd.              |
| forplayerid | De speler voor wie de ander gedestreamd werd.|

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

:::warning

OnPlayerStreamOut wordt niet voor beide spelers aangeroepen wanneer een speler disconnect.

:::

## Gerelateerde Callbacks

- [OnPlayerStreamIn](OnPlayerStreamIn): Deze callback wordt aangeroepen wanneer een speler ingestreamd wordt voor een andere speler.
- [OnActorStreamIn](OnPlayerStreamOut): Deze callback wordt aangeroepen wanneer een actor wordt ingestreamd.
- [OnVehicleStreamIn](OnPlayerStreamOut): Deze callback wordt aangeroepen wanneer een voertuig wordt ingestreamd.
