---
title: GetVehicleModel
sidebar_label: GetVehicleModel
description: ID مدل یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

ID مدل یه وسیله نقلیه رو دریافت می‌کنه.

| نام      | توضیحات                                |
| --------- | ------------------------------------------ |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای مدل‌ش رو بگیری. |

## مقادیر برگشتی

[ID مدل وسیله نقلیه](../resources/vehicleid)، یا **0** اگه وسیله نقلیه وجود نداشته باشه.

## مثال‌ها

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    if (GetVehicleModel(vehicleid) == 411) // 411 is the Infernus model
    {
        SendClientMessage(playerid, 0xFFFFFFFF, "Nice Infernus!");
    }
    return 1;
}
```

## توابع مرتبط

- [GetPlayerVehicleID](GetPlayerVehicleID): دریافت ID وسیله نقلیه‌ای که بازیکن توش هست.
- [GetVehiclePos](GetVehiclePos): دریافت موقعیت یه وسیله نقلیه.
- [GetVehicleZAngle](GetVehicleZAngle): بررسی زاویه فعلی یه وسیله نقلیه.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): بررسی اینکه بازیکن در کدام صندلی هست.

## منابع مرتبط

- [Vehicle IDs](../resources/vehicleid)