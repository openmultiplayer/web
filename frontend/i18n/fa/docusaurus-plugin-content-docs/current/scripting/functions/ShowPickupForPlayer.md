---
title: ShowPickupForPlayer
sidebar_label: ShowPickupForPlayer
description: یه pickup رو برای یه پلیر خاص نشون می‌ده.
tags: ["player", "pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

یه pickup رو برای یه پلیر خاص نشون می‌ده.

| نام      | توضیحات                                     |
|----------|-------------------------------------------------|
| playerid | ID پلیر.                           |
| pickupid | ID pickup ای که باید برای پلیر نمایش داده بشه. |

## مقدار برگشتی

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
    ShowPickupForPlayer(playerid, g_Pickup);
    return 1;
}
```

## توابع مرتبط

- [CreatePickup](CreatePickup): یه pickup می‌سازه.
- [AddStaticPickup](AddStaticPickup): یه pickup static اضافه می‌کنه.
- [DestroyPickup](DestroyPickup): یه pickup رو نابود می‌کنه.
- [IsValidPickup](IsValidPickup): بررسی می‌کنه که آیا pickup معتبر هست یا نه.
- [IsPickupStreamedIn](IsPickupStreamedIn): بررسی می‌کنه که آیا pickup برای یه پلیر خاص stream شده یا نه.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): بررسی می‌کنه که آیا pickup برای یه پلیر خاص مخفی هست یا نه.
- [SetPickupPos](SetPickupPos): موقعیت یه pickup رو تنظیم می‌کنه.
- [GetPickupPos](GetPickupPos): مختصات یه pickup رو دریافت می‌کنه.
- [SetPickupModel](SetPickupModel): مدل یه pickup رو تنظیم می‌کنه.
- [GetPickupModel](GetPickupModel): ID مدل یه pickup رو دریافت می‌کنه.
- [SetPickupType](SetPickupType): نوع یه pickup رو تنظیم می‌کنه.
- [GetPickupType](GetPickupType): نوع یه pickup رو دریافت می‌کنه.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): ID virtual world یه pickup رو تنظیم می‌کنه.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): ID virtual world یه pickup رو دریافت می‌کنه.
- [HidePickupForPlayer](HidePickupForPlayer): یه pickup رو برای یه پلیر خاص مخفی می‌کنه.
- [SetPickupForPlayer](SetPickupForPlayer): مدل، نوع و موقعیت pickup رو برای یه پلیر خاص تنظیم می‌کنه.