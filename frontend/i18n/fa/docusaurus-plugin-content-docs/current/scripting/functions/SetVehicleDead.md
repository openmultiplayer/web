---
title: SetVehicleDead
sidebar_label: SetVehicleDead
description: ماشین رو به حالت مرده تنظیم می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده.

:::

## توضیحات

ماشین رو به حالت مرده تنظیم می‌کنه.

## پارامترها

| نام       | توضیحات                          |
|-----------|--------------------------------------|
| vehicleid | ID ماشین.               |
| bool:dead | **true**: مرده - **false**: مرده نیست |

## مثال‌ها

```c
SetVehicleDead(vehicleid, true);
```

## توابع مرتبط

- [IsVehicleDead](IsVehicleDead): بررسی می‌کنه که آیا ماشین مرده هست یا نه.