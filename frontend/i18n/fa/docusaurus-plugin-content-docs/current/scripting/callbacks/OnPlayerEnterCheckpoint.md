---
title: OnPlayerEnterCheckpoint
sidebar_label: OnPlayerEnterCheckpoint
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن وارد چک‌پوینت تعیین شده برای آن بازیکن شود.
tags: ["player", "checkpoint"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن وارد چک‌پوینت تعیین شده برای آن بازیکن شود.

| نام      | توضیحات                               |
| -------- | -------------------------------------- |
| playerid | بازیکنی که وارد چک‌پوینت شده است.     |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
//In this example, a checkpoint is created for the player when spawning,
//which creates a vehicle and disables the checkpoint.
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

## نکته‌ها

<TipNPCCallbacks />

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): این کالبک زمانی فراخوانده می‌شود که بازیکن از چک‌پوینت خارج شود.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): این کالبک زمانی فراخوانده می‌شود که بازیکن وارد یک race checkpoint شود.
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): این کالبک زمانی فراخوانده می‌شود که بازیکن از یک race checkpoint خارج شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): ایجاد یک چک‌پوینت برای بازیکن.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): غیرفعال کردن چک‌پوینت فعلی بازیکن.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): بررسی اینکه آیا بازیکن در چک‌پوینت است یا نه.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): ایجاد یک race checkpoint برای بازیکن.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): غیرفعال کردن race checkpoint فعلی بازیکن.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): بررسی اینکه آیا بازیکن در race checkpoint است یا نه.