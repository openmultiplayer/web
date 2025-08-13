---
title: HideMenuForPlayer
sidebar_label: HideMenuForPlayer
description: یه منو رو برای بازیکن مخفی می‌کنه.
tags: ["player", "menu"]
---

## توضیحات

یه منو رو برای بازیکن مخفی می‌کنه.

| نام         | توضیحات                                                                                                                           |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Menu:menuid | ID منویی که باید مخفی بشه. توسط CreateMenu برگردونده می‌شه و به [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow) پاس داده می‌شه. |
| playerid    | ID بازیکنی که منو براش مخفی می‌شه.                                                                                                  |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/menuhide", true) == 0)
    {
        new Menu:myMenu = GetPlayerMenu(playerid);
        HideMenuForPlayer(myMenu, playerid);
        return 1;
    }
    return 0;
}
```

## نکات

:::warning

اگه ID منوی نامعتبر بدی، هم سرور و هم بازیکن کرش می‌کنن. (در open.mp درست شده)

:::

:::tip

این تابع همیشه پارامتر ID منو رو می‌گرفته، ولی در SA:MP این ID استفاده نمی‌شد. پس هر مقداری که می‌دادی منوی فعلی بازیکن بسته می‌شد، حتی اگه اون منویی که گفتی رو نگاه نمی‌کرد.

کد قدیمی شاید اینطوری بود:

```c
gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);

HideMenuForPlayer(gShopMenu, playerid);
```

این همیشه منوی فعلی بازیکن رو می‌بست، فرقی نمی‌کرد واقعاً داره به کدومش نگاه می‌کنه. حالا باید یادت باشه که داره به کدومش نگاه می‌کنه، یا فقط بگیریش:

```c
gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);

HideMenuForPlayer(GetPlayerMenu(playerid), playerid);
```

:::

## توابع مرتبط

- [CreateMenu](CreateMenu): ساخت یه منو.
- [AddMenuItem](AddMenuItem): اضافه کردن یه آیتم به منوی مشخص شده.
- [SetMenuColumnHeader](SetMenuColumnHeader): تنظیم هدر برای یکی از ستون‌های یه منو.
- [ShowMenuForPlayer](ShowMenuForPlayer): نمایش یه منو برای بازیکن.