---
title: CreateExplosion
description: Kreira eksploziju na odredjenim koordinatama.
tags: []
---

## Opis

Kreira eksploziju na odredjenim koordinatama.

| Ime          | Opis                    |
| ------------ | ----------------------- |
| Float:X      | X koordinata eksplozije |
| Float:Y      | Y koordinata eksplozije |
| Float:Z      | Z koordinata eksplozije |
| type         | Tip eksplozije          |
| Float:radius | Velicina eksplozije     |

## Uzvracanja

Ova funkcija uvek vraca 1, iako su tip eksplozije ili velicina nepravilni.

## Primeri

```c
public OnPlayerEnterCheckpoint(playerid)
{
    // Uzima poziciju igraca
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);

    // Kreira eksploziju na koordinatama igraca
    CreateExplosion(x, y, z, 12, 10.0);

    return 1;
}
```

## Beleske

:::tip

Postoji limit koji ogranicava koliko igrac moze videti eksplozija odjednom. To je 10.

:::

## Srodne Funkcije

- [CreateExplosionForPlayer](CreateExplosionForPlayer): Kreira eksploziju koja je vidljiva samo jednom igracu.
