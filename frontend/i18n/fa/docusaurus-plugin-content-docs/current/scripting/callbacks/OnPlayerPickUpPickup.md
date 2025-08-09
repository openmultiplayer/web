---
title: OnPlayerPickUpPickup
sidebar_label: OnPlayerPickUpPickup
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن pickup ایجاد شده با CreatePickup را برداشت کند.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن pickup ایجاد شده با [CreatePickup](../functions/CreatePickup) را برداشت کند.

| نام      | توضیحات                                                                  |
| -------- | --------------------------------------------------------------------------- |
| playerid | شناسه بازیکنی که pickup را برداشت کرده است.                               |
| pickupid | شناسه pickup، برگردانده شده توسط [CreatePickup](../functions/CreatePickup) |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
new pickup_Cash;
new pickup_Health;

public OnGameModeInit()
{
    pickup_Cash = CreatePickup(1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    pickup_Health = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPickup(playerid, pickupid)
{
    if (pickupid == pickup_Cash)
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == pickup_Health)
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPickupStreamIn](OnPickupStreamIn): زمانی فراخوانده می‌شود که pickup وارد محدوده دید بازیکن شود.
- [OnPickupStreamOut](OnPickupStreamOut): زمانی فراخوانده می‌شود که pickup از محدوده دید بازیکن خارج شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [CreatePickup](../functions/CreatePickup): ایجاد یک pickup.
- [DestroyPickup](../functions/DestroyPickup): حذف یک pickup.