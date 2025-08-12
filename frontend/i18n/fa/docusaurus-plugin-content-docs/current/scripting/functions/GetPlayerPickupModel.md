---
title: GetPlayerPickupModel
sidebar_label: GetPlayerPickupModel
description: دریافت ID مدل یک player-pickup.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت ID مدل یک player-pickup.

| نام     | توضیحات                                         |
|----------|-----------------------------------------------------|
| playerid | ID بازیکن.                               |
| pickupid | ID player-pickup برای دریافت ID مدلش. |

## مقادیر برگشتی

ID مدل player-pickup را برمی‌گرداند.

## مثال‌ها

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, -1);

    new model = GetPlayerPickupModel(playerid, PlayerPickup[playerid]);
    // model = 1239
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerPickup](CreatePlayerPickup): ایجاد pickup که فقط برای یک بازیکن قابل مشاهده است.
- [DestroyPlayerPickup](DestroyPlayerPickup): نابود کردن player-pickup.
- [IsValidPlayerPickup](IsValidPlayerPickup): بررسی اینکه آیا player-pickup معتبر است.
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): بررسی اینکه آیا player-pickup برای بازیکن stream شده است.
- [SetPlayerPickupPos](SetPlayerPickupPos): تنظیم موقعیت player-pickup.
- [GetPlayerPickupPos](GetPlayerPickupPos): دریافت مختصات player-pickup.
- [SetPlayerPickupModel](SetPlayerPickupModel): تنظیم مدل player-pickup.
- [SetPlayerPickupType](SetPlayerPickupType): تنظیم نوع player-pickup.
- [GetPlayerPickupType](GetPlayerPickupType): دریافت نوع player-pickup.
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): تنظیم ID دنیای مجازی player-pickup.
- [GetPlayerPickupVirtualWorld](GetPlayerPickupVirtualWorld): دریافت ID دنیای مجازی player-pickup.