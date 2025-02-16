---
title: OnPlayerLeaveRaceCheckpoint
description: Овај повратни позив се позива када играч напусти тркачку контролну тачку.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Description

Овај повратни позив се позива када играч напусти тркачку контролну тачку(чекпоинт).

| Име      | Опис                                                |
| -------- | --------------------------------------------------- |
| playerid | ID играча који је напустио тркачки чекпоинт.        |

## Враћа

Увек се прво позива у филтерскриптама.

## Пример

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    printf("Player %d left a race checkpoint!", playerid);
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Овај повратни позив се позива када играч уђе у контролну тачку.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Овај повратни позив се позива када играч напусти контролну тачку.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Овај повратни позив се позива када играч уђе у тркачку контролу тачку. 

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Креирај контролну тачку за играча.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Онемогући тренутну контролну тачку играча.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Провери да ли се играч налази у контрольној тачки.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Креирај тркачку контролу тачку за играча.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Онемогући тренутну тркачку контролу тачку играча.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Провери да ли се играч налази у тркачкој контролној тачки.