---
title: SetMenuColumnHeader
sidebar_label: SetMenuColumnHeader
description: عنوان ستون در منو رو تنظیم می‌کنه.
tags: ["menu"]
---

## توضیحات

عنوان ستون در منو رو تنظیم می‌کنه.

| نام             | توضیحات                                |
| ---------------- | ------------------------------------------ |
| Menu:menuid      | ID منو که باید تغییر کنه.                  |
| column           | ستون (0 یا 1) که هدرش رو تنظیم می‌کنیم.  |
| const text[]     | متن عنوان برای ستون.           |
| OPEN_MP_TAGS:... | تعداد نامحدودی آرگومان از هر نوع. |

## مقدار برگشتی

این تابع مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
new Menu:gTestMenu;

// There are two rows in this menu
gTestMenu = CreateMenu("Menu Header", 2, 200.0, 100.0, 150.0, 150.0);
SetMenuColumnHeader(gTestMenu, 0, "Row 1");
SetMenuColumnHeader(gTestMenu, 1, "Row 2");

// Add menu items to it.
AddMenuItem(gTestMenu, 0, "Row1 Item1");
AddMenuItem(gTestMenu, 1, "Row2 Item1");
```

## نکات

:::tip

وقتی menu ID معتبر نباشه crash می‌کنه.

:::

:::warning

توجه کن که فقط می‌تونی 12 تا آیتم با [AddMenuItem](AddMenuItem) اضافه کنی. آبجکت سیزدهم منو جایگزین هدر ستون می‌شه که با این تابع درست تنظیم شده.

:::

## توابع مرتبط

- [AddMenuItem](AddMenuItem): اضافه کردن آیتم به منو.
- [CreateMenu](CreateMenu): ساخت منو.

## کالبک‌های مرتبط

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): وقتی بازیکن ردیف در منو انتخاب می‌کنه صدا زده می‌شه.