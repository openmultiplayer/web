---
title: IsValidPlayerPickup
sidebar_label: IsValidPlayerPickup
description: چک می‌کنه که آیا یه player-pickup معتبره یا نه.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه player-pickup معتبره یا نه.

| نام      | توضیحات                               |
|----------|---------------------------------------|
| playerid | ID بازیکن.                            |
| pickupid | ID player-pickup که باید چک بشه.     |

## مقادیر برگشتی

این تابع **true** برمی‌گردونه اگه player-pickup معتبر باشه، یا **false** اگه نباشه.

## مثال‌ها

```c
new PlayerPickup[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Create an armour pickup and store the ID in 'PlayerPickup[playerid]'

    if (IsValidPlayerPickup(playerid, PlayerPickup[playerid]))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerPickup](./CreatePlayerPickup): ساخت یه pickup که فقط برای یه بازیکن قابل دیدن هست.
- [DestroyPlayerPickup](DestroyPlayerPickup): نابود کردن یه player-pickup.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): چک کردن اینکه player-pickup برای بازیکن stream شده یا نه.
- [SetPlayerPickupPos](SetPlayerPickupPos): تنظیم موقعیت یه player-pickup.
- [GetPlayerPickupPos](GetPlayerPickupPos): دریافت مختصات یه player-pickup.
- [SetPlayerPickupModel](SetPlayerPickupModel): تنظیم model یه player-pickup.
- [GetPlayerPickupModel](GetPlayerPickupModel): دریافت ID model یه player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): تنظیم نوع یه player-pickup.
- [GetPlayerPickupType](GetPlayerPickupType): دریافت نوع یه player-pickup.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): تنظیم ID virtual world یه player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): دریافت ID virtual world یه player-pickup.