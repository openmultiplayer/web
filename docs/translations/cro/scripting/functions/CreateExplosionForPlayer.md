---
title: CreateExplosionForPlayer
description: Kreira eksploziju koja je vidljiva samo jednom igracu.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nizim verzijama!

:::

## Opis

Kreira eksploziju koja je vidljiva samo jednom igracu. Funkcija moze da se koristi kako bi se eksplozija odvojila od ostalih igraca ili prikazala u posebnom virtuelnom svetu.

| Ime          | Opis                                |
| ------------ | ----------------------------------- |
| playerid     | ID igraca kome kreiramo eksploziju. |
| Float:X      | X koordinata eksplozije             |
| Float:Y      | Y koordinata eksplozije             |
| Float:Z      | Z koordinata eksplozije             |
| type         | Tip eksplozije.                     |
| Float:Radius | Velicina eksplozije.                |

## Uzvracanja

Ova funkcija uvek vraca 1, iako je funkcija neuspesno izvrsena (igrac ne postoji, nepravilna velicina, ili nepostojuci tip eksplozije).

## Primeri

```c
if (strcmp(cmdtext, "/burnme", true) == 0)
{
    new Float: playerPos[3];
    GetPlayerPos(playerid, playerPos[0], playerPos[1], playerPos[2]);
    CreateExplosionForPlayer(playerid, playerPos[0], playerPos[1], playerPos[2], 1, 10.0);
    return 1;
}
```

## Beleske

:::tip

Postoji limit koji ogranicava koliko igrac moze videti eksplozija odjednom. To je 10.

:::

## Srodne Funkcije

- [CreateExplosion](CreateExplosion.md): Kreira eksploziju koja je vidljiva svim igracima.
