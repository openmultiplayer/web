---
title: GetVehicleColours
sidebar_label: GetVehicleColours
description: رنگ‌های وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ‌های وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات                                                          |
|-----------|----------------------------------------------------------------------|
| vehicleid | ID وسیله نقلیه.                                               |
| &colour1  | متغیری برای ذخیره مقدار colour1 که به صورت reference پاس داده می‌شه. |
| &colour2  | متغیری برای ذخیره مقدار colour2 که به صورت reference پاس داده می‌شه. |

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    new 
        colour1,
        colour2;

    GetVehicleColours(vehicleid, colour1, colour2);
    // colour1 = 6
    // colour2 = 0
    return 1;
}
```

## توابع مرتبط

- [ChangeVehicleColours](ChangeVehicleColours): تغییر رنگ‌های اصلی و ثانویه یه وسیله نقلیه.

## منابع مرتبط

- [Vehicle Colour IDs](../resources/vehiclecolorid)