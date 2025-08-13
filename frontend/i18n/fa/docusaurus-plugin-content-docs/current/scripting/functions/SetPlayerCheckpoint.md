---
title: SetPlayerCheckpoint
sidebar_label: SetPlayerCheckpoint
description: یک checkpoint (استوانه قرمز) برای پلیر تنظیم می‌کنه.
tags: ["player", "checkpoint"]
---

## توضیحات

یک checkpoint (استوانه قرمز) برای پلیر تنظیم می‌کنه. همچنین یک نقطه قرمز در رادار نشون می‌ده. وقتی پلیر وارد checkpoint می‌شه، OnPlayerEnterCheckpoint فراخوانی می‌شه و می‌تونی اکشن‌های مختلفی انجام بدی.

| نام           | توضیحات                                    |
| ------------- | ------------------------------------------ |
| playerid      | آیدی پلیری که قراره checkpoint براش تنظیم بشه |
| Float:centreX | مختصات X برای تنظیم checkpoint               |
| Float:centreY | مختصات Y برای تنظیم checkpoint               |
| Float:centreZ | مختصات Z برای تنظیم checkpoint               |
| Float:radius  | اندازه checkpoint                           |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. یعنی پلیر مشخص شده وجود نداره.

## مثال‌ها

```c
// dar in mesal checkpoint e player vaghti spawn mishe set mishe.
// vaghti vared checkpoint beshe 1000$ daryaft mikone va checkpoint khamos mishe.

new bool:gOnCheck[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    gOnCheck[playerid] = true;
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    if (gOnCheck[playerid]) // agar true bashe
    {
        GivePlayerMoney(playerid, 1000);
        DisablePlayerCheckpoint(playerid);
        gOnCheck[playerid] = false;
    }
    return 1;
}
```

## نکات

:::warning

Checkpoint ها asynchronous هستن، یعنی فقط یکی رو می‌تونی یه موقع نشون بدی. برای 'stream' کردن checkpoint ها (فقط موقعی نشونشون بدی که پلیر نزدیک باشه)، از checkpoint streamer استفاده کن.

:::

## توابع مرتبط

- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): checkpoint فعلی پلیر رو غیرفعال می‌کنه.
- [GetPlayerCheckpoint](GetPlayerCheckpoint): موقعیت checkpoint فعلی رو دریافت می‌کنه.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): چک می‌کنه که آیا پلیر در checkpoint هست یا نه.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): چک می‌کنه که آیا پلیر الان checkpoint قابل مشاهده داره یا نه.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): یک race checkpoint برای پلیر می‌سازه.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): race checkpoint فعلی پلیر رو غیرفعال می‌کنه.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): چک می‌کنه که آیا پلیر در race checkpoint هست یا نه.

## Callback های مرتبط

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): وقتی پلیر وارد checkpoint می‌شه فراخوانی می‌شه.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): وقتی پلیر از checkpoint خارج می‌شه فراخوانی می‌شه.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): وقتی پلیر وارد race checkpoint می‌شه فراخوانی می‌شه.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): وقتی پلیر از race checkpoint خارج می‌شه فراخوانی می‌شه.