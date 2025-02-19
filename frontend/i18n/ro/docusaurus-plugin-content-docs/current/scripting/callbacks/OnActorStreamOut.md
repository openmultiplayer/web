---
title: OnActorStreamOut
sidebar_label: OnActorStreamOut
description: Acest callback este apelat atunci când un actor iese din flux (streamed out) de către clientul unui jucător.
tags: []
---

:::warning

Această funcție a fost adăugată în SA-MP 0.3.7 și nu va funcționa în versiunile anterioare!

:::

## Descriere

Acest callback este apelat atunci când un actor iese din flux (streamed out) de către clientul unui jucător.

| Nume        | Descriere                                                    |
| ----------- | ------------------------------------------------------------ |
| actorid     | ID-ul actorului care a fost transmis în flux pentru jucător. |
| forplayerid | ID-ul jucătorului care a transmis actorul în flux.           |

## Returnări

Mereu este apelat primul în filterscript-uri.

## Exemple

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actorul %d este acum ieșit din flux.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Note

:::tip

Acest callback poate fi apelat și de NPC.

:::

## Funcții asociate
