---
title: DestroyPlayerPickup
sidebar_label: DestroyPlayerPickup
description: پیکاپ بازیکن ایجاد شده با CreatePlayerPickup را نابود می‌کند.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

پیکاپ بازیکن ایجاد شده با [CreatePlayerPickup](CreatePlayerPickup) را نابود می‌کند.

| نام     | توضیحات                                                                    |
|----------|---------------------------------------------------------------------------|
| playerid | شناسه بازیکن.                                                              |
| pickupid | شناسه پیکاپ بازیکن برای نابودی (توسط CreatePlayerPickup برگردانده شده). |

## مقادیر بازگشتی

این تابع مقدار مشخصی برنمی‌گرداند.

## مثال‌ها

```c
new PlayerPickupArmour[MAX_PLAYERS]; // ایجاد متغیر برای ذخیره شناسه پیکاپ بازیکن

public OnPlayerConnect(playerid)
{
    PlayerPickupArmour[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // ایجاد پیکاپ زره و ذخیره شناسه در 'PlayerPickupArmour[playerid]'
    return 1;
}

// مدتی بعد...
DestroyPlayerPickup(playerid, PlayerPickupArmour[playerid]);
```

## توابع مرتبط

- [CreatePlayerPickup](CreatePlayerPickup): ایجاد پیکاپی که فقط برای یک بازیکن قابل مشاهده باشد.
- [IsValidPlayerPickup](IsValidPlayerPickup): بررسی معتبر بودن پیکاپ بازیکن.

## کال‌بک‌های مرتبط

- [OnPlayerPickUpPlayerPickup](../callbacks/OnPlayerPickUpPlayerPickup): زمانی فراخوانی می‌شود که بازیکن پیکاپ بازیکن را برداشت.