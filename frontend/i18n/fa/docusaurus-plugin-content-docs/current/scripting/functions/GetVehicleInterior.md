---
title: GetVehicleInterior
sidebar_label: GetVehicleInterior
description: ID interior یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

ID interior یه وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات            |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه. |

## مقادیر برگشتی

ID interior وسیله نقلیه رو برمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    LinkVehicleToInterior(vehicleid, 15);

    new interiorid = GetVehicleInterior(vehicleid);
    // interiorid = 15
    return 1;
}
```

## توابع مرتبط

- [LinkVehicleToInterior](LinkVehicleToInterior): وصل کردن یه وسیله نقلیه به یه interior.