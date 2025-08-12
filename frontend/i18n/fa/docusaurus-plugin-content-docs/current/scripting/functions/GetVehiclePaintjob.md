---
title: GetVehiclePaintjob
sidebar_label: GetVehiclePaintjob
description: ID paintjob وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

ID paintjob وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات            |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه. |

## مقادیر برگشتی

[ID paintjob](../resources/paintjobs) رو برمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    ChangeVehiclePaintjob(vehicleid, 2);

    new paintjob = GetVehiclePaintjob(vehicleid);
    // paintjob = 2
    return 1;
}
```

## توابع مرتبط

- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): تغییر paintjob یه وسیله نقلیه