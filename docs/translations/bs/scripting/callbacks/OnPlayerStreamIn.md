---
title: OnPlayerStreamIn
description: Ovaj callback je pozvan kada se igrač učita/pojavi u klijent nekog drugog igrača.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada se igrač učita/pojavi u klijent nekog drugog igrača.

| Ime         | Deskripcija                                       |
| ----------- | ------------------------------------------------- |
| playerid    | ID igrača koji se učitao/pojavio.                 |
| forplayerid | ID igrača kod kojeg se prvi igrač učitao/pojavio. |

## Returns

Uvijek je pozvan prvo u filterskripti

## Primjeri

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Igrač %d se pojavio kod tebe (u tvom klijentu).", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije
