---
title: GetVehicleLandingGearState
sidebar_label: GetVehicleLandingGearState
description: وضعیت فعلی landing gear وسیله نقلیه رو از آخرین راننده دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

وضعیت فعلی [landing gear](../resources/landinggearstate) وسیله نقلیه رو از آخرین راننده دریافت می‌کنه.

## پارامترها

| نام      | توضیحات            |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه. |

## مثال‌ها

```c
new LANDING_GEAR_STATE:state = GetVehicleLandingGearState(vehicleid);
```

## توابع مرتبط

- [GetPlayerLandingGearState](GetPlayerLandingGearState): دریافت وضعیت landing gear وسیله نقلیه فعلی بازیکن.

## منابع مرتبط

- [Vehicle Landing Gear States](../resources/landinggearstate)