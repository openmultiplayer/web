---
title: OnPlayerPickUpPlayerPickup
sidebar_label: OnPlayerPickUpPlayerPickup
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن player-pickup ایجاد شده با CreatePlayerPickup را برداشت کند.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن player-pickup ایجاد شده با [CreatePlayerPickup](../functions/CreatePlayerPickup) را برداشت کند.

| نام      | توضیحات                                                                                       |
| -------- | ---------------------------------------------------------------------------------------------- |
| playerid | شناسه بازیکنی که player-pickup را برداشت کرده است.                                            |
| pickupid | شناسه player-pickup، برگردانده شده توسط [CreatePlayerPickup](../functions/CreatePlayerPickup) |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
new player_pickup_Cash[MAX_PLAYERS];
new player_pickup_Health[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    player_pickup_Cash[playerid] = CreatePlayerPickup(playerid, 1274, 2, 2009.8658, 1220.0293, 10.8206, -1);
    player_pickup_Health[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175, -1);
    return 1;
}

public OnPlayerPickUpPlayerPickup(playerid, pickupid)
{
    if (pickupid == player_pickup_Cash[playerid])
    {
        GivePlayerMoney(playerid, 1000);
    }
    else if (pickupid == player_pickup_Health[playerid])
    {
        SetPlayerHealth(playerid, 100.0);
    }
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): زمانی فراخوانده می‌شود که player-pickup وارد محدوده دید بازیکن شود.
- [OnPlayerPickupStreamOut](OnPlayerPickupStreamOut): زمانی فراخوانده می‌شود که player-pickup از محدوده دید بازیکن خارج شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [CreatePlayerPickup](../functions/CreatePlayerPickup): ایجاد pickup که فقط برای یک بازیکن قابل مشاهده است.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): حذف یک player-pickup.