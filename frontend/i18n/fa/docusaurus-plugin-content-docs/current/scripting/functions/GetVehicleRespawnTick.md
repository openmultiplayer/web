---
title: GetVehicleRespawnTick
sidebar_label: GetVehicleRespawnTick
description: respawn tick یه وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

respawn tick یه وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات            |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه. |

## مقادیر برگشتی

respawn tick رو به millisecond برمی‌گردونه.

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new respawnTick = GetVehicleRespawnTick(vehicleid);
    printf("Vehicle ID %d respawn tick: %d ms", vehicleid, respawnTick);
    return 1;
}
```

## توابع مرتبط

- [SetVehicleRespawnTick](SetVehicleRespawnTick): تنظیم respawn tick یه وسیله نقلیه.