---
title: HasVehicleBeenOccupied
sidebar_label: HasVehicleBeenOccupied
description: چک می‌کنه که آیا یه وسیله نقلیه اشغال شده یا نه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا یه وسیله نقلیه اشغال شده یا نه.

## پارامترها

| نام       | توضیحات                |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه.        |

## مقادیر برگشتی

**true** - وسیله نقلیه اشغال شده.

**false** - وسیله نقلیه اشغال نشده.

## مثال‌ها

```c
if (HasVehicleBeenOccupied(vehicleid))
{
    // Vehicle is occupied
}
else
{
    // Vehicle is not occupied
}
```

## توابع مرتبط

- [SetVehicleBeenOccupied](SetVehicleBeenOccupied): وضعیت اشغال بودن وسیله نقلیه رو تنظیم می‌کنه.