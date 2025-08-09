---
title: AddVehicleComponent
sidebar_label: AddVehicleComponent
description: یک 'کامپوننت' (اغلب به عنوان 'مود' (تعدیل) نامیده می‌شود) را به یک وسیله نقلیه اضافه می‌کند.
tags: ["vehicle"]
---

## توضیحات

یک 'کامپوننت' (اغلب به عنوان 'مود' (تعدیل) نامیده می‌شود) را به یک وسیله نقلیه اضافه می‌کند. کامپوننت‌های معتبر را می‌توانید اینجا پیدا کنید.

| نام                                      | توضیحات                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| vehicleid                                | شناسه وسیله نقلیه برای اضافه کردن کامپوننت. نباید با modelid اشتباه گرفته شود.          |
| [component](../resources/carcomponentid) | شناسه کامپوننت برای اضافه کردن به وسیله نقلیه.                                           |

## مقدار بازگشتی

**true** - کامپوننت با موفقیت به وسیله نقلیه اضافه شد.

**false** - کامپوننت اضافه نشد چون وسیله نقلیه وجود ندارد.

## مثال‌ها

```c
new gTaxi;

public OnGameModeInit()
{
    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taxi
    return 1;
}

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)
    {
        if (GetPlayerVehicleID(playerid) == gTaxi)
        {
            AddVehicleComponent(gTaxi, 1010); // Nitro
            SendClientMessage(playerid, 0xFFFFFFAA, "Nitro added to the Taxi.");
        }
    }
    return 1;
}
```

## نکات

:::warning

استفاده از شناسه کامپوننت نامعتبر باعث کرش بازی بازیکن می‌شود. (در open.mp رفع شده)

:::

## توابع مرتبط

- [RemoveVehicleComponent](RemoveVehicleComponent): حذف کامپوننت از وسیله نقلیه.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): بررسی اینکه وسیله نقلیه چه کامپوننت‌هایی دارد.
- [GetVehicleComponentType](GetVehicleComponentType): بررسی نوع کامپوننت از طریق شناسه.
- [VehicleCanHaveComponent](VehicleCanHaveComponent): آیا کامپوننت برای وسیله نقلیه مجاز است؟

## کالبک‌های مرتبط

- [OnVehicleMod](../callbacks/OnVehicleMod): هنگامی که وسیله نقلیه تعدیل می‌شود فراخوانی می‌شود.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): هنگامی که وسیله نقلیه وارد یا خارج فروشگاه تعدیل می‌شود فراخوانی می‌شود.

## منابع مرتبط

- [شناسه‌های کامپوننت خودرو](../resources/carcomponentid)