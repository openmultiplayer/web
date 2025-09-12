---
title: GetPlayerLastSyncedTrailerID
sidebar_label: GetPlayerLastSyncedTrailerID
description: دریافت آخرین ID تریلر sync شده بازیکن.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده است.

:::

## توضیحات

دریافت آخرین ID تریلر sync شده بازیکن.

## پارامترها

| نام     | توضیحات           |
|----------|-----------------------|
| playerid | ID بازیکن. |

## مقادیر برگشتی

آخرین ID تریلر sync شده را برمی‌گرداند.

## مثال‌ها

```c
new trailerid = GetPlayerLastSyncedTrailerID(playerid);
```

## توابع مرتبط

- [GetPlayerLastSyncedVehicleID](GetPlayerLastSyncedVehicleID): دریافت آخرین ID وسیله نقلیه sync شده بازیکن.