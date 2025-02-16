---
title: OnActorStreamIn
description: Ovaj callback se poziva kada se aktor pojavi u igračevom klijentu.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback se poziva kada se aktor pojavi u igračevom klijentu.

| Ime         | Deskripcija                                    |
| ----------- | ---------------------------------------------- |
| actorid     | ID aktora koji se pojavi u igračevom klijentu. |
| forplayerid | ID igrača kod kojeg se pojavljuje aktor.       |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Aktor %d se pojavio u tvom klijentu.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Bilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije
