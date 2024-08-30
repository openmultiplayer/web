---
title: OnPlayerEnterRaceCheckpoint
description: Ова функција се позива када играч уђе у тркачки контролни поен.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Опис

Ова функција се позива када играч уђе у тркачки контролни поен.

| Име      | Опис                                                  |
| -------- | ----------------------------------------------------- |
| playerid | ИД играча који је ушао у тркачки контролни поен.      |

## Враћа

Увек се прво позива у филтерскриптима.

## Пример

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Player %d entered a race checkpoint!", playerid);
    return 1;
}
```

## Белешке

<TipNPCCallbacks />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Ова функција се позива када играч уђе у контролни поен.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Ова функција се позива када играч изађе из контролног поена.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Ова функција се позива када играч изађе из тркачког контролног поена.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Креирајте контролни поен за играча.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Онемогућите тренутни контролни поен играча.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Проверавајте да ли је играч у контролном поену.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Креирајте тркачки контролни поен за играча.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Онемогућите тренутни тркачки контролни поен играча.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Проверавајте да ли је играч у тркачком контролном поену.
