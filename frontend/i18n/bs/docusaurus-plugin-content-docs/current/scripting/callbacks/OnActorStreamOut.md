---
title: OnActorStreamOut
sidebar_label: OnActorStreamOut
description: Ovaj callback se poziva kada se aktor prestane prikazivati na igračevom klijentu.
tags: []
---

:::warning

Ova funkcija je dodana u SA-MP 0.3.7 i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback se poziva kada se aktor prestane prikazivati na igračevom klijentu.

| Ime         | Deskripcija                                                 |
| ----------- | ----------------------------------------------------------- |
| actorid     | ID aktora koji se prestao prikazivati u igračevom klijentu. |
| forplayerid | ID igrača kod kojeg se aktor prestao prikazivati.           |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d se prestao prikazivati u vašem klijentu.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

## Srodne Funkcije
