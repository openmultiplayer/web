---
title: OnPickupStreamOut
sidebar_label: OnPickupStreamOut
description: این کالبک زمانی فراخوانده می‌شود که یک pickup از محدوده دید بازیکن خارج شود.
tags: ["player"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک pickup از محدوده دید بازیکن خارج شود.

| نام | توضیحات |
| -------- | --------------------------------------------------------------------------- |
| pickupid | شناسه pickup، برگردانده شده توسط [CreatePickup](../functions/CreatePickup) |
| playerid | شناسه بازیکنی که pickup از محدوده دید آن خارج می‌شود. |

## مقادیر برگشتی

این همیشه ابتدا در گیم مود فراخوانده می‌شود.

## مثال‌ها

```c
new g_PickupHealth;

public OnGameModeInit()
{
    g_PickupHealth = CreatePickup(1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PickupHealth)
    {
        printf("g_PickupHealth is streamed out for player id %d", playerid);
    }
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [OnPlayerPickUpPickup](OnPlayerPickUpPickup): زمانی فراخوانده می‌شود که بازیکن یک pickup بردارد.
- [OnPickupStreamIn](OnPickupStreamIn): زمانی فراخوانده می‌شود که یک pickup وارد محدوده دید بازیکن شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [CreatePickup](../functions/CreatePickup): ایجاد یک pickup.
- [DestroyPickup](../functions/DestroyPickup): نابود کردن یک pickup.