---
title: OnPlayerEnterCheckpoint
sidebar_label: OnPlayerEnterCheckpoint
description: Ова функција се позива када играч уђе у контролни поен постављен за тог играча.
tags: ["player", "checkpoint"]
---

## Опис

Ова функција се позива када играч уђе у контролни поен постављен за тог играча.

| Име      | Опис                                    |
| -------- | --------------------------------------- |
| playerid | Играч који је ушао у чекпоинт(к. поен). |

## Враћа

Увек се зове прво у филтер скрипти.

## Пример

```c
//У овом примеру, контролни поен се креира за играча при појављивању,
//што креира возило и онемогућава контролни поен.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): Ова функција се позива када играч изађе из контролног поена.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Ова функција се позива када играч уђе у тркачки контролни поен.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Ова функција се позива када играч изађе из тркачког контролног поена.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Креирајте контролни поен за играча.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Онемогућите тренутни контролни поен играча.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Проверавајте да ли је играч у контролном поену.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Креирајте тркачки контролни поен за играча.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Онемогућите тренутни тркачки контролни поен играча.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Проверавајте да ли је играч у тркачком контролном поену.
