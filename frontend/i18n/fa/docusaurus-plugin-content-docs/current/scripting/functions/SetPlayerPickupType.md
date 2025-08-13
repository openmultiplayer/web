---
title: SetPlayerPickupType
sidebar_label: SetPlayerPickupType
description: نوع یک player pickup رو تنظیم می‌کنه.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

نوع یک player pickup رو تنظیم می‌کنه.

| نام                | توضیحات                                            |
|--------------------|-----------------------------------------------------|
| playerid           | ID بازیکن.                                         |
| pickupid           | ID player pickup.                                  |
| type               | [نوع pickup](../resources/pickuptypes) که باید تنظیم بشه. |
| bool:update = true | بروزرسانی pickup برای بازیکن. (true/false)         |

## مقدار برگشتی

این تابع همیشه **true** برمی‌گردونه.

## مثال‌ها

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 1, 2010.0979, 1222.0642, 10.8206, -1);
    
    SetPlayerPickupType(playerid, PlayerPickup[playerid], 2);
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
- [SetPlayerPickupModel](SetPlayerPickupModel): تنظیم model یک player pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): گرفتن ID model یک player pickup.
- [GetPlayerPickupType](GetPlayerPickupType): گرفتن نوع یک player pickup.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): تنظیم ID virtual world یک player pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): گرفتن ID virtual world یک player pickup.