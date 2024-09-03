---
title: OnPlayerLeaveCheckpoint
description: Ова повратна функција се позива када играч напусти контролну тачку коју је поставио SetPlayerCheckpoint.
tags: ["player", "checkpoint"]
---

## Опис

Ова повратна функција се позива када играч напусти контролну тачку коју је поставио [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint). У тренутку може бити приказан само један чекпоинт.

| Име      | Опис                                             |
| -------- | ------------------------------------------------ |
| playerid | ID играча који је напустио чекпоинт.             |

## Враћа

Увек се позива прво у филтерскриптама.

## Пример

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Player %i left a checkpoint!", playerid);
    return 1;
}
```

## Белешке

<TipNPCCallbacks />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): Овај повратни позив се позива када играч уђе у контролну тачку.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): Овај повратни позив се позива када играч уђе у тркачку контролну тачку.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): Овај повратни позив се позива када играч напусти тркачку контролну тачку.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Креирајте контролну тачку за играча.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Онемогућите тренутну контролну тачку играча.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Проверите да ли је играч у контролној тачки.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Креирајте тркачку контролну тачку за играча.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Онемогућите тренутну тркачку контролну тачку играча.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Проверите да ли је играч у тркачкој контролној тачки.
