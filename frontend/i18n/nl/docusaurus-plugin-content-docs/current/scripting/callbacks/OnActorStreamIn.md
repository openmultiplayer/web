---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: Deze callback wordt aangeroepen wanneer een actor wordt gestreamd door de client van een speler.
tags: ["actor"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Beschrijving

Deze callback wordt aangeroepen wanneer een actor wordt gestreamd door de client van een speler.

| Naam        | Beschrijving                                                   |
| ----------- | ------------------------------------------------------------- |
| actorid     | Het ID van de actor die is gestreamd voor de speler.          |
| forplayerid | Het ID van de speler die de actor heeft gestreamd.           |

## Returns

Wordt altijd als eerste aangeroepen in filterscripts.

## Voorbeelden

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[48];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notities

<TipNPCCallbacks />

## Gerelateerde Callbacks

- [OnActorStreamOut](OnActorStreamOut): Deze callback wordt aangeroepen wanneer een actor wordt uitgestreamd door de client van een speler.
