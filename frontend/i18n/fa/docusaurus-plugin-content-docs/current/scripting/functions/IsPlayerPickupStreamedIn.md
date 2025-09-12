---
title: IsPlayerPickupStreamedIn
sidebar_label: IsPlayerPickupStreamedIn
description: چک می‌کنه که آیا یه player-pickup برای بازیکن stream شده یا نه.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه player-pickup برای بازیکن stream شده یا نه.

| نام      | توضیحات                      |
|----------|------------------------------|
| playerid | ID بازیکن.                    |
| pickupid | ID player-pickup.            |

## مقادیر برگشتی

این تابع **true** برمی‌گردونه اگه player-pickup برای بازیکن stream شده باشه، یا **false** اگه نشده باشه.

## مثال‌ها

```c
new PlayerPickup[MAX_PLAYERS]; // Create a variable to store the player-pickup ID in

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1242, 2, 2010.0979, 1222.0642, 10.8206, -1);
    // Create an armour pickup and store the ID in 'PlayerPickup[playerid]'
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerPickupStreamedIn(playerid, PlayerPickup[playerid]))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerPickup](CreatePlayerPickup): ساخت یه pickup که فقط برای یه بازیکن قابل مشاهده هست.
- [DestroyPlayerPickup](DestroyPlayerPickup): نابود کردن یه player-pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): چک می‌کنه که آیا یه player-pickup معتبره یا نه.
- [SetPlayerPickupPos](SetPlayerPickupPos): موقعیت یه player-pickup رو تنظیم می‌کنه.
- [GetPlayerPickupPos](GetPlayerPickupPos): مختصات یه player-pickup رو دریافت می‌کنه.
- [SetPlayerPickupModel](SetPlayerPickupModel): مدل یه player-pickup رو تنظیم می‌کنه.
- [GetPlayerPickupModel](GetPlayerPickupModel): ID مدل یه player-pickup رو دریافت می‌کنه.
- [SetPlayerPickupType](SetPlayerPickupType): نوع یه player-pickup رو تنظیم می‌کنه.
- [GetPlayerPickupType](GetPlayerPickupType): نوع یه player-pickup رو دریافت می‌کنه.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): ID دنیای مجازی یه player-pickup رو تنظیم می‌کنه.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): ID دنیای مجازی یه player-pickup رو دریافت می‌کنه.