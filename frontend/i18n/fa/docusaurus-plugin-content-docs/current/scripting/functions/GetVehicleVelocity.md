---
title: GetVehicleVelocity
sidebar_label: GetVehicleVelocity
description: سرعت یه وسیله نقلیه رو در محورهای X، Y و Z دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

سرعت یه وسیله نقلیه رو در محورهای X، Y و Z دریافت می‌کنه.

| نام       | توضیحات                                                                              |
| --------- | ------------------------------------------------------------------------------------ |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای سرعتش رو بگیری.                                          |
| &Float:x  | متغیر float برای ذخیره سرعت X وسیله نقلیه که بصورت reference پاس داده می‌شه.       |
| &Float:y  | متغیر float برای ذخیره سرعت Y وسیله نقلیه که بصورت reference پاس داده می‌شه.       |
| &Float:z  | متغیر float برای ذخیره سرعت Z وسیله نقلیه که بصورت reference پاس داده می‌شه.       |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی وسیله نقلیه مشخص شده وجود نداره.

سرعت وسیله نقلیه در متغیرهای مشخص شده ذخیره می‌شه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/GetMyCarVelocity", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new
            Float: vehVelocity[3],
            string[128];

        GetVehicleVelocity(GetPlayerVehicleID(playerid), vehVelocity[0], vehVelocity[1], vehVelocity[2]);
        
        format(string, sizeof(string), "You are going at a velocity of X%f, Y%f, Z%f", vehVelocity[0], vehVelocity[1], vehVelocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

این تابع رو می‌تونی برای دریافت سرعت وسیله نقلیه استفاده کنی (km/h، m/s یا mph).

:::

## توابع مرتبط

- [SetVehicleVelocity](SetVehicleVelocity): تنظیم سرعت یه وسیله نقلیه.
- [SetPlayerVelocity](SetPlayerVelocity): تنظیم سرعت یه بازیکن.
- [GetPlayerVelocity](GetPlayerVelocity): دریافت سرعت یه بازیکن.