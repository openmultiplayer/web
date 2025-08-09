---
title: OnPlayerSelectedMenuRow
sidebar_label: OnPlayerSelectedMenuRow
description: این کالبک زمانی فراخوانده می‌شود که بازیکن آیتمی از منو انتخاب کند (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن آیتمی از منو ([ShowMenuForPlayer](../functions/ShowMenuForPlayer)) انتخاب کند.

| نام      | توضیحات                                                     |
| -------- | ----------------------------------------------------------- |
| playerid | شناسه بازیکنی که آیتم منو را انتخاب کرده است.                |
| row      | شناسه ردیفی که انتخاب شده است. اولین ردیف شناسه 0 دارد.    |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("Example Menu", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "Item 1");
    AddMenuItem(MyMenu, 0, "Item 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch (row)
        {
            case 0:
            {
                print("Item 1 Selected");
            }
            case 1:
            {
                print("Item 2 Selected");
            }
        }
    }
    return 1;
}
```

## نکته‌ها

:::tip

شناسه منو به این کالبک منتقل نمی‌شود. باید از [GetPlayerMenu](../functions/GetPlayerMenu) استفاده کرد تا تعیین شود بازیکن از کدام منو آیتم انتخاب کرده است.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerExitedMenu](OnPlayerExitedMenu): این کالبک زمانی فراخوانده می‌شود که بازیکن از منو خارج شود.
- [OnDialogResponse](OnDialogResponse): این کالبک زمانی فراخوانده می‌شود که بازیکن به دیالوگ پاسخ دهد.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [CreateMenu](../functions/CreateMenu): ایجاد یک منو.
- [DestroyMenu](../functions/DestroyMenu): حذف یک منو.
- [AddMenuItem](../functions/AddMenuItem): اضافه کردن آیتم به منوی مشخص شده.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): نمایش منو برای بازیکن.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): مخفی کردن منو برای بازیکن.