---
title: GetPlayerMoney
description: Dohvaća iznos novca koji igrač ima.
tags: ["player"]
---

## Deskripcija

Dohvaća iznos novca koji igrač ima.

| Ime      | Deskripcija                      |
| -------- | -------------------------------- |
| playerid | ID igrača za dobiti iznos novca. |

## Returns

Količina novca koju igrač ima.

## Primjeri

```c
public OnPlayerSpawn(playerid)
{
   new string[32];
   format(string, sizeof(string), "Vaš novac: $%i.", GetPlayerMoney(playerid));
   SendClientMessage(playerid, 0xFFFFFFAA, string);
}
```

## Srodne Funkcije

- [GivePlayerMoney](GivePlayerMoney): Dajte igraču novac.
- [ResetPlayerMoney](ResetPlayerMoney): Postavite novac igrača na \$0.
