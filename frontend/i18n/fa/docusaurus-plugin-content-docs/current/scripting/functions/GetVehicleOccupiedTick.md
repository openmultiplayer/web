---
title: GetVehicleOccupiedTick
sidebar_label: GetVehicleOccupiedTick
description: occupied tick یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

occupied tick یه وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات            |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه. |

## مقادیر برگشتی

occupied tick رو به millisecond برمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new occupiedTick = GetVehicleOccupiedTick(vehicleid);
    printf("Vehicle ID %d occupied tick: %d ms", vehicleid, occupiedTick);
    return 1;
}
```

## توابع مرتبط

- [SetVehicleOccupiedTick](SetVehicleOccupiedTick): تنظیم occupied tick یه وسیله نقلیه.