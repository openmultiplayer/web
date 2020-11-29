---
title: OnActorStreamOut
description: Ang callback na ito ay nacacall kapag ang actor ay na streamed-out na sa player.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

Ang callback na ito ay nacacall kapag ang actor ay na streamed-out na sa player.

| Pangalan    | Deskripsyon                                                    |
| ----------- | -------------------------------------------------------------- |
| actorid     | Ang ID ng actor na na-streamed out sa player.                  |
| forplayerid | Ang ID ng player na pinag stream-outan ng actor.               |

## Returns

Lagi itong na cacall una sa mga filterscript.

## Examples

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Ang actor %d ay hindi na naka stream para sa iyo.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Mga Dapat Tandaan

<TipNPCCallbacks />

## Mga Related na Callbacks
