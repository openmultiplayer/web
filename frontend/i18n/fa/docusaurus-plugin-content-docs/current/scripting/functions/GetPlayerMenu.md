---
title: GetPlayerMenu
sidebar_label: GetPlayerMenu
description: دریافت ID منویی که بازیکن در حال حاضر آن را مشاهده می‌کند (با ShowMenuForPlayer نمایش داده شده).
tags: ["player", "menu"]
---

## توضیحات

دریافت ID منویی که بازیکن در حال حاضر آن را مشاهده می‌کند (با ShowMenuForPlayer نمایش داده شده).

| نام     | توضیحات                                      |
| -------- | ------------------------------------------------ |
| playerid | ID بازیکن برای دریافت منوی فعلی‌اش. |

## مقادیر برگشتی

ID منوی نمایش داده شده فعلی بازیکن، یا `INVALID_MENU` (255) اگر هیچ منویی نمایش داده نشده باشد.

مقدار برگشتی با **Menu:** برچسب‌گذاری شده است

## مثال‌ها

```c
new Menu:currentMenu = GetPlayerMenu(playerid); // Store the player's current menu in 'CurrentMenu'
```

## نکات

:::tip

زمانی که هیچ منویی نمایش داده نمی‌شود، منوی قبلی را برمی‌گرداند.

:::

## توابع مرتبط

- [ShowMenuForPlayer](ShowMenuForPlayer): نمایش منو برای بازیکن.
- [HideMenuForPlayer](HideMenuForPlayer): مخفی کردن منو برای بازیکن.
- [CreateMenu](CreateMenu): ایجاد منو.
- [DestroyMenu](DestroyMenu): نابود کردن منو.
- [AddMenuItem](AddMenuItem): اضافه کردن آیتم به منو.

## کالبک‌های مرتبط

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): زمانی که بازیکن ردیفی در منو انتخاب می‌کند فراخوانی می‌شود.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): زمانی که بازیکن از منو خارج می‌شود فراخوانی می‌شود.