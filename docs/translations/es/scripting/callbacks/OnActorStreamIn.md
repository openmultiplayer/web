---
title: OnActorStreamIn
description: Este callback se llama cuando un actor es transmitido por el cliente de un jugador.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

Este callback se llama cuando un actor es transmitido por el cliente de un jugador.

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| actorid     | El ID del actor que está siendo transmitido por el jugador.   |
| forplayerid | El ID del jugador que está transmitiendo al actor.            |

## Returns

Siempre se llama primero en los filterscripts.

## Examples

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "El actor %d está siendo transmitido a tu jugador.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Functions
