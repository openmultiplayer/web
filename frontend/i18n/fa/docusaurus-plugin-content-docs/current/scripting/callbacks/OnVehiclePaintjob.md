---
title: OnVehiclePaintjob
sidebar_label: OnVehiclePaintjob
description: این کالبک زمانی فراخوانده می‌شود که بازیکن paintjob وسیله نقلیه را داخل mod shop پیش‌نمایش کند.
tags: ["vehicle"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن paintjob وسیله نقلیه را داخل mod shop پیش‌نمایش کند. توجه کنید، این کالبک زمانی که بازیکن paintjob را خریداری می‌کند فراخوانده نمی‌شود.

| نام        | توضیحات                                                    |
| ---------- | ---------------------------------------------------------------- |
| playerid   | شناسه بازیکنی که paintjob وسیله نقلیه خود را تغییر داده است.    |
| vehicleid  | شناسه وسیله نقلیه‌ای که paintjob آن تغییر کرده است.           |
| paintjobid | شناسه paintjob جدید.                                          |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود بنابراین برگرداندن 0 در آنجا سایر filterscript ها را از پردازش آن مسدود می‌کند.

## مثال‌ها

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "You have changed your vehicle's paintjob to %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## نکته‌ها

:::tip

این کالبک توسط ChangeVehiclePaintjob فراخوانده نمی‌شود. ممکن است از OnVehicleChangePaintjob از vSync استفاده کنید تا بدانید بازیکن کی paintjob را خریداری می‌کند.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnVehicleRespray](OnVehicleRespray): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه دوباره رنگ‌آمیزی شود.
- [OnVehicleMod](OnVehicleMod): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه تیوننگ شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): تغییر paintjob روی وسیله نقلیه.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): تنظیم رنگ وسیله نقلیه.