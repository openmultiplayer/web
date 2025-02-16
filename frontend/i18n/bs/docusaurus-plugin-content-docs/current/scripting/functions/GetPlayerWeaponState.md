---
title: GetPlayerWeaponState
description: Provjeri stanje igračevog oružja.
tags: ["player"]
---

## Deskripcija

Provjeri stanje igračevog oružja.

| Ime      | Deskripcija                         |
| -------- | ----------------------------------- |
| playerid | ID igrača za primiti stanje oružja. |

## Returns

Stanje igračevog oružja. 0 ako navedeni igrač ne postoji.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
    SetPVarInt(playerid, "WepState", GetPlayerWeaponState(playerid));
    return 1;
}
```

## Srodne Funkcije

- [GivePlayerWeapon](GivePlayerWeapon): Daj igraču oružje.
