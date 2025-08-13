---
title: SetPickupForPlayer
sidebar_label: SetPickupForPlayer
description: model، نوع و موقعیت pickup رو برای بازیکن خاصی تنظیم می‌کنه.
tags: ["player", "pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده.

:::

## توضیحات

model، نوع و موقعیت pickup رو برای بازیکن خاصی تنظیم می‌کنه.

| نام      | توضیحات                                                  |
|----------|----------------------------------------------------------|
| playerid | ID بازیکن.                                               |
| pickupid | ID pickup.                                               |
| model    | [model](../resources/pickupids) که باید تنظیم بشه.       |
| type     | [نوع pickup](../resources/pickuptypes) که باید تنظیم بشه. |
| Float:x  | مختصات x که pickup باید در اون قرار بگیره.               |
| Float:y  | مختصات y که pickup باید در اون قرار بگیره.               |
| Float:z  | مختصات z که pickup باید در اون قرار بگیره.               |

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
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z);
    SetPickupForPlayer(playerid, g_Pickup, 1210, 2, x + 2.0, y + 2.0, z);
    return 1;
}
```

## توابع مرتبط

- [CreatePickup](CreatePickup): ساخت یک pickup.
- [AddStaticPickup](AddStaticPickup): اضافه کردن یک pickup ثابت.
- [DestroyPickup](DestroyPickup): از بین بردن یک pickup.
- [IsValidPickup](IsValidPickup): بررسی اینکه آیا یک pickup معتبر هست یا نه.
- [IsPickupStreamedIn](IsPickupStreamedIn): بررسی اینکه آیا یک pickup برای بازیکن خاص stream شده یا نه.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): بررسی اینکه آیا یک pickup برای بازیکن خاص مخفی هست یا نه.
- [SetPickupPos](SetPickupPos): تنظیم موقعیت یک pickup.
- [GetPickupPos](GetPickupPos): گرفتن مختصات یک pickup.
- [SetPickupModel](SetPickupModel): تنظیم model یک pickup.
- [GetPickupModel](GetPickupModel): گرفتن ID model یک pickup.
- [SetPickupType](SetPickupType): تنظیم نوع یک pickup.
- [GetPickupType](GetPickupType): گرفتن نوع یک pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): تنظیم ID virtual world یک pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): گرفتن ID virtual world یک pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): نمایش یک pickup برای بازیکن خاص.
- [HidePickupForPlayer](HidePickupForPlayer): مخفی کردن یک pickup برای بازیکن خاص.