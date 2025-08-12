---
title: GetVehiclePos
sidebar_label: GetVehiclePos
description: موقعیت یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

موقعیت یه وسیله نقلیه رو دریافت می‌کنه.

| نام      | توضیحات                                                               |
| --------- | ------------------------------------------------------------------------- |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای موقعیت‌ش رو دریافت کنی.                             |
| &Float:x  | متغیر float برای ذخیره مختصات X که به صورت reference پاس داده می‌شه. |
| &Float:y  | متغیر float برای ذخیره مختصات Y که به صورت reference پاس داده می‌شه. |
| &Float:z  | متغیر float برای ذخیره مختصات Z که به صورت reference پاس داده می‌شه. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع موفق به اجرا نشد. وسیله نقلیه مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehpos", true) == 0)
     {
          new vehicleid = GetPlayerVehicleID(playerid);

          // if vehicleid is equal to 0
          if (vehicleid == 0)
          {
               return SendClientMessage(playerid, -1, "You are not in any vehicle!");
          }

          new
               Float:vehX, Float:vehY, Float:vehZ,
               string[128];

          GetVehiclePos(vehicleid, vehX, vehY, vehZ);
          format(string, sizeof(string), "The current vehicle positions are: %f, %f, %f", vehX, vehY, vehZ);
          SendClientMessage(playerid, 0xFFFFFFFF, string);
          return 1;
     }

     return 0;
}
```

## توابع مرتبط

- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): دریافت فاصله بین یه وسیله نقلیه و یه نقطه.
- [SetVehiclePos](SetVehiclePos): تنظیم موقعیت یه وسیله نقلیه.
- [GetVehicleZAngle](GetVehicleZAngle): بررسی زاویه فعلی یه وسیله نقلیه.
- [GetVehicleRotationQuat](GetVehicleRotationQuat): دریافت quaternion چرخش یه وسیله نقلیه.