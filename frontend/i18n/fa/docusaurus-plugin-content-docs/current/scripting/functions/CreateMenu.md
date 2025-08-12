---
title: CreateMenu
sidebar_label: CreateMenu
description: یک منو ایجاد می‌کند.
tags: ["menu"]
---

## توضیحات

یک منو ایجاد می‌کند.

| نام                | توضیحات                                                                              |
| ------------------ | ----------------------------------------------------------------------------------- |
| const title[]      | عنوان منوی جدید.                                                                      |
| columns            | منوی جدید چند ستون داشته باشد.                                                        |
| Float:x            | موقعیت X منو (کانوس 640x460 - 0 منو را در سمت چپ قرار می‌دهد).                      |
| Float:y            | موقعیت Y منو (کانوس 640x460 - 0 منو را در بالای صفحه قرار می‌دهد).                  |
| Float:column1width | عرض ستون اول.                                                                        |
| Float:column2width | عرض ستون دوم.                                                                        |
| OPEN_MP_TAGS:...   | تعداد نامحدود آرگومان از هر نوع.                                                      |

## مقادیر بازگشتی

ID منوی جدید یا **-1** در صورت شکست.

## مثال‌ها

```c
new Menu:exampleMenu;

public OnGameModeInit()
{
    exampleMenu = CreateMenu("Example Menu", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}
```

## نکات

:::tip

- این تابع فقط منو را ایجاد می‌کند - باید از [ShowMenuForPlayer](ShowMenuForPlayer) برای نمایش آن استفاده کنید.
- شما فقط می‌توانید 2 ستون ایجاد کنید و به آن‌ها دسترسی داشته باشید (0 و 1).
- اگر طول عنوان برابر یا بیشتر از 32 کاراکتر باشد، عنوان به 30 کاراکتر کوتاه می‌شود.

:::

:::warning

حداکثر 12 آیتم در هر منو و حداکثر 128 منو در کل وجود دارد.

:::

## توابع مرتبط

- [AddMenuItem](AddMenuItem): اضافه کردن یک آیتم به منوی مشخص شده.
- [SetMenuColumnHeader](SetMenuColumnHeader): تنظیم هدر برای یکی از ستون‌های منو.
- [DestroyMenu](DestroyMenu): از بین بردن یک منو.
- [ShowMenuForPlayer](ShowMenuForPlayer): نمایش منو برای یک بازیکن.
- [HideMenuForPlayer](HideMenuForPlayer): مخفی کردن منو برای یک بازیکن.

## کالبک‌های مرتبط

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): زمانی فراخوانی می‌شود که بازیکن ردیفی از منو را انتخاب کند.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): زمانی فراخوانی می‌شود که بازیکن از منو خارج شود.