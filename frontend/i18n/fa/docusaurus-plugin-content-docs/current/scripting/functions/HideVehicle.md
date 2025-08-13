---
title: HideVehicle
sidebar_label: HideVehicle
description: یه وسیله نقلیه رو از بازی مخفی می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده.

:::

## توضیحات

یه وسیله نقلیه رو از بازی مخفی می‌کنه.

## پارامترها

| نام       | توضیحات                                 |
|-----------|----------------------------------------|
| vehicleid | ID وسیله نقلیه‌ای که باید مخفی بشه.     |

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);
    HideVehicle(vehicleid);
    return 1;
}
```

## توابع مرتبط

- [ShowVehicle](ShowVehicle): نمایش وسیله نقلیه مخفی شده.
- [IsVehicleHidden](IsVehicleHidden): چک می‌کنه که آیا یه وسیله نقلیه مخفی هست یا نه.