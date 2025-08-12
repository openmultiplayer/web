---
title: GetPickupVirtualWorld
sidebar_label: GetPickupVirtualWorld
description: شناسه virtual world یک pickup رو می‌گیره.
tags: ["pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

شناسه virtual world یک pickup رو می‌گیره.

| اسم     | توضیح                                          |
|----------|------------------------------------------------------|
| pickupid | شناسه pickupی که می‌خوای virtual worldش رو بگیری. |

## مقادیر برگشتی

شناسه virtual world pickup رو برمی‌گردونه.

## مثال‌ها

</div>

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, 20);

    new worldid = GetPickupVirtualWorld(g_Pickup);
    // worldid = 20
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreatePickup](CreatePickup): ساخت pickup.
- [AddStaticPickup](AddStaticPickup): اضافه کردن static pickup.
- [DestroyPickup](DestroyPickup): حذف pickup.
- [IsValidPickup](IsValidPickup): چک کردن معتبر بودن pickup.
- [IsPickupStreamedIn](IsPickupStreamedIn): چک کردن stream بودن pickup برای بازیکن مشخص.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): چک کردن مخفی بودن pickup برای بازیکن مشخص.
- [SetPickupPos](SetPickupPos): تنظیم موقعیت pickup.
- [GetPickupPos](GetPickupPos): گرفتن مختصات pickup.
- [SetPickupModel](SetPickupModel): تنظیم مدل pickup.
- [GetPickupModel](GetPickupModel): گرفتن شناسه مدل pickup.
- [SetPickupType](SetPickupType): تنظیم نوع pickup.
- [GetPickupType](GetPickupType): گرفتن نوع pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): تنظیم virtual world pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): نمایش pickup برای بازیکن مشخص.
- [HidePickupForPlayer](HidePickupForPlayer): مخفی کردن pickup برای بازیکن مشخص.
- [SetPickupForPlayer](SetPickupForPlayer): تنظیم مدل، نوع و موقعیت pickup برای بازیکن مشخص.

</div>