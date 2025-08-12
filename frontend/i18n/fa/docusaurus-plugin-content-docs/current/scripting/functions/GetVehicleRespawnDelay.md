---
title: GetVehicleRespawnDelay
sidebar_label: GetVehicleRespawnDelay
description: تاخیر respawn یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

تاخیر respawn یه وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات            |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه. |

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new respawnDelay = GetVehicleRespawnDelay(vehicleid);
    // respawnDelay = 60
    return 1;
}
```

## توابع مرتبط

- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): تنظیم تاخیر respawn یه وسیله نقلیه.