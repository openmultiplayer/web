---
title: OnPlayerExitVehicle
sidebar_label: OnPlayerExitVehicle
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن شروع به خروج از وسیله نقلیه کند.
tags: ["player", "vehicle"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن شروع به خروج از وسیله نقلیه کند.

| نام       | توضیحات                                          |
| --------- | ----------------------------------------------- |
| playerid  | شناسه بازیکنی که از وسیله نقلیه خارج می‌شود.   |
| vehicleid | شناسه وسیله نقلیه‌ای که بازیکن از آن خارج می‌شود. |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new string[64];
    format(string, sizeof(string), "INFO: You are exiting vehicle %i", vehicleid);
    SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
}
```

## نکته‌ها

:::warning

- اگر بازیکن از موتورسیکلت بیفتد یا به وسایل دیگری مثل استفاده از [SetPlayerPos](../functions/SetPlayerPos) از وسیله نقلیه حذف شود، فراخوانده نمی‌شود.
- باید از [OnPlayerStateChange](OnPlayerStateChange) استفاده کنید و بررسی کنید که آیا وضعیت قبلی آن‌ها `PLAYER_STATE_DRIVER` یا `PLAYER_STATE_PASSENGER` و وضعیت جدید آن‌ها `PLAYER_STATE_ONFOOT` است.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerEnterVehicle](OnPlayerEnterVehicle): این کالبک زمانی فراخوانده می‌شود که بازیکن شروع به ورود به وسیله نقلیه کند.
- [OnPlayerStateChange](OnPlayerStateChange): این کالبک زمانی فراخوانده می‌شود که وضعیت بازیکن تغییر کند.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle): پرتاب کردن بازیکن از وسیله نقلیه‌اش.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat): بررسی اینکه بازیکن در کدام صندلی قرار دارد.