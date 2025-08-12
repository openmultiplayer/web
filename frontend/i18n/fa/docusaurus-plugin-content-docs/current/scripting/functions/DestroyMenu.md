---
title: DestroyMenu
sidebar_label: DestroyMenu
description: منوی مشخص شده را نابود می‌کند.
tags: ["menu"]
---

## توضیحات

منوی مشخص شده را نابود می‌کند.

| نام        | توضیحات               |
| ----------- | --------------------- |
| Menu:menuid | شناسه منو برای نابودی |

## مقادیر بازگشتی

**true** اگر نابودی موفقیت‌آمیز بود، در غیر این صورت **false**

## مثال‌ها

```c
new Menu:exampleMenu;
exampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);

// بعداً ...
DestroyMenu(exampleMenu);
```

## توابع مرتبط

- [CreateMenu](CreateMenu): ایجاد یک منو.
- [SetMenuColumnHeader](SetMenuColumnHeader): تنظیم سرتیتر برای یکی از ستون‌های منو.
- [AddMenuItem](AddMenuItem): افزودن آیتم به منو.

## کال‌بک‌های مرتبط

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): زمانی فراخوانی می‌شود که بازیکن ردیفی در منو انتخاب کند.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): زمانی فراخوانی می‌شود که بازیکن از منو خارج شود.