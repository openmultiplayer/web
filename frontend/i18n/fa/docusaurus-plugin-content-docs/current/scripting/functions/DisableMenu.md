---
title: DisableMenu
sidebar_label: DisableMenu
description: یک منو را غیرفعال می‌کند.
tags: ["menu"]
---

## توضیحات

یک منو را غیرفعال می‌کند.

| نام        | توضیحات                       |
| ----------- | ----------------------------- |
| Menu:menuid | شناسه منو برای غیرفعال کردن. |

## مقادیر بازگشتی

این تابع مقدار مشخصی برنمی‌گرداند.

## مثال‌ها

```c
new WeaponMenu;

public OnGameModeInit()
{
    WeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(WeaponMenu, 0, "Rocket Launcher");
    AddMenuItem(WeaponMenu, 0, "Flamethrower");
    AddMenuItem(WeaponMenu, 0, "Minigun");
    AddMenuItem(WeaponMenu, 0, "Grenades");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/disableguns", true))
    {
        DisableMenu(WeaponMenu); //غیرفعال کردن منوی سلاح‌ها
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

زمانی که شناسه منوی نامعتبر ارسال شود کرش می‌کند.

:::

## توابع مرتبط

- [CreateMenu](CreateMenu): ایجاد یک منو.
- [DestroyMenu](DestroyMenu): نابودی یک منو.
- [AddMenuItem](AddMenuItem): افزودن آیتم به منو.
- [IsMenuDisabled](IsMenuDisabled): بررسی غیرفعال بودن منو.