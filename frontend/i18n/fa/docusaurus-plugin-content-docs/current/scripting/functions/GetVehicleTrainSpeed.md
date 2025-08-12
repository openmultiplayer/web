---
title: GetVehicleTrainSpeed
sidebar_label: GetVehicleTrainSpeed
description: سرعت قطار رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

سرعت قطار رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات            |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه. |

## مثال‌ها

```c
new vehicleid = GetPlayerVehicleID(playerid);

new Float:speed = GetVehicleTrainSpeed(vehicleid);
```

## توابع مرتبط

- [GetPlayerTrainSpeed](GetPlayerTrainSpeed): سرعت قطار بازیکن رو دریافت می‌کنه.