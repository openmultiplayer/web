---
title: GetVehicleLastDriver
sidebar_label: GetVehicleLastDriver
description: آخرین راننده یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آخرین راننده یه وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات            |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه. |

## مقادیر برگشتی

ID آخرین راننده (player ID) رو برمی‌گردونه.

`INVALID_PLAYER_ID` - وسیله نقلیه آخرین راننده نداره.

## مثال‌ها

```c
new g_Vehicle;

public OnGameModeInit()
{
    g_Vehicle = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);
}

public OnGameModeExit()
{
    new lastDriver = GetVehicleLastDriver(g_Vehicle);
    if (lastDriver != INVALID_PLAYER_ID)
    {
        printf("Vehicle ID %d last driver: %d", g_Vehicle, lastDriver);
    }
    else
    {
        printf("Vehicle ID %d has no last driver.", g_Vehicle);
    }
}
```

## توابع مرتبط

- [GetVehicleDriver](GetVehicleDriver): دریافت playerid شخصی که داره وسیله نقلیه رو رانندگی می‌کنه.