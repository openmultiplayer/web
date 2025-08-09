---
title: OnPlayerLeaveCheckpoint
sidebar_label: OnPlayerLeaveCheckpoint
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن از چک‌پوینت تعیین شده توسط SetPlayerCheckpoint خارج شود.
tags: ["player", "checkpoint"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن از چک‌پوینت تعیین شده توسط [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint) خارج شود. فقط یک چک‌پوینت می‌تواند در یک زمان تنظیم شود.

| نام      | توضیحات                                          |
| -------- | ------------------------------------------------ |
| playerid | شناسه بازیکنی که از چک‌پوینت خود خارج شده است.   |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Player %i left a checkpoint!", playerid);
    return 1;
}
```

## نکته‌ها

<TipNPCCallbacks />

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): این کالبک زمانی فراخوانده می‌شود که بازیکن وارد چک‌پوینت شود.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): این کالبک زمانی فراخوانده می‌شود که بازیکن وارد race checkpoint شود.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): این کالبک زمانی فراخوانده می‌شود که بازیکن از race checkpoint خارج شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): ایجاد یک چک‌پوینت برای بازیکن.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): غیرفعال کردن چک‌پوینت فعلی بازیکن.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): بررسی اینکه آیا بازیکن در چک‌پوینت است یا نه.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): ایجاد یک race checkpoint برای بازیکن.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): غیرفعال کردن race checkpoint فعلی بازیکن.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): بررسی اینکه آیا بازیکن در race checkpoint است یا نه.