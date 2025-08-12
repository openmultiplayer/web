---
title: OnPlayerEnterRaceCheckpoint
sidebar_label: OnPlayerEnterRaceCheckpoint
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن وارد یک race checkpoint شود.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن وارد یک race checkpoint شود.

| نام      | توضیحات                                           |
| -------- | ----------------------------------------------------- |
| playerid | شناسه بازیکنی که وارد race checkpoint شده است.     |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Player %d entered a race checkpoint!", playerid);
    return 1;
}
```

## نکته‌ها

<TipNPCCallbacks />

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): این کالبک زمانی فراخوانده می‌شود که بازیکن وارد چک‌پوینت شود.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): این کالبک زمانی فراخوانده می‌شود که بازیکن از چک‌پوینت خارج شود.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): این کالبک زمانی فراخوانده می‌شود که بازیکن از race checkpoint خارج شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): ایجاد یک چک‌پوینت برای بازیکن.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): غیرفعال کردن چک‌پوینت فعلی بازیکن.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): بررسی اینکه آیا بازیکن در چک‌پوینت است یا نه.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): ایجاد یک race checkpoint برای بازیکن.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): غیرفعال کردن race checkpoint فعلی بازیکن.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): بررسی اینکه آیا بازیکن در race checkpoint است یا نه.