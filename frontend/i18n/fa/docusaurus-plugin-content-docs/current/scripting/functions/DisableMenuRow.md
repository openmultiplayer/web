---
title: DisableMenuRow
sidebar_label: DisableMenuRow
description: ردیف مشخصی از منو را برای همه بازیکنان غیرفعال می‌کند.
tags: ["menu"]
---

## توضیحات

ردیف مشخصی از منو را برای همه بازیکنان غیرفعال می‌کند. خاکستری می‌شود و بازیکنان نمی‌توانند آن را انتخاب کنند.

| نام        | توضیحات                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| Menu:menuid | شناسه منو برای غیرفعال کردن ردیف آن. اطمینان حاصل کنید که معتبر باشد، زیرا شناسه منوی نامعتبر کل سرور را کرش می‌کند. |
| row         | شناسه ردیف برای غیرفعال کردن (ردیف‌ها از 0 شروع می‌شوند).                                                            |

## مقادیر بازگشتی

این تابع همیشه **1** برمی‌گرداند، حتی اگر تابع ناموفق باشد.

اگر ردیف نامعتبری مشخص شود، هیچ اتفاقی نمی‌افتد.

اگر شناسه منوی نامعتبری مشخص شود، سرور کرش می‌کند.

## مثال‌ها

```c
new Menu:WeaponMenu;

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
    if (!strcmp(cmdtext, "/disablemenu", true))
    {
        DisableMenuRow(WeaponMenu, 2); //غیرفعال کردن ردیف "Minigun"
        return 1;
    }
    return 1;
}
```

## نکات

:::tip

- زمانی که شناسه منوی نامعتبر ارسال شود کرش می‌کند.
- این تابع ردیف منوی مشخص شده را برای همه بازیکنان غیرفعال می‌کند.
- هیچ تابعی برای غیرفعال کردن ردیف منو برای بازیکن خاص وجود ندارد.
- باید دو منو ایجاد کنید - یکی با ردیف غیرفعال، و یکی بدون آن. یا یکی برای هر بازیکن.

:::

## توابع مرتبط

- [CreateMenu](CreateMenu): ایجاد یک منو.
- [DestroyMenu](DestroyMenu): نابودی یک منو.
- [AddMenuItem](AddMenuItem): افزودن آیتم به منو.
- [IsMenuRowDisabled](IsMenuRowDisabled): بررسی غیرفعال بودن ردیف منو.