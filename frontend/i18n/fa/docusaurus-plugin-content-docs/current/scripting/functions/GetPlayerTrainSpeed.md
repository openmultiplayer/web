---
title: GetPlayerTrainSpeed
sidebar_label: GetPlayerTrainSpeed
description: دریافت سرعت قطار بازیکن.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت سرعت قطار بازیکن.

## پارامترها

| نام     | توضیحات           |
|----------|-----------------------|
| playerid | ID بازیکن. |

## مثال‌ها

```c
new Float:speed = GetPlayerTrainSpeed(playerid);
SendClientMessage(playerid, 0xFFFF00FF, "The speed of your train: %f", speed);
```

## توابع مرتبط

- [GetVehicleTrainSpeed](GetVehicleTrainSpeed): دریافت سرعت قطار.