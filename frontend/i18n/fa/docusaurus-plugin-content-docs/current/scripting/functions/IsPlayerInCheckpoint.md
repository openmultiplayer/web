---
title: IsPlayerInCheckpoint
sidebar_label: IsPlayerInCheckpoint
description: چک می‌کنه که آیا بازیکن در حال حاضر داخل یه checkpoint هست یا نه، این می‌تونه برای املاک یا نقاط teleport استفاده بشه.
tags: ["player", "checkpoint"]
---

## توضیحات

چک می‌کنه که آیا بازیکن در حال حاضر داخل یه checkpoint هست یا نه، این می‌تونه برای املاک یا نقاط teleport استفاده بشه.

| نام      | توضیحات                                     |
| -------- | ------------------------------------------- |
| playerid | بازیکنی که می‌خوای وضعیتش رو بدونی.         |

## مقادیر برگشتی

**false** اگه بازیکن داخل checkpoint نباشه، وگرنه **true**

## مثال‌ها

```c
if (IsPlayerInCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```

## توابع مرتبط

- [SetPlayerCheckpoint](SetPlayerCheckpoint): ساخت یه checkpoint برای بازیکن.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): چک کردن اینکه آیا بازیکن در حال حاضر یه checkpoint قابل مشاهده داره یا نه.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): غیرفعال کردن checkpoint فعلی بازیکن.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): ساخت یه race checkpoint برای بازیکن.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): غیرفعال کردن race checkpoint فعلی بازیکن.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): چک کردن اینکه بازیکن در race checkpoint هست یا نه.

## callback های مرتبط

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): وقتی بازیکن وارد checkpoint می‌شه فراخوانی می‌شه.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): وقتی بازیکن از checkpoint خارج می‌شه فراخوانی می‌شه.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): وقتی بازیکن وارد race checkpoint می‌شه فراخوانی می‌شه.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): وقتی بازیکن از race checkpoint خارج می‌شه فراخوانی می‌شه.