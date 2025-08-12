---
title: GetVehicleDistanceFromPoint
sidebar_label: GetVehicleDistanceFromPoint
description: این تابع برای محاسبه فاصله (به صورت float) بین یه وسیله نقلیه و یه نقطه دیگه در نقشه استفاده می‌شه.
tags: ["vehicle"]
---

## توضیحات

این تابع برای محاسبه فاصله (به صورت float) بین یه وسیله نقلیه و یه نقطه دیگه در نقشه استفاده می‌شه. این برای تشخیص اینکه یه وسیله نقلیه چقدر از یه مکان دور هست مفیده.

| نام      | توضیحات                                          |
| --------- | ---------------------------------------------------- |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای فاصله‌ش رو محاسبه کنی. |
| Float:x   | مختصات X نقشه.                                |
| Float:y   | مختصات Y نقشه.                                |
| Float:z   | مختصات Z نقشه.                                |

## مقادیر برگشتی

یه float که شامل فاصله از نقطه مشخص شده در مختصات هست.

## مثال‌ها

```c
/* when the player types 'vendingmachine' in to the chat box, they'll see this.*/
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "vendingmachine", true) == 0)
    {
        new
            string[64],
            vehicleid = GetPlayerVehicleID(playerid);
        
        new
            Float:distance = GetVehicleDistanceFromPoint(vehicleid, 237.9, 115.6, 1010.2);

        format(string, sizeof(string), "You're %.2f away from our vending machine.", distance);
        SendClientMessage(playerid, 0xA9C4E4FF, string);
    }
    return 0;
}
```

## توابع مرتبط

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): دریافت فاصله بین یه بازیکن و یه نقطه.
- [GetVehiclePos](GetVehiclePos): دریافت موقعیت یه وسیله نقلیه.