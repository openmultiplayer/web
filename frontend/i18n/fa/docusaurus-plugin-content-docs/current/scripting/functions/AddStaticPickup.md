---
title: AddStaticPickup
sidebar_label: AddStaticPickup
description: این تابع یک pickup 'استاتیک' به بازی اضافه می‌کند.
tags: ["pickup"]
---

## توضیحات

این تابع یک pickup 'استاتیک' به بازی اضافه می‌کند. این pickup ها از سلاح‌ها، سلامت، زره و غیره پشتیبانی می‌کنند، با قابلیت کارکرد بدون اسکریپت‌نویسی آن‌ها (سلاح‌ها/سلامت/زره به طور خودکار داده خواهند شد).

| نام                             | توضیحات                                                                         |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| [model](../resources/pickupids)  | مدل pickup.                                                            |
| [type](../resources/pickuptypes) | نوع pickup. تعیین می‌کند که pickup وقتی برداشته شود چگونه پاسخ دهد.                 |
| Float:x                          | مختصات X برای ایجاد pickup.                                           |
| Float:y                          | مختصات Y برای ایجاد pickup.                                           |
| Float:z                          | مختصات Z برای ایجاد pickup.                                           |
| virtualWorld                     | ID دنیای مجازی برای قرار دادن pickup در آن. از -1 استفاده کنید تا pickup در همه دنیاها نمایش داده شود. |

## مقدار بازگشتی

**1** - اگر pickup با موفقیت ایجاد شود.

**0** - اگر ایجاد نشود.

## مثال‌ها

```c
public OnGameModeInit()
{
    // یک pickup برای زره ایجاد کنید
    AddStaticPickup(1242, 2, 1503.3359, 1432.3585, 10.1191, 0);

    // یک pickup برای سلامت، درست کنار زره ایجاد کنید
    AddStaticPickup(1240, 2, 1506.3359, 1432.3585, 10.1191, 0);

    return 1;
}
```

## نکات

:::tip

این تابع ID pickup برنمی‌گرداند که بتوانید مثلاً در OnPlayerPickUpPickup استفاده کنید. اگر می‌خواهید ID ها اختصاص دهید از [CreatePickup](CreatePickup) استفاده کنید.

:::

## توابع مرتبط

- [CreatePickup](CreatePickup): pickup ایجاد کنید.
- [DestroyPickup](DestroyPickup): pickup را نابود کنید.

## منابع مرتبط

- [Pickup IDs](../resources/pickupids)