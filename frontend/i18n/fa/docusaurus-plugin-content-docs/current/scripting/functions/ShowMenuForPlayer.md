---
title: ShowMenuForPlayer
sidebar_label: ShowMenuForPlayer
description: منو را برای بازیکن نمایش دهید.
tags: ["player", "menu"]
---

## توضیحات

منو را برای بازیکن نمایش دهید.

| نام     | توضیحات                    |
| -------- | ------------------------------ |
| playerid | شناسه بازیکن. |
| Menu:menuid | شناسه منو برای نمایش.  |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود.

## مثال‌ها

```c
new Menu:teleportmenu;

public OnGameModeInit()
{
    teleportmenu = CreateMenu("Teleport", 1, 20.0, 200.0, 200.0, 200.0);
    AddMenuItem(teleportmenu, 0, "Las Venturas");
    AddMenuItem(teleportmenu, 0, "Los Santos");
    AddMenuItem(teleportmenu, 0, "San Fierro");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/teleportmenu", true) == 0)
    {
        ShowMenuForPlayer(teleportmenu, playerid);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [CreateMenu](CreateMenu): ایجاد یک منو.
- [DestroyMenu](DestroyMenu): حذف یک منو.
- [AddMenuItem](AddMenuItem): افزودن آیتم به منو.
- [HideMenuForPlayer](HideMenuForPlayer): مخفی کردن منو برای بازیکن.
- [GetPlayerMenu](GetPlayerMenu): دریافت منوی فعلی بازیکن.

## کالبک‌های مرتبط

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): زمانی که بازیکن یک ردیف از منو را انتخاب کرد فراخوانی می‌شود.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): زمانی که بازیکن از منو خارج شد فراخوانی می‌شود.