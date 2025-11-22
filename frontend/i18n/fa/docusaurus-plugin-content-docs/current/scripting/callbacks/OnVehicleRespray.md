---
title: OnVehicleRespray
sidebar_label: OnVehicleRespray
description: این کالبک زمانی فراخوانده می‌شود که بازیکن از mod shop خارج شود، حتی اگر رنگ‌ها تغییر نکرده باشند.
tags: ["vehicle"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن از mod shop خارج شود، حتی اگر رنگ‌ها تغییر نکرده باشند. توجه کنید، نام گمراه‌کننده است، فروشگاه‌های Pay 'n' Spray این کالبک را فراخوانی نمی‌کنند.

| نام       | توضیحات                                                    |
| --------- | ------------------------------------------------------------ |
| playerid  | شناسه بازیکنی که وسیله نقلیه را رانندگی می‌کند.             |
| vehicleid | شناسه وسیله نقلیه‌ای که دوباره رنگ‌آمیزی شده است.          |
| color1    | رنگی که رنگ اصلی وسیله نقلیه به آن تغییر کرده است.          |
| color2    | رنگی که رنگ دوم وسیله نقلیه به آن تغییر کرده است.           |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود بنابراین برگرداندن 0 در آنجا سایر filterscript ها را نیز از پردازش آن مسدود می‌کند.

## مثال‌ها

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## نکته‌ها

:::tip

این کالبک توسط ChangeVehicleColor فراخوانده نمی‌شود. گمراه‌کننده است، این کالبک برای pay 'n' spray فراخوانده نمی‌شود (فقط modshop ها).

رفع اینجا: https://pastebin.com/G81da7N1

:::

:::warning

باگ‌های شناخته شده:

- پیش‌نمایش کامپوننت داخل mod shop ممکن است این کالبک را فراخوانی کند.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnVehiclePaintjob](OnVehiclePaintjob): این کالبک زمانی فراخوانده می‌شود که paintjob وسیله نقلیه تغییر کند.
- [OnVehicleMod](OnVehicleMod): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه تیوننگ شود.
- [OnEnterExitModShop](OnEnterExitModShop): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه وارد یا خارج mod shop شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [ChangeVehicleColor](../functions/ChangeVehicleColor): تنظیم رنگ وسیله نقلیه.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): تغییر paintjob روی وسیله نقلیه.