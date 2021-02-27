---
title: GetPlayerFightingStyle
description: Dobij borbeni stil koji igrač trenutno koristi.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Dobij borbeni stil koji igrač trenutno koristi.

| Ime      | Deskripcija                       |
| -------- | --------------------------------- |
| playerid | ID igrača za dobiti borbeni stil. |

## Returns

ID borbenog stila igrača.

## Primjeri

```c
if (GetPlayerFightingStyle(playerid) == FIGHT_STYLE_NORMAL)
{
    SendClientMessage(playerid,0xFFFFFFAA,"Koristite normalan borbeni stil!");
}
```

## Srodne Funkcije

- [SetPlayerFightingStyle](SetPlayerFightingStyle): Postavi igraču borbeni stil.
