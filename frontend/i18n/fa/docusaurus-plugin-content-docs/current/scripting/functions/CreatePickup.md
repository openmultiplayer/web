---
title: CreatePickup
sidebar_label: CreatePickup
description: این تابع دقیقاً همان کار AddStaticPickup را انجام می‌دهد، به جز اینکه ID پیکاپی را برمی‌گرداند که می‌تواند برای حذف آن و ردیابی با OnPlayerPickUpPickup استفاده شود.
tags: ["pickup"]
---

## توضیحات

این تابع دقیقاً همان کار AddStaticPickup را انجام می‌دهد، به جز اینکه ID پیکاپی را برمی‌گرداند که می‌تواند برای حذف آن و ردیابی با OnPlayerPickUpPickup استفاده شود.

| نام                              | توضیحات                                                                            |
| -------------------------------- | --------------------------------------------------------------------------------- |
| [model](../resources/pickupids)  | مدل پیکاپ.                                                                         |
| [type](../resources/pickuptypes) | نوع پیکاپ. مشخص می‌کند که پیکاپ هنگام برداشته شدن چگونه واکنش نشان دهد.           |
| Float:x                          | مختصات X برای ایجاد پیکاپ.                                                        |
| Float:y                          | مختصات Y برای ایجاد پیکاپ.                                                        |
| Float:z                          | مختصات Z برای ایجاد پیکاپ.                                                        |
| virtualWorld                     | ID دنیای مجازی پیکاپ. از -1 استفاده کنید تا پیکاپ در همه دنیاها نمایش داده شود. |

## مقادیر بازگشتی

ID پیکاپ ایجاد شده، -1 در صورت شکست (رسیدن به حداکثر پیکاپ).

## مثال‌ها

```c
new pickup_Armour; // متغیری برای ذخیره ID پیکاپ ایجاد کنید

public OnGameModeInit()
{
    pickup_Armour = CreatePickup(1242, 2, 1503.3359, 1432.3585, 10.1191, -1);
    // یک پیکاپ زره ایجاد کنید و ID را در 'pickup' ذخیره کنید
    return 1;
}

// بعداً..
DestroyPickup(pickup_Armour); // مثالی از استفاده از ID پیکاپ
pickup_Armour = 0; // متغیر پیکاپ باید ریست شود تا از تداخل‌های آینده جلوگیری شود
```

## نکات

:::tip

- تنها نوع پیکاپی که می‌تواند از داخل وسیله نقلیه برداشته شود 14 است (به جز پیکاپ‌های خاص مثل bribes).
- پیکاپ‌ها برای همه بازیکنان نمایش داده می‌شوند و توسط آن‌ها قابل برداشتن هستند.
- ممکن است اگر DestroyPickup() هنگام برداشتن پیکاپ استفاده شود، بیش از یک بازیکن بتواند پیکاپ را بردارد، به دلیل تاخیر. این را می‌توان با استفاده از متغیرها حل کرد.
- برخی از انواع پیکاپ با 'پاسخ‌های خودکار' همراه هستند، مثلاً استفاده از مدل M4 در پیکاپ خودکار به بازیکن سلاح و مقداری تیر می‌دهد.
- برای پیکاپ‌های کاملاً اسکریپت شده، باید از نوع 1 استفاده کنید.

:::

:::warning

باگ‌های شناخته شده:

- پیکاپ‌هایی که X یا Y آن‌ها کمتر از 4096.0- یا بیشتر از 4096.0 باشد، نمایش داده نمی‌شوند و OnPlayerPickUpPickup را هم فعال نمی‌کنند.

:::

## توابع مرتبط

- [AddStaticPickup](AddStaticPickup): اضافه کردن یک پیکاپ ثابت.
- [DestroyPickup](DestroyPickup): حذف یک پیکاپ.
- [IsValidPickup](IsValidPickup): بررسی معتبر بودن یک پیکاپ.
- [IsPickupStreamedIn](IsPickupStreamedIn): بررسی اینکه آیا پیکاپ برای یک بازیکن خاص stream شده است.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): بررسی اینکه آیا پیکاپ برای یک بازیکن خاص مخفی است.
- [SetPickupPos](SetPickupPos): تنظیم موقعیت یک پیکاپ.
- [GetPickupPos](GetPickupPos): دریافت مختصات یک پیکاپ.
- [SetPickupModel](SetPickupModel): تنظیم مدل یک پیکاپ.
- [GetPickupModel](GetPickupModel): دریافت ID مدل یک پیکاپ.
- [SetPickupType](SetPickupType): تنظیم نوع یک پیکاپ.
- [GetPickupType](GetPickupType): دریافت نوع یک پیکاپ.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): تنظیم ID دنیای مجازی یک پیکاپ.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): دریافت ID دنیای مجازی یک پیکاپ.
- [ShowPickupForPlayer](ShowPickupForPlayer): نمایش پیکاپ برای یک بازیکن خاص.
- [HidePickupForPlayer](HidePickupForPlayer): مخفی کردن پیکاپ برای یک بازیکن خاص.
- [SetPickupForPlayer](SetPickupForPlayer): تنظیم مدل، نوع و موقعیت پیکاپ برای یک بازیکن خاص.
- [CreatePlayerPickup](CreatePlayerPickup): ایجاد پیکاپی که فقط برای یک بازیکن قابل مشاهده است.
- [DestroyPlayerPickup](DestroyPlayerPickup): حذف یک player-pickup.

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، چون مربوط به این تابع هستند.

- [OnPlayerPickUpPickup](../callbacks/OnPlayerPickUpPickup): زمانی فراخوانی می‌شود که بازیکن پیکاپی را بردارد.
- [OnPickupStreamIn](../callbacks/OnPickupStreamIn): زمانی فراخوانی می‌شود که پیکاپ وارد محدوده دید بازیکن شود.
- [OnPickupStreamOut](../callbacks/OnPickupStreamOut): زمانی فراخوانی می‌شود که پیکاپ از محدوده دید بازیکن خارج شود.

## منابع مرتبط

- [Pickup IDs](../resources/pickupids)
- [Pickup Types](../resources/pickuptypes)