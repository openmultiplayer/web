---
title: AddCharModel
sidebar_label: AddCharModel
description: یک مدل کاراکتر سفارشی جدید برای دانلود اضافه می‌کند.
tags: ["custom skin", "char model"]
---

<VersionWarn version='SA-MP 0.3.DL R1' />

## توضیحات

یک مدل کاراکتر سفارشی جدید برای دانلود اضافه می‌کند. فایل‌های مدل در Documents\GTA San Andreas User Files\SAMP\cache بازیکن در پوشه IP و Port سرور با نام فایل به شکل CRC ذخیره خواهند شد.

| نام                   | توضیحات                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| baseid                 | ID مدل اسکین پایه برای استفاده (رفتار کاراکتر و کاراکتر اصلی برای استفاده زمانی که دانلود شکست بخورد). |
| newid                  | ID مدل اسکین جدید در محدوده 20001 تا 30000 (10000 slot) برای استفاده بعدی با SetPlayerSkin             |
| const dff[]            | نام فایل کالیژن مدل .dff که به طور پیش‌فرض در پوشه models سرور قرار دارد (تنظیمات artpath).            |
| const textureLibrary[] | نام فایل texture مدل .txd که به طور پیش‌فرض در پوشه models سرور قرار دارد (تنظیمات artpath).              |

## مقدار بازگشتی

**1:** تابع با موفقیت اجرا شد.

**0:** تابع در اجرا شکست خورد.

## مثال‌ها

```c
public OnGameModeInit()
{
    AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
    AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
    return 1;
}
```

```c
AddCharModel(305, 20001, "lvpdpc2.dff", "lvpdpc2.txd");
AddCharModel(305, 20002, "lapdpd2.dff", "lapdpd2.txd");
```

## نکات

:::tip

ابتدا باید **useartwork** یا **artwork.enable** در تنظیمات سرور فعال شود تا این کار کند.

:::

:::warning

در حال حاضر هیچ محدودیتی برای زمان فراخوانی این تابع وجود ندارد، اما بدانید که اگر آن‌ها را داخل [OnFilterScriptInit](../callbacks/OnFilterScriptInit)/[OnGameModeInit](../callbacks/OnGameModeInit) فراخوانی نکنید، خطر این وجود دارد که برخی بازیکن‌ها که از قبل در سرور هستند مدل‌ها را دانلود نکرده باشند.

:::

## توابع مرتبط

- [SetPlayerSkin](SetPlayerSkin): اسکین بازیکن را تنظیم کنید.