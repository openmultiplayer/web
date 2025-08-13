---
title: SetPlayerPickupModel
sidebar_label: SetPlayerPickupModel
description: model یک player pickup رو تنظیم می‌کنه.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

model یک player pickup رو تنظیم می‌کنه.

| نام                | توضیحات                                           |
|--------------------|---------------------------------------------------|
| playerid           | ID بازیکن.                                        |
| pickupid           | ID player pickup.                                |
| model              | [model](../resources/pickupids) که باید تنظیم بشه. |
| bool:update = true | بروزرسانی pickup برای بازیکن. (true/false)        |

## مقدار برگشتی

این تابع همیشه **true** برمی‌گردونه.

## مثال‌ها

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    
    SetPlayerPickupModel(playerid, PlayerPickup[playerid], 1210);
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerPickup](CreatePlayerPickup): ساخت یک pickup که فقط برای یک بازیکن قابل مشاهده هست.
- [DestroyPlayerPickup](DestroyPlayerPickup): از بین بردن یک player pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): بررسی اینکه آیا یک player pickup معتبر هست یا نه.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): بررسی اینکه آیا یک player pickup برای بازیکن stream شده یا نه.
- [SetPlayerPickupPos](SetPlayerPickupPos): تنظیم موقعیت یک player pickup.
- [GetPlayerPickupPos](GetPlayerPickupPos): گرفتن مختصات یک player pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): گرفتن ID model یک player pickup.
- [SetPlayerPickupType](SetPlayerPickupType): تنظیم نوع یک player pickup.
- [GetPlayerPickupType](GetPlayerPickupType): گرفتن نوع یک player pickup.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): تنظیم ID virtual world یک player pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): گرفتن ID virtual world یک player pickup.