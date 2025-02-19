---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: This callback is called when an actor is streamed in by a player's client.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Deskripsyon

Ang callback na ito ay natatawag kapag ang actor ay na stream na sa client ng player.

| Pangalan    | Deskripsyon                                                   |
| ----------- | ------------------------------------------------------------- |
| actorid     | Ang ID ng actor na na stream para sa player.                  |
| forplayerid | Ang ID ng player kung kanino na stream ang actor              |

## Returns

Lagi itong na tatawag una sa mga filterscript.

## Mga Halimbawa

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Ang actor %d ay naka stream na para sa iyo.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Mga Dapat Unawain

<TipNPCCallbacks />

## Mga Related na Callbacks
