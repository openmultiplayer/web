---
title: GetPlayerAnimationIndex
description: Vraća indeks bilo koje primijenjene animacije koja se izvodi..
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3b i ne radi u nižim verzijama!

:::

## Deskripcija

Vraća indeks bilo koje primijenjene animacije koja se izvodi..

| Ime      | Deskripcija                                       |
| -------- | ------------------------------------------------- |
| playerid | ID igrača za koji želite dobiti indeks animacije. |

## Returns

0 ako nema primijenjene animacije.

## Primjeri

```c
public OnPlayerUpdate(playerid)
{
    if (GetPlayerAnimationIndex(playerid))
    {
        new
            animLib[32],
            animName[32],
            msg[128];

        GetAnimationName(GetPlayerAnimationIndex(playerid), animLib, sizeof animLib, animName, sizeof animName);
        format(msg, sizeof msg, "Izvodi animaciju: %s %s", animLib, animName);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
    }
    return 1;
}
```

## Srodne Funkcije

- [GetAnimationName](GetAnimationName): Nabavite library animacija/naziv za indeks.
