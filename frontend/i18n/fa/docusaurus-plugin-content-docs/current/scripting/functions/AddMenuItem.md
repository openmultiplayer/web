---
title: AddMenuItem
sidebar_label: AddMenuItem
description: آیتمی به منوی مشخص شده اضافه می‌کند.
tags: ["menu"]
---

## توضیحات

آیتمی به منوی مشخص شده اضافه می‌کند.

| نام             | توضیحات                                |
| ---------------- | ------------------------------------------ |
| Menu:menuid      | ID منو برای اضافه کردن آیتم.             |
| column           | ستونی که آیتم به آن اضافه شود.             |
| const title[]    | عنوان آیتم منوی جدید.           |
| OPEN_MP_TAGS:... | تعداد نامحدود آرگومان از هر tag. |

## مقدار بازگشتی

ایندکس ردیفی که این آیتم به آن اضافه شد.

## مثال‌ها

```c
new Menu:gExampleMenu;

public OnGameModeInit()
{
    gExampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(gExampleMenu, 0, "item 1");
    AddMenuItem(gExampleMenu, 0, "item 2");
    return 1;
}
```

## نکات

:::tip

- هنگام پاس دادن ID منوی نامعتبر crash می‌کند.
- فقط می‌توانید 12 آیتم در هر منو داشته باشید (13امی به سمت راست header نام ستون می‌رود (رنگی)، 14امی و بالاتر اصلاً نمایش داده نمی‌شوند).
- فقط می‌توانید از 2 ستون استفاده کنید (0 و 1).
- فقط می‌توانید 8 کد رنگ در هر آیتم اضافه کنید (~r~, ~g~ و غیره). حداکثر طول آیتم منو 31 نماد است.

:::

## توابع مرتبط

- [CreateMenu](CreateMenu): منو ایجاد کنید.
- [SetMenuColumnHeader](SetMenuColumnHeader): header یکی از ستون‌ها را در منو تنظیم کنید.
- [DestroyMenu](DestroyMenu): منو را نابود کنید.
- [IsMenuRowDisabled](IsMenuRowDisabled): بررسی کنید که آیا ردیف منو غیرفعال است.

## callback های مرتبط

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): زمانی فراخوانی می‌شود که بازیکن ردیفی در منو انتخاب کند.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): زمانی فراخوانی می‌شود که بازیکن از منو خارج شود.