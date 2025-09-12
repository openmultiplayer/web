---
title: AddSimpleModel
sidebar_label: AddSimpleModel
description: مدل object ساده سفارشی جدیدی برای دانلود اضافه می‌کند.
tags: ["custom model", "simple model"]
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## توضیحات

مدل object ساده سفارشی جدیدی برای دانلود اضافه می‌کند. فایل‌های مدل در Documents\GTA San Andreas User Files\SAMP\cache بازیکن در پوشه IP و Port سرور با نام فایل به شکل CRC ذخیره خواهند شد.

| نام                   | توضیحات                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| virtualWorld           | ID دنیای مجازی برای در دسترس قرار دادن مدل. از -1 برای همه دنیاها استفاده کنید.                                                 |
| baseid                 | ID مدل object پایه برای استفاده (object اصلی برای استفاده زمانی که دانلود شکست بخورد).                                           |
| newid                  | ID مدل object جدید در محدوده -1000 تا -30000 (29000 slot) برای استفاده بعدی با CreateObject یا CreatePlayerObject. |
| const dff[]            | نام فایل کالیژن مدل .dff که به طور پیش‌فرض در پوشه models سرور قرار دارد (تنظیمات artpath)                          |
| const textureLibrary[] | نام فایل texture مدل .txd که به طور پیش‌فرض در پوشه models سرور قرار دارد (تنظیمات artpath).                           |

## مقدار بازگشتی

**1:** تابع با موفقیت اجرا شد.

**0:** تابع در اجرا شکست خورد.

## مثال‌ها

```c
public OnGameModeInit()
{
    AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
    return 1;
}
```

```c
AddSimpleModel(-1, 19379, -2000, "wallzzz.dff", "wallzzz.txd");
```

## نکات

:::tip

ابتدا باید **useartwork** یا **artwork.enable** در تنظیمات سرور فعال شود تا این کار کند.

وقتی `virtualworld` تنظیم شود، مدل‌ها یک بار دانلود خواهند شد که بازیکن وارد دنیای خاص شود.

:::

:::warning

در حال حاضر هیچ محدودیتی برای زمان فراخوانی این تابع وجود ندارد، اما بدانید که اگر آن‌ها را داخل [OnFilterScriptInit](../callbacks/OnFilterScriptInit)/[OnGameModeInit](../callbacks/OnGameModeInit) فراخوانی نکنید، خطر این وجود دارد که برخی بازیکن‌ها که از قبل در سرور هستند مدل‌ها را دانلود نکرده باشند.

:::

## توابع مرتبط

- [IsValidCustomModel](IsValidCustomModel): بررسی می‌کند که آیا ID مدل سفارشی معتبر است.
- [GetCustomModelPath](GetCustomModelPath): مسیر مدل سفارشی را دریافت کنید.

## callback های مرتبط

- [OnPlayerFinishedDownloading](../callbacks/OnPlayerFinishedDownloading): زمانی فراخوانی می‌شود که بازیکن دانلود مدل‌های سفارشی را تمام کند.