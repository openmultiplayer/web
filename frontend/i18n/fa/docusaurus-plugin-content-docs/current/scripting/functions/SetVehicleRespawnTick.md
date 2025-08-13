---
title: SetVehicleRespawnTick
sidebar_label: SetVehicleRespawnTick
description: respawn tick یه ماشین رو تنظیم می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده.

:::

## توضیحات

respawn tick یه ماشین رو تنظیم می‌کنه.

## پارامترها

| نام       | توضیحات            |
|-----------|------------------------|
| vehicleid | ID ماشین. |
| ticks     | tick هایی که باید تنظیم بشن.      |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود.

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    SetVehicleRespawnTick(vehicleid, 300);
    return 1;
}
```

## توابع مرتبط

- [GetVehicleRespawnTick](GetVehicleRespawnTick): respawn tick یه ماشین رو دریافت می‌کنه.