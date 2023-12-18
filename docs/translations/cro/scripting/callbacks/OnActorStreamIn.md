---
title: OnActorStreamIn
description: Ovaj povratni poziv se poziva kada se aktor pojavi u igračevom klijentu.
tags: []
---

:::warning

Ovaj povratni poziv dodan je u SA-MP verziji 0.3.7 i neće raditi u ranijim verzijama!

:::

## Opis

Ovaj povratni poziv se poziva kada se glumac pojavi u igračevom klijentu.

| Име         | Опис                              |
| ----------- | --------------------------------- |
| actorid     | ID aktora koji se pojavio igraču. |
| forplayerid | ID igrača kojem se aktor pojavio. |

## Uzvraćanja

Uvek se poziva prvi u filterskriptama.

## Primeri

```c
public OnActorStreamIn(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed in for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Bilješke

:::tip


Ovaj povratni poziv također može pozvati NPC.

:::

## Povezane funkcije
