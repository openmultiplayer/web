---
title: DisablePlayerRaceCheckpoint
sidebar_label: DisablePlayerRaceCheckpoint
description: هر گونه چک‌پوینت مسابقه مقداردهی شده برای بازیکن مشخص را غیرفعال می‌کند، زیرا فقط می‌توانید یکی در هر زمان داشته باشید.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## توضیحات

هر گونه چک‌پوینت مسابقه مقداردهی شده برای بازیکن مشخص را غیرفعال می‌کند، زیرا فقط می‌توانید یکی در هر زمان داشته باشید.

| نام     | توضیحات                                               |
| -------- | ----------------------------------------------------- |
| playerid | بازیکنی که چک‌پوینت فعلی او باید غیرفعال شود.        |

## مقادیر بازگشتی

این تابع مقدار مشخصی برنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    DisablePlayerRaceCheckpoint(playerid);
    return 1;
}
```

## توابع مرتبط

- [SetPlayerCheckpoint](SetPlayerCheckpoint): ایجاد چک‌پوینت برای بازیکن.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): غیرفعال کردن چک‌پوینت فعلی بازیکن.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): بررسی قرارگیری بازیکن در چک‌پوینت.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): ایجاد چک‌پوینت مسابقه برای بازیکن.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): بررسی قرارگیری بازیکن در چک‌پوینت مسابقه.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): بررسی اینکه آیا بازیکن در حال حاضر چک‌پوینت مسابقه قابل مشاهده دارد یا نه.

## کال‌بک‌های مرتبط

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): زمانی فراخوانی می‌شود که بازیکن وارد چک‌پوینت شود.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): زمانی فراخوانی می‌شود که بازیکن از چک‌پوینت خارج شود.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): زمانی فراخوانی می‌شود که بازیکن وارد چک‌پوینت مسابقه شود.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): زمانی فراخوانی می‌شود که بازیکن از چک‌پوینت مسابقه خارج شود.