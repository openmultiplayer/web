---
title: GetVehiclePoolSize
sidebar_label: GetVehiclePoolSize
description: بالاترین vehicleid که در حال حاضر در سرور استفاده می‌شه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

بالاترین vehicleid که در حال حاضر در سرور استفاده می‌شه رو دریافت می‌کنه. توجه کن که در SA:MP این تابع خرابه و حتی وقتی هیچ وسیله نقلیه‌ای نیست `0` برمی‌گردونه. fixes.inc و open.mp این رو درست کردن که `-1` برگردونه، اما همچنین این تابع رو deprecated کردن به نفع `MAX_VEHICLES` یا `foreach`.

## مثال‌ها

```c
RepairAllVehicles()
{
    // vehicleids start at 1
    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++)
    {
        RepairVehicle(i);
    }
}
```

## توابع مرتبط

- [GetPlayerPoolSize](GetPlayerPoolSize): بالاترین playerid متصل به سرور رو دریافت می‌کنه.