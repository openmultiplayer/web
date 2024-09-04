---
title: CreateExplosionForPlayer
description: Креира експлозију која је видљива само једном играчу.
tags: ["player"]
---

## Опис

Kreira eksploziju koja je vidljiva samo jednom igracu. Funkcija moze da se koristi kako bi se eksplozija odvojila od ostalih igraca ili prikazala u posebnom virtuelnom svetu.

| Име          | Опис                                          |
| ------------ | --------------------------------------------- |
| playerid     | ИД играча коме креирамо експлозију.           |
| Float:X      | X координата експлозије                       |
| Float:Y      | Y координата експлозије                       |
| Float:Z      | Z координата експлозије                       |
| type         | [тип](../resources/explosionlist) експлозије. |
| Float:Radius | Величина експлозије                           |

## Враћа

Ова функција увек враћа 1, иако је функција неуспешно извршења (играч не постоји, неправилна величина, или непостојећи тип експлозије).

## Примери

```c
if (strcmp(cmdtext, "/burnme", true) == 0)
{
    new Float: playerPos[3];
    GetPlayerPos(playerid, playerPos[0], playerPos[1], playerPos[2]);
    CreateExplosionForPlayer(playerid, playerPos[0], playerPos[1], playerPos[2], 1, 10.0);
    return 1;
}
```

## Белешке

:::tip

Постоји лимит који ограничава колико играч може видети експлозија одједном. То је 10.

:::

## Повезане функције

- [CreateExplosion](CreateExplosion.md): Креира експлозију која је видљива свим играчима.

## Види такође

- [Explosion Types](../resources/explosionlist): Листа свих типова експлозија.
