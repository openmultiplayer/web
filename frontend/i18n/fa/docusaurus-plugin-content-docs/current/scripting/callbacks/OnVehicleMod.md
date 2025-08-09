---
title: OnVehicleMod
sidebar_label: OnVehicleMod
description: این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه تیوننگ شود.
tags: ["vehicle"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه تیوننگ شود.

| نام         | توضیحات                                               |
| ----------- | ------------------------------------------------------- |
| playerid    | شناسه راننده وسیله نقلیه.                               |
| vehicleid   | شناسه وسیله نقلیه‌ای که تیوننگ شده است.                |
| componentid | شناسه کامپوننتی که به وسیله نقلیه اضافه شده است.       |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود بنابراین برگرداندن 0 در آنجا سایر filterscript ها را نیز از پردازش آن مسدود می‌کند.

## مثال‌ها

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Vehicle %d was modded by ID %d with the componentid %d", vehicleid, playerid, componentid);

    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Anti-tuning hacks script
        return 0; // Prevents the bad modification from being synced to other players
        // Tested and it works even on servers wich allow you to mod your vehicle using commands, menus, dialogs, etc..
    }
    return 1;
}
```

## نکته‌ها

:::tip

این کالبک توسط AddVehicleComponent فراخوانده نمی‌شود.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnEnterExitModShop](OnEnterExitModShop): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه وارد یا خارج mod shop شود.
- [OnVehiclePaintjob](OnVehiclePaintjob): این کالبک زمانی فراخوانده می‌شود که paintjob وسیله نقلیه تغییر کند.
- [OnVehicleRespray](OnVehicleRespray): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه دوباره رنگ‌آمیزی شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [AddVehicleComponent](../functions/AddVehicleComponent): اضافه کردن کامپوننت به وسیله نقلیه.