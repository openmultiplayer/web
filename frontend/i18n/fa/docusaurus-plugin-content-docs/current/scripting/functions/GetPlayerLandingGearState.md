---
title: GetPlayerLandingGearState
sidebar_label: GetPlayerLandingGearState
description: دریافت وضعیت چرخ فرود وسیله نقلیه فعلی بازیکن.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت [وضعیت چرخ فرود](../resources/landinggearstate) وسیله نقلیه فعلی بازیکن.

## پارامترها

| نام     | توضیحات           |
|----------|-----------------------|
| playerid | ID بازیکن. |

## مثال‌ها

```c
new LANDING_GEAR_STATE:state = GetPlayerLandingGearState(playerid);
```

## توابع مرتبط

- [GetVehicleLandingGearState](GetVehicleLandingGearState): دریافت وضعیت چرخ فرود وسیله نقلیه از آخرین راننده.

## منابع مرتبط

- [Vehicle Landing Gear States](../resources/landinggearstate)