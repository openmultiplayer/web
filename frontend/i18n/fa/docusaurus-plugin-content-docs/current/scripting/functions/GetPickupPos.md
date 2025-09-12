---
title: GetPickupPos
sidebar_label: GetPickupPos
description: مختصات یک pickup رو می‌گیره.
tags: ["pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

مختصات یک pickup رو می‌گیره.

| اسم     | توضیح                                                               |
|----------|---------------------------------------------------------------------------||
| pickupid | شناسه pickupی که می‌خوای موقعیتش رو بگیری.                              |
| &Float:x | متغیر float که مختصات x توش ذخیره میشه، که با reference پاس داده میشه. |
| &Float:y | متغیر float که مختصات y توش ذخیره میشه، که با reference پاس داده میشه. |
| &Float:z | متغیر float که مختصات z توش ذخیره میشه، که با reference پاس داده میشه. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. pickup مشخص شده وجود نداره.

## مثال‌ها

</div>

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    new 
        Float:x,
        Float:y,
        Float:z;

    GetPickupPos(g_Pickup, x, y, z);
    // x = 1686.6160
    // y = 1455.4277
    // z = 10.7705
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [CreatePickup](CreatePickup): ساخت pickup.
- [AddStaticPickup](AddStaticPickup): اضافع کردن static pickup.
- [DestroyPickup](DestroyPickup): حذف pickup.
- [IsValidPickup](IsValidPickup): چک کردن معتبر بودن pickup.
- [IsPickupStreamedIn](IsPickupStreamedIn): چک کردن stream بودن pickup برای بازیکن مشخص.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): چک کردن مخفی بودن pickup برای بازیکن مشخص.
- [SetPickupPos](SetPickupPos): تنظیم موقعیت pickup.
- [SetPickupModel](SetPickupModel): تنظیم مدل pickup.
- [GetPickupModel](GetPickupModel): گرفتن شناسه مدل pickup.
- [SetPickupType](SetPickupType): تنظیم نوع pickup.
- [GetPickupType](GetPickupType): گرفتن نوع pickup.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): تنظیم virtual world pickup.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): گرفتن virtual world pickup.
- [ShowPickupForPlayer](ShowPickupForPlayer): نمایش pickup برای بازیکن مشخص.
- [HidePickupForPlayer](HidePickupForPlayer): مخفی کردن pickup برای بازیکن مشخص.
- [SetPickupForPlayer](SetPickupForPlayer): تنظیم مدل، نوع و موقعیت pickup برای بازیکن مشخص.

</div>