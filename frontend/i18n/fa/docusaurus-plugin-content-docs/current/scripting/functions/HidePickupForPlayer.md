---
title: HidePickupForPlayer
sidebar_label: HidePickupForPlayer
description: یه pickup رو برای یه بازیکن خاص مخفی می‌کنه.
tags: ["player", "pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

یه pickup رو برای یه بازیکن خاص مخفی می‌کنه.

| نام      | توضیحات                                       |
|----------|-----------------------------------------------|
| playerid | ID بازیکن.                                     |
| pickupid | ID pickup ای که باید برای بازیکن مخفی بشه.    |

## مقادیر برگشتی

این تابع همیشه **true** برمی‌گردونه.

## مثال‌ها

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    HidePickupForPlayer(playerid, g_Pickup);
    return 1;
}
```

## توابع مرتبط

- [CreatePickup](CreatePickup): ساخت یه pickup.
- [AddStaticPickup](AddStaticPickup): اضافه کردن یه pickup استاتیک.
- [DestroyPickup](DestroyPickup): نابود کردن یه pickup.
- [IsValidPickup](IsValidPickup): چک می‌کنه که آیا یه pickup معتبره یا نه.
- [IsPickupStreamedIn](IsPickupStreamedIn): چک می‌کنه که آیا یه pickup برای یه بازیکن خاص stream شده یا نه.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): چک می‌کنه که آیا یه pickup برای یه بازیکن خاص مخفی هست یا نه.
- [SetPickupPos](SetPickupPos): موقعیت یه pickup رو تنظیم می‌کنه.
- [GetPickupPos](GetPickupPos): مختصات یه pickup رو دریافت می‌کنه.
- [SetPickupModel](SetPickupModel): مدل یه pickup رو تنظیم می‌کنه.
- [GetPickupModel](GetPickupModel): ID مدل یه pickup رو دریافت می‌کنه.
- [SetPickupType](SetPickupType): نوع یه pickup رو تنظیم می‌کنه.
- [GetPickupType](GetPickupType): نوع یه pickup رو دریافت می‌کنه.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): ID دنیای مجازی یه pickup رو تنظیم می‌کنه.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): ID دنیای مجازی یه pickup رو دریافت می‌کنه.
- [ShowPickupForPlayer](ShowPickupForPlayer): یه pickup رو برای یه بازیکن خاص نمایش می‌ده.
- [SetPickupForPlayer](SetPickupForPlayer): مدل، نوع و موقعیت pickup رو برای یه بازیکن خاص تنظیم می‌کنه.