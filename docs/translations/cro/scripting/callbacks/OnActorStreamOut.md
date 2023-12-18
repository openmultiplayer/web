---
title: OnActorStreamOut
description: Ovaj povratni poziv se poziva kada se aktor prestane prikazivati ​​u igračevom klijentu.
tags: []
---

:::warning

Ovaj povratni poziv dodan je u SA-MP verziji 0.3.7 i neće raditi u ranijim verzijama!

:::

## Opis

Ovaj povratni poziv se poziva kada actor prestane prikazivati ​​u igračevom klijentu.

| Name        | Description                                   |
| ----------- | --------------------------------------------- |
| actorid     | ID aktora koji se prestao prikazivati ​​igraču. |
| forplayerid | ID igrača kojem se aktor prestao prikazivati.  |

## Uzvraćanja

Uvek se poziva prvi u filterskriptama.

## Primeri

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Actor %d is now streamed out for you.", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## Bilješke

:::tip

Ovaj povratni poziv također može pozvati NPC.

:::

## Povezane funkcije
