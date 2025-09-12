---
title: IsVehicleOccupied
sidebar_label: IsVehicleOccupied
description: چک کردن اینکه ماشین اشغال شده یا نه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک کردن اینکه ماشین اشغال شده یا نه.

## پارامترها

| نام       | توضیحات      |
|-----------|-------------|
| vehicleid | ID ماشین.   |

## مقادیر برگشتی

**true** - ماشین اشغال شده.

**false** - ماشین اشغال نشده.

## مثال‌ها

```c
if (IsVehicleOccupied(vehicleid))
{
    // Vehicle is occupied
}
else
{
    // Vehicle is not occupied
}
```

## توابع مرتبط

- [SetVehicleBeenOccupied](SetVehicleBeenOccupied): تنظیم وضعیت اشغال ماشین.