---
title: SetPlayerPickupPos
sidebar_label: SetPlayerPickupPos
description: موقعیت یک player pickup رو تنظیم می‌کنه.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

موقعیت یک player pickup رو تنظیم می‌کنه.

| نام                | توضیحات                                    |
|--------------------|-------------------------------------------|
| playerid           | ID بازیکن.                                |
| pickupid           | ID player pickup.                        |
| Float:x            | مختصات x که pickup باید در اون قرار بگیره. |
| Float:y            | مختصات y که pickup باید در اون قرار بگیره. |
| Float:z            | مختصات z که pickup باید در اون قرار بگیره. |
| bool:update = true | بروزرسانی pickup برای بازیکن. (true/false) |

## مقدار برگشتی

این تابع همیشه **true** برمی‌گردونه.

## مثال‌ها

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    
    SetPlayerPickupPos(playerid, PlayerPickup[playerid], 1958.5488, 1344.9137, 15.3613);
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerPickup](CreatePlayerPickup): ساخت یک pickup که فقط برای یک بازیکن قابل مشاهده هست.
- [DestroyPlayerPickup](DestroyPlayerPickup): از بین بردن یک player pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): بررسی اینکه آیا یک player pickup معتبر هست یا نه.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): بررسی اینکه آیا یک player pickup برای بازیکن stream شده یا نه.
- [GetPlayerPickupPos](GetPlayerPickupPos): گرفتن مختصات یک player pickup.
- [SetPlayerPickupModel](SetPlayerPickupModel): تنظیم model یک player pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): گرفتن ID model یک player pickup.
- [SetPlayerPickupType](SetPlayerPickupType): تنظیم نوع یک player pickup.
- [GetPlayerPickupType](GetPlayerPickupType): گرفتن نوع یک player pickup.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): تنظیم ID virtual world یک player pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): گرفتن ID virtual world یک player pickup.