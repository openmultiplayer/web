---
title: GetVehicleDriver
sidebar_label: GetVehicleDriver
description: playerid شخصی که داره وسیله نقلیه رو رانندگی می‌کنه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

playerid شخصی که داره وسیله نقلیه رو رانندگی می‌کنه رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات                                 |
|-----------|---------------------------------------------|
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای راننده‌ش رو بگیری. |

## مقادیر برگشتی

ID راننده (player ID) رو برمی‌گردونه.

`INVALID_PLAYER_ID` - وسیله نقلیه راننده نداره.

## مثال‌ها

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new driverid = GetVehicleDriver(vehicleid);
    if (driverid != INVALID_PLAYER_ID)
    {
        SendClientMessage(driverid, -1, "Someone is exiting your vehicle.");
    }
    return 1;
}
```

## توابع مرتبط

- [GetVehicleLastDriver](GetVehicleLastDriver): دریافت آخرین راننده یه وسیله نقلیه.