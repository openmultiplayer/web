---
title: IsPlayerInRaceCheckpoint
sidebar_label: IsPlayerInRaceCheckpoint
description: چک می‌کنه که آیا بازیکن داخل race checkpoint فعلی تنظیم شده‌ش هست یا نه (SetPlayerRaceCheckpoint).
tags: ["player", "checkpoint", "racecheckpoint"]
---

## توضیحات

چک می‌کنه که آیا بازیکن داخل race checkpoint فعلی تنظیم شده‌ش هست یا نه (SetPlayerRaceCheckpoint).

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

**true** - بازیکن در race checkpoint هست.

**false** - بازیکن در race checkpoint نیست.

## مثال‌ها

```c
if (IsPlayerInRaceCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```

## توابع مرتبط

- [SetPlayerCheckpoint](SetPlayerCheckpoint): ساخت یه checkpoint برای بازیکن.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): چک کردن اینکه آیا بازیکن در حال حاضر یه race checkpoint قابل مشاهده داره یا نه.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): غیرفعال کردن checkpoint فعلی بازیکن.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): چک کردن اینکه بازیکن در checkpoint هست یا نه.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): ساخت یه race checkpoint برای بازیکن.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): غیرفعال کردن race checkpoint فعلی بازیکن.

## callback های مرتبط

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): وقتی بازیکن وارد checkpoint می‌شه فراخوانی می‌شه.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): وقتی بازیکن از checkpoint خارج می‌شه فراخوانی می‌شه.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): وقتی بازیکن وارد race checkpoint می‌شه فراخوانی می‌شه.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): وقتی بازیکن از race checkpoint خارج می‌شه فراخوانی می‌شه.