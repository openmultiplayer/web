---
title: GetVehicleSeats
sidebar_label: GetVehicleSeats
description: تعداد صندلی‌های وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

تعداد صندلی‌های وسیله نقلیه رو دریافت می‌کنه.

| نام      | توضیحات        |
| --------- | ------------------ |
| modelid | ID مدل وسیله نقلیه. |

## مقادیر برگشتی

تعداد صندلی‌ها رو برمی‌گردونه.

**255** اگه مدل نامعتبر باشه.

## مثال‌ها

```c
new vehicleid = GetPlayerVehicleID(playerid);
new modelid = GetVehicleModel(vehicleid);
new seats = GetVehicleSeats(modelid);

new string[64];
format(string, sizeof(string), "Number of seats in this vehicle: %d", seats);
SendClientMessage(playerid, -1, string);
```

## توابع مرتبط

- [PutPlayerInVehicle](PutPlayerInVehicle): گذاشتن یه بازیکن در وسیله نقلیه.