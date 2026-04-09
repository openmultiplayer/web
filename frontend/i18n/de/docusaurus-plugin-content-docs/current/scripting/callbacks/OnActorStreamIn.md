---
title: OnActorStreamIn
sidebar_label: OnActorStreamIn
description: Dieses Callback wird ausgeführt wenn ein Actor von einem Spieler gestreamt wird.
tags: []
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

Dieses Callback wird ausgeführt wenn ein Actor von einem Spieler gestreamt wird.

| Name        | Beschreibung                                      |
| ----------- | ------------------------------------------------- |
| actorid     | Die ID des Actors der vom Spieler gestreamt wird. |
| forplayerid | Die ID des Spielers der den Actor gestreamt hat.  |

## Rückgabe(return value)

Wird in Filterscripts immer zuerst aufgerufen.

## Beispiele

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d wird jetzt für dich gestreamt.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Anmerkungen

<TipNPCCallbacks />
