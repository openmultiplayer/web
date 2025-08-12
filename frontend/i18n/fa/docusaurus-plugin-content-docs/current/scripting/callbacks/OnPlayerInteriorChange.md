---
title: OnPlayerInteriorChange
sidebar_label: OnPlayerInteriorChange
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن interior را تغییر دهد.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن interior را تغییر دهد. می‌تواند توسط SetPlayerInterior یا زمانی که بازیکن وارد/خارج ساختمان می‌شود فعال شود.

| نام           | توضیحات                                    |
| ------------- | -------------------------------------- |
| playerid      | شناسه بازیکنی که interior را تغییر داده.     |
| newinteriorid | interior که بازیکن اکنون در آن است.       |
| oldinteriorid | interior که بازیکن قبلاً در آن بوده است.  |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    new string[42];
    format(string, sizeof(string), "You went from interior %d to interior %d!", oldinteriorid, newinteriorid);
    SendClientMessage(playerid, COLOR_ORANGE, string);
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerStateChange](OnPlayerStateChange): این کالبک زمانی فراخوانده می‌شود که وضعیت بازیکن تغییر کند.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [SetPlayerInterior](../functions/SetPlayerInterior): تنظیم interior بازیکن.
- [GetPlayerInterior](../functions/GetPlayerInterior): دریافت interior فعلی بازیکن.
- [LinkVehicleToInterior](../functions/LinkVehicleToInterior): تغییر interior که وسیله نقلیه در آن دیده می‌شود.