---
title: GetPlayerPickupPos
sidebar_label: GetPlayerPickupPos
description: دریافت مختصات یک player-pickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت مختصات یک player-pickup.

| نام     | توضیحات                                                               |
|----------|---------------------------------------------------------------------------|
| playerid | ID بازیکن.                                                     |
| pickupid | ID player-pickup برای دریافت موقعیتش.                       |
| &Float:x | متغیر float برای ذخیره مختصات x، به صورت reference پاس داده می‌شود. |
| &Float:y | متغیر float برای ذخیره مختصات y، به صورت reference پاس داده می‌شود. |
| &Float:z | متغیر float برای ذخیره مختصات z، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

این تابع مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);

    new
        Float:x,
        Float:y,
        Float:z;

    GetPickupPos(g_Pickup, x, y, z);
    // x = 2010.0979
    // y = 1222.0642
    // z = 10.8206
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerPickup](CreatePlayerPickup): ایجاد pickup که فقط برای یک بازیکن قابل مشاهده است.
- [DestroyPlayerPickup](DestroyPlayerPickup): نابود کردن player-pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): بررسی اینکه آیا player-pickup معتبر است.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): بررسی اینکه آیا player-pickup برای بازیکن stream شده است.
- [SetPlayerPickupPos](SetPlayerPickupPos): تنظیم موقعیت player-pickup.
- [SetPlayerPickupModel](SetPlayerPickupModel): تنظیم مدل player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): دریافت ID مدل player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): تنظیم نوع player-pickup.
- [GetPlayerPickupType](GetPlayerPickupType): دریافت نوع player-pickup.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): تنظیم ID دنیای مجازی player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): دریافت ID دنیای مجازی player-pickup.