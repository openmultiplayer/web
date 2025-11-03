---
title: OnActorStreamOut
sidebar_label: OnActorStreamOut
description: Deze callback wordt aangeroepen wanneer een actor wordt uitgestreamd door de client van een speler.
tags: ["actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een actor wordt uitgestreamd door de client van een speler.

| Naam        | Beschrijving                                                    |
| ----------- | -------------------------------------------------------------- |
| actorid     | Het ID van de actor die is uitgestreamd voor de speler.        |
| forplayerid | Het ID van de speler die de actor heeft uitgestreamd.         |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Actor %d is now streamed out for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnActorStreamIn](OnActorStreamIn): Deze callback wordt aangeroepen wanneer een actor wordt gestreamd door de client van een speler.
