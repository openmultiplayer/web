---
title: DisablePlayerCheckpoint
sidebar_label: DisablePlayerCheckpoint
description: چک‌پوینت تنظیم شده بازیکن را غیرفعال (مخفی/نابود) می‌کند.
tags: ["player", "checkpoint"]
---

## توضیحات

چک‌پوینت تنظیم شده بازیکن را غیرفعال (مخفی/نابود) می‌کند. بازیکنان فقط می‌توانند یک چک‌پوینت در یک زمان تنظیم کنند. چک‌پوینت‌ها نیازی به غیرفعال شدن قبل از تنظیم چک‌پوینت دیگر ندارند.

| نام     | توضیحات                                          |
| -------- | ------------------------------------------------ |
| playerid | شناسه بازیکنی که چک‌پوینت او باید غیرفعال شود. |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد. موفقیت حتی در صورتی که بازیکن از قبل چک‌پوینتی نداشته باشد نیز برگردانده می‌شود.

**false** - تابع در اجرا ناموفق بود. این بدان معناست که بازیکن متصل نیست.

## مثال‌ها

```c
public OnPlayerEnterCheckpoint(playerid)
{
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## توابع مرتبط

- [SetPlayerCheckpoint](SetPlayerCheckpoint): ایجاد چک‌پوینت برای بازیکن.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): بررسی قرارگیری بازیکن در چک‌پوینت.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): بررسی اینکه آیا بازیکن در حال حاضر چک‌پوینت قابل مشاهده دارد یا نه.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): ایجاد چک‌پوینت مسابقه برای بازیکن.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): غیرفعال کردن چک‌پوینت مسابقه فعلی بازیکن.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): بررسی قرارگیری بازیکن در چک‌پوینت مسابقه.

## کال‌بک‌های مرتبط

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): زمانی فراخوانی می‌شود که بازیکن وارد چک‌پوینت شود.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): زمانی فراخوانی می‌شود که بازیکن از چک‌پوینت خارج شود.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): زمانی فراخوانی می‌شود که بازیکن از چک‌پوینت مسابقه خارج شود.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): زمانی فراخوانی می‌شود که بازیکن وارد چک‌پوینت مسابقه شود.