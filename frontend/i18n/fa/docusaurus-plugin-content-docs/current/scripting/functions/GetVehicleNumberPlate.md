---
title: GetVehicleNumberPlate
sidebar_label: GetVehicleNumberPlate
description: پلاک یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

پلاک یه وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام                 | توضیحات                                                 |
|----------------------|-------------------------------------------------------------|
| vehicleid            | ID وسیله نقلیه.                                      |
| plate[]              | آرایه‌ای برای ذخیره اسم که به صورت reference پاس داده می‌شه. |
| len = sizeof (plate) | طول پلاکی که باید ذخیره بشه.              |

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    SetVehicleNumberPlate(vehicleid, "ABCD 123");

    new numberPlate[16];
    GetVehicleNumberPlate(vehicleid, numberPlate);
    // numberPlate = "ABCD 123"
    return 1;
}
```

## توابع مرتبط

- [SetVehicleNumberPlate](SetVehicleNumberPlate): تنظیم پلاک وسیله نقلیه.