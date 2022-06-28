---
title: OnActorStreamOut
description: Dieses Callback wird ausgeführt, wenn ein Actor nicht länger von einem Spieler gestreamt wird.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Beschreibung

Dieses Callback wird ausgeführt, wenn ein Actor nicht länger von einem Spieler gestreamt wird.

| Name        | Beschreibung                                                    |
| ----------- | -------------------------------------------------------------- |
| actorid     | Die ID des Actors der nicht länger vom Spieler gestreamt wird. |
| forplayerid | Die ID des Spielers der den Actor gestreamt hatte              |

## Rückgabe(return value)

Wird in Filterscripts immer zuerst aufgerufen.

## Beispiele

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d wird nicht mehr von dir gestreamt.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Anmerkungen

<TipNPCCallbacks />
