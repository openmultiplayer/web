---
title: GetVehicleZAngle
sidebar_label: GetVehicleZAngle
description: چرخش یه وسیله نقلیه رو در محور Z (yaw) دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

چرخش یه وسیله نقلیه رو در محور Z (yaw) دریافت می‌کنه.

| نام          | توضیحات                                                                    |
| ------------ | -------------------------------------------------------------------------- |
| vehicleid    | ID وسیله نقلیه‌ای که می‌خوای زاویه Z ش رو بگیری.                           |
| &Float:angle | متغیر float برای ذخیره چرخش Z که بصورت reference پاس داده می‌شه.         |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی وسیله نقلیه وجود نداره.

چرخش وسیله نقلیه در متغیر مشخص شده ذخیره می‌شه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehrot", true) == 0)
     {
          new
               vehicleid,
               Float:rotZ,
               string[64];

          vehicleid = GetPlayerVehicleID(playerid);
          
          GetVehicleZAngle(vehicleid, rotZ);
          
          format(string, sizeof(string), "The current vehicle rotation is: %.0f", rotZ);
          SendClientMessage(playerid, 0xFFFFFFFF, string);
          return 1;
     }
     return 0;
}
```

## توابع مرتبط

- [GetVehicleRotationQuat](GetVehicleRotationQuat): دریافت چرخش quaternion یه وسیله نقلیه.
- [SetVehicleZAngle](SetVehicleZAngle): تنظیم جهت یه وسیله نقلیه.
- [GetVehiclePos](GetVehiclePos): دریافت موقعیت یه وسیله نقلیه.
- [GetVehicleMatrix](GetVehicleMatrix): دریافت ماتریس چرخش واقعی وسیله نقلیه.
- [GetPlayerFacingAngle](GetPlayerFacingAngle): چک کردن اینکه بازیکن به کدوم سمت نگاه می‌کنه.