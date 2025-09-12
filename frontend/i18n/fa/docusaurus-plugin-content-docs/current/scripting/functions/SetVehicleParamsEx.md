---
title: SetVehicleParamsEx
sidebar_label: SetVehicleParamsEx
description: پارامترهای یه ماشین رو برای همه پلیرها تنظیم می‌کنه.
tags: ["vehicle"]
---

## توضیحات

پارامترهای یه ماشین رو برای همه پلیرها تنظیم می‌کنه.

| نام            | توضیحات                                                     |
| -------------- | --------------------------------------------------------------- |
| vehicleid      | ID ماشینی که می‌خوای پارامترهاش رو تنظیم کنی.                 |
| bool:engine    | وضعیت موتور. 0 - خاموش، 1 - روشن.                                 |
| bool:lights    | وضعیت چراغ. 0 - خاموش، 1 - روشن.                                  |
| bool:alarm     | وضعیت آژیر ماشین. اگه روشن باشه، آژیر شروع می‌شه. 0 - خاموش، 1 - روشن. |
| bool:doors     | وضعیت قفل در. 0 - باز، 1 - قفل.                     |
| bool:bonnet    | وضعیت کاپوت. 0 - بسته، 1 - باز.                     |
| bool:boot      | وضعیت صندوقعقب. 0 - بسته، 1 - باز.                        |
| bool:objective | تغییر حالت فلش objective بالای ماشین. 0 - خاموش، 1 - روشن.  |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. یعنی ماشین وجود نداره.

## مثال‌ها

```c
// balaaye script, yek global variable declare mikonim
new
    gVehicleAlarmTimer[MAX_VEHICLES] = {0, ...};

// age yek parameter ro set mikoni, bayad parameteraaye felio begiri ta hame change nashe
new
    bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;

// jayi ke vehicle ro create mikoni..
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
SetVehicleParamsEx(vehicleid, VEHICLE_PARAMS_ON, lights, alarm, doors, bonnet, boot, objective); // faghat engine param be VEHICLE_PARAMS_ON (1) taghir yaft

// tabe
SetVehicleParamsEx_Fixed(vehicleid, &bool:engine, &bool:lights, &bool:alarm, &bool:doors, &bool:bonnet, &bool:boot, &bool:objective)
{
    SetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm)
    {
        // timer ro kill kon, identifier ro reset kon va age ghablan run mishe dobare start kon
        KillTimer(gVehicleAlarmTimer[vehicleid]);
        gVehicleAlarmTimer[vehicleid] = 0;
        gVehicleAlarmTimer[vehicleid] = SetTimerEx("DisableVehicleAlarm", 20000, false, "d", vehicleid);
    }
}

forward DisableVehicleAlarm(vehicleid);
public DisableVehicleAlarm(vehicleid)
{
    new
        bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;

    GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    if (alarm == VEHICLE_PARAMS_ON)
    {
        SetVehicleParamsEx(vehicleid, engine, lights, VEHICLE_PARAMS_OFF, doors, bonnet, boot, objective);
    }

    // timer identifier ro reset kon
    gVehicleAlarmTimer[vehicleid] = 0;
}
```

## تعاریف

- `VEHICLE_PARAMS_UNSET` (-1)
- `VEHICLE_PARAMS_OFF` (0)
- `VEHICLE_PARAMS_ON` (1)

## نکات

:::tip

- آژیر وقتی تموم شد خودش reset نمی‌شه، باید خودت با این تابع resetش کنی.
- چراغ‌ها در روز هم کار می‌کنن (فقط وقتی [ManualVehicleEngineAndLights](ManualVehicleEngineAndLights) فعال باشه).

:::

## توابع مرتبط

- [GetVehicleParamsEx](GetVehicleParamsEx): پارامترهای یه ماشین رو دریافت می‌کنه.
- [SetVehicleParamsForPlayer](SetVehicleParamsForPlayer): پارامترهای یه ماشین رو برای یه پلیر تنظیم می‌کنه.
- [UpdateVehicleDamageStatus](UpdateVehicleDamageStatus): آسیب ماشین رو به‌روزرسانی می‌کنه.