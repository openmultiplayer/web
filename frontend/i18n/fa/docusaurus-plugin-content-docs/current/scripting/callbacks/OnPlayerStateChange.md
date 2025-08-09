---
title: OnPlayerStateChange
sidebar_label: OnPlayerStateChange
description: این کالبک زمانی فراخوانده می‌شود که بازیکن وضعیت تغییر می‌دهد.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن وضعیت تغییر می‌دهد. برای مثال، وقتی بازیکن از راننده بودن وسیله نقلیه به پیاده بودن تغییر وضعیت می‌دهد.

| نام                  | توضیحات                              |
| --------------------- | ---------------------------------------- |
| playerid              | شناسه بازیکنی که وضعیت تغییر کرده. |
| PLAYER_STATE:newstate | وضعیت جدید بازیکن.                  |
| PLAYER_STATE:oldstate | وضعیت قبلی بازیکن.             |

برای لیست تمام وضعیت‌های موجود بازیکن به [وضعیت‌های بازیکن](../resources/playerstates) مراجعه کنید.

## مقادیر برگشتی

همیشه ابتدا در فیلتراسکریپت‌ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (oldstate == PLAYER_STATE_ONFOOT && newstate == PLAYER_STATE_DRIVER) // Player entered a vehicle as a driver
    {
        new vehicleid = GetPlayerVehicleID(playerid);
        AddVehicleComponent(vehicleid, 1010); // Add NOS to the vehicle
    }
    return 1;
}
```

## نکته‌ها

<TipNPCCallbacks />

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [OnPlayerInteriorChange](OnPlayerInteriorChange): این کالبک زمانی فراخوانده می‌شود که بازیکن داخلی تغییر می‌دهد.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [GetPlayerState](../functions/GetPlayerState): دریافت وضعیت فعلی بازیکن.
- [GetPlayerSpecialAction](../functions/GetPlayerSpecialAction): دریافت عملیات ویژه فعلی بازیکن.
- [SetPlayerSpecialAction](../functions/SetPlayerSpecialAction): تنظیم عملیات ویژه بازیکن.

## منابع مرتبط

- [وضعیت‌های بازیکن](../resources/playerstates)