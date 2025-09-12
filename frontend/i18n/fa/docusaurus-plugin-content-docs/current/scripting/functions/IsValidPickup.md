---
title: IsValidPickup
sidebar_label: IsValidPickup
description: چک می‌کنه که آیا یه pickup معتبره یا نه.
tags: ["pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه pickup معتبره یا نه.

| نام      | توضیحات                         |
|----------|--------------------------------|
| pickupid | ID pickup که باید چک بشه.       |

## مقادیر برگشتی

این تابع **true** برمی‌گردونه اگه pickup معتبر باشه، یا **false** اگه نباشه.

## مثال‌ها

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);

    if (IsValidPickup(g_Pickup))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [CreatePickup](CreatePickup): ساخت یه pickup.
- [AddStaticPickup](AddStaticPickup): اضافه کردن یه static pickup.
- [DestroyPickup](DestroyPickup): نابود کردن یه pickup.
- [IsPickupStreamedIn](IsPickupStreamedIn): چک کردن اینکه pickup برای یه بازیکن stream شده یا نه.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): چک کردن اینکه pickup برای یه بازیکن مخفی هست یا نه.
- [SetPickupPos](SetPickupPos): تنظیم موقعیت یه pickup.
- [GetPickupPos](GetPickupPos): دریافت مختصات یه pickup.
- [SetPickupModel](SetPickupModel): تنظیم model یه pickup.
- [GetPickupModel](GetPickupModel): دریافت ID model یه pickup.
- [SetPickupType](SetPickupType): تنظیم نوع یه pickup.
- [GetPickupType](GetPickupType): دریافت نوع یه pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): تنظیم ID virtual world یه pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): دریافت ID virtual world یه pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): نمایش یه pickup برای یه بازیکن خاص.
- [HidePickupForPlayer](HidePickupForPlayer): مخفی کردن یه pickup برای یه بازیکن خاص.
- [SetPickupForPlayer](SetPickupForPlayer): تنظیم model، نوع و موقعیت pickup برای یه بازیکن خاص.