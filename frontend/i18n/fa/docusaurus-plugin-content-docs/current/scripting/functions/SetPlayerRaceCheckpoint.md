---
title: SetPlayerRaceCheckpoint
sidebar_label: SetPlayerRaceCheckpoint
description: یک race checkpoint می‌سازه.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## توضیحات

یک race checkpoint می‌سازه. وقتی پلیر وارد اون می‌شه، callback OnPlayerEnterRaceCheckpoint فراخوانی می‌شه.

| نام           | توضیحات                                                           |
|---------------|--------------------------------------------------------------------|
| playerid      | آیدی پلیری که قراره checkpoint براش تنظیم بشه                       |
| CP_TYPE:type  | [نوع race checkpoint](../resources/race-checkpoint-types)          |
| Float:centreX | مختصات X                                                          |
| Float:centreY | مختصات Y                                                          |
| Float:centreZ | مختصات Z                                                          |
| Float:nextX   | مختصات X نقطه بعدی، برای جهت پیکان                                |
| Float:nextY   | مختصات Y نقطه بعدی، برای جهت پیکان                                |
| Float:nextZ   | مختصات Z نقطه بعدی، برای جهت پیکان                                |
| Float:radius  | اندازه (قطر) checkpoint                                           |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. یعنی پلیر مشخص شده وجود نداره.

## مثال‌ها

```c
SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 644.3091, 1767.0223, 4.9970, 650.6734, 1812.0367, 4.9970, 3.0);
```

مثال دیگه:

```c
//az race filterscript e Yagu, (c) tosse Yagu
public SetRaceCheckpoint(playerid, Airrace, target, next)
{
    if (next == -1 && Airrace == 0)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);
    }
    else if (next == -1 && Airrace == 1)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);
    }
    else if (Airrace == 1)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);
    }
    else
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);
    }
}
```

## نکات

:::warning

Race checkpoint ها asynchronous هستن، یعنی فقط یکی رو می‌تونی یه موقع نشون بدی. برای 'stream' کردن race checkpoint ها (فقط موقعی نشونشون بدی که پلیر ها نزدیک باشن)، از race checkpoint streamer استفاده کن.

:::

## توابع مرتبط

- [SetPlayerCheckpoint](SetPlayerCheckpoint): یک checkpoint برای پلیر می‌سازه.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): checkpoint فعلی پلیر رو غیرفعال می‌کنه.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): چک می‌کنه که آیا پلیر در checkpoint هست یا نه.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): race checkpoint فعلی پلیر رو غیرفعال می‌کنه.
- [GetPlayerRaceCheckpoint](GetPlayerRaceCheckpoint): موقعیت race checkpoint فعلی رو دریافت می‌کنه.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): چک می‌کنه که آیا پلیر در race checkpoint هست یا نه.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): چک می‌کنه که آیا پلیر الان race checkpoint قابل مشاهده داره یا نه.

## Callback های مرتبط

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): وقتی پلیر وارد checkpoint می‌شه فراخوانی می‌شه.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): وقتی پلیر از checkpoint خارج می‌شه فراخوانی می‌شه.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): وقتی پلیر وارد race checkpoint می‌شه فراخوانی می‌شه.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): وقتی پلیر از race checkpoint خارج می‌شه فراخوانی می‌شه.

## منابع مرتبط

- [انواع race checkpoint ها](../resources/race-checkpoint-types).