---
title: OnPlayerClickMap
description: OnPlayerClickMap je pozvan kada igrač postavi metu(target/waypoint) na pause menu mapi (desnim klikom).
tags: ["player"]
---

## Deskripcija

OnPlayerClickMap je pozvan kada igrač postavi metu(target/waypoint) na pause menu mapi (desnim klikom).

| Ime      | Deskripcija                                                                            |
| -------- | -------------------------------------------------------------------------------------- |
| playerid | ID igrača koji je postavio metu(waypoint) na mapu                                      |
| Float:fX | X float kordinata gdje je igrač kliknuo                                                |
| Float:fY | Y float kordinata gdje je igrač kliknuo                                                |
| Float:fZ | Z float kordinata gdje je igrač kliknuo (netačno/neprecizno - pogledaj bilješke ispod) |

## Returns

1 - Spriječiti će da druge filterskripte primaju ovaj callback.

0 - Označava da će ovaj callback biti proslijeđen do sljedeće filterskripte.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerClickMap(playerid, Float:fX, Float:fY, Float:fZ)
{
    SetPlayerPosFindZ(playerid, fX, fY, fZ);
    return 1;
}
```

## Zabilješke

:::tip

Kako samo ime callback-a kaže, poziva se samo kada igrač klikne da označi metu(waypoint) a ne kada pritisne tipku. Return-ovana vrijednost Z če biti 0 (netačno) ako je mjesto gdje je igrač kliknuo mnogo daleko od igrača; Koristi MapAndreas ili ColAndreas plugin kako bi dobio precizniju Z kordinatu.

:::

## Srodne Funkcije
