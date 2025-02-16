---
title: OnPlayerStreamOut
description: Ovaj callback je pozvan kada se igrač prestane pojavljivati u klijentu drugog igrača.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada se igrač prestane pojavljivati u klijentu drugog igrača.

| Ime         | Deskripcija                                                  |
| ----------- | ------------------------------------------------------------ |
| playerid    | Igrač koji se prestao pojavljivati u klijentu drugog igrača. |
| forplayerid | Igrač u čijem se klijentu prestao pojavljivati prvi igrač.   |

## Returns

Uvijek je pozvan prvo u filterskripti.

## Primjeri

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije
