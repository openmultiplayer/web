---
title: SetVehicleBeenOccupied
sidebar_label: SetVehicleBeenOccupied
description: اشغال بودن ماشین رو تنظیم می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده.

:::

## توضیحات

اشغال بودن ماشین رو تنظیم می‌کنه.

## پارامترها

| نام           | توضیحات                          |
|---------------|--------------------------------------|
| vehicleid     | ID ماشین.               |
| bool:occupied | **true**: اشغال شده - **false**: اشغال نشده |

## مثال‌ها

```c
SetVehicleBeenOccupied(vehicleid, true);
```

## توابع مرتبط

- [HasVehicleBeenOccupied](HasVehicleBeenOccupied): بررسی می‌کنه که آیا ماشین اشغال هست یا نه.