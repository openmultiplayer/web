---
title: SetPlayerCheckpoint
description: Поставља checkpoint (црвени круг) за играча.
tags: ["player", "checkpoint"]
---

## Опис

Поставља checkpoint (црвени круг) за играча. Такође приказује црвену коцку на мапи. Када играч уђе у checkpoint, OnPlayerEnterCheckpoint се позива и извршава оно што је у њему.

| ИМе        | Опис                                   |
| ---------- | -------------------------------------- |
| playerid   | ID igraca kome se postavlja checkpoint |
| Float:x    | X koordinata checkpointa.              |
| Float:y    | Y koordinata checkpointa.              |
| Float:z    | Z koordinata checkpointa.              |
| Float:size | Velicina checkpointa                   |

## Враћа

**true** - Функција је успешно извршена.

**false** - Функција није успешно извршена. То значи да наведени играч не постоји.

## Пример

```c
// У овом примеру се checkpoint поставља када се играч спаун-ује
// Када уђу у checkpoint, добијају 1000$ и checkpoint се гаси

new bool: gOnCheck[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    gOnCheck[playerid] = true;
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    if (gOnCheck[playerid]) // Ако је услов испуњен
    {
        GivePlayerMoney(playerid, 1000);
        DisablePlayerCheckpoint(playerid);
        gOnCheck[playerid] = false;
    }
    return 1;
}
```

## Белешке

:::warning

Checkpoint-ови су асинхрони, што значи да се само један може приказати у исто време. Да бисте „стримовали“ checkpoint-ове (да их приказујете само када су играчи довољно близу), користите стример за checkpoint-ове.

:::


## Повезане функције

- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Искључи тренутни checkpoint играча.
- [GetPlayerCheckpoint](GetPlayerCheckpoint): Добави локацију тренутног checkpoint-а.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Провери да ли је играч у checkpoint-у.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Провери да ли играч тренутно има видљив checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Креирај тркачки checkpoint за играча.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Искључи тренутни тркачки checkpoint играча.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Провери да ли је играч у рацинг checkpoint-у.

## Слични callback-ови

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Позива се када играч уђе у checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Позива се када играч напусти checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Позива се када играч уђе у тркачки checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Позива се када играч напусти тркачки checkpoint.
