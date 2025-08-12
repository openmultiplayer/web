---
title: GetPlayerLastSyncedVehicleID
sidebar_label: GetPlayerLastSyncedVehicleID
description: دریافت آخرین ID وسیله نقلیه sync شده بازیکن.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده است.

:::

## توضیحات

دریافت آخرین ID وسیله نقلیه sync شده بازیکن.

## پارامترها

| نام     | توضیحات           |
|----------|-----------------------|
| playerid | ID بازیکن. |

## مقادیر برگشتی

آخرین ID وسیله نقلیه sync شده را برمی‌گرداند.

## مثال‌ها

```c
new vehicleid = GetPlayerLastSyncedVehicleID(playerid);
```

## توابع مرتبط

- [GetPlayerLastSyncedTrailerID](GetPlayerLastSyncedTrailerID): دریافت آخرین ID تریلر sync شده بازیکن.