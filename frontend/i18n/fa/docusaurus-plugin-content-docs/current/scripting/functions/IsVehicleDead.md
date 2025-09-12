---
title: IsVehicleDead
sidebar_label: IsVehicleDead
description: چک کردن اینکه ماشین مرده یا نه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک کردن اینکه ماشین مرده یا نه.

## پارامترها

| نام       | توضیحات      |
|-----------|-------------|
| vehicleid | ID ماشین.   |

## مقادیر برگشتی

**true** - ماشین مرده.

**false** - ماشین مرده نیست.

## مثال‌ها

```c
if (IsVehicleDead(vehicleid))
{
    // Vehicle is dead
}
else
{
    // Vehicle is not dead
}
```

## توابع مرتبط

- [SetVehicleDead](SetVehicleDead): تنظیم ماشین به حالت مرده.