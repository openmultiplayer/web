---
title: IsPickupHiddenForPlayer
sidebar_label: IsPickupHiddenForPlayer
description: چک می‌کنه که آیا یه pickup برای یه بازیکن خاص مخفی هست یا نه.
tags: ["player", "pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه pickup برای یه بازیکن خاص مخفی هست یا نه.

| نام      | توضیحات          |
|----------|------------------|
| playerid | ID بازیکن.       |
| pickupid | ID pickup.       |

## مقادیر برگشتی

این تابع **true** برمی‌گردونه اگه pickup برای بازیکن مخفی باشه، یا **false** اگه نباشه.

## مثال‌ها

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    HidePickupForPlayer(playerid, g_Pickup);

    if (IsPickupHiddenForPlayer(playerid, g_Pickup))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [CreatePickup](CreatePickup): ساخت یه pickup.
- [AddStaticPickup](AddStaticPickup): اضافه کردن یه pickup استاتیک.
- [DestroyPickup](DestroyPickup): نابود کردن یه pickup.
- [IsValidPickup](IsValidPickup): چک می‌کنه که آیا یه pickup معتبره یا نه.
- [IsPickupStreamedIn](IsPickupStreamedIn): چک می‌کنه که آیا یه pickup برای یه بازیکن خاص stream شده یا نه.
- [SetPickupPos](SetPickupPos): موقعیت یه pickup رو تنظیم می‌کنه.
- [GetPickupPos](GetPickupPos): مختصات یه pickup رو دریافت می‌کنه.
- [SetPickupModel](SetPickupModel): مدل یه pickup رو تنظیم می‌کنه.
- [GetPickupModel](GetPickupModel): ID مدل یه pickup رو دریافت می‌کنه.
- [SetPickupType](SetPickupType): نوع یه pickup رو تنظیم می‌کنه.
- [GetPickupType](GetPickupType): نوع یه pickup رو دریافت می‌کنه.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): ID دنیای مجازی یه pickup رو تنظیم می‌کنه.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): ID دنیای مجازی یه pickup رو دریافت می‌کنه.
- [ShowPickupForPlayer](ShowPickupForPlayer): یه pickup رو برای یه بازیکن خاص نمایش می‌ده.
- [HidePickupForPlayer](HidePickupForPlayer): یه pickup رو برای یه بازیکن خاص مخفی می‌کنه.
- [SetPickupForPlayer](SetPickupForPlayer): مدل، نوع و موقعیت pickup رو برای یه بازیکن خاص تنظیم می‌کنه.