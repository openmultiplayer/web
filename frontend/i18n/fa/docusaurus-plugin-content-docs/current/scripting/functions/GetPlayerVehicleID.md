---
title: GetPlayerVehicleID
sidebar_label: GetPlayerVehicleID
description: این تابع ID وسیله نقلیه‌ای که بازیکن در حال حاضر در آن است را دریافت می‌کند.
tags: ["player", "vehicle"]
---

## توضیحات

این تابع ID وسیله نقلیه‌ای که بازیکن در حال حاضر در آن است را دریافت می‌کند.

**نکته:** ID مدل وسیله نقلیه نیست. برای آن [GetVehicleModel](GetVehicleModel) را ببینید.

| نام     | توضیحات                                                        |
| -------- | ------------------------------------------------------------------ |
| playerid | ID بازیکن در وسیله نقلیه‌ای که می‌خواهید ID آن را دریافت کنید |

## مقادیر برگشتی

ID وسیله نقلیه یا **0** اگر در وسیله نقلیه نباشد

## مثال‌ها

```c
// Add 10x Nitro if the player is in a car. Might be called on a command.
new vehicleId = GetPlayerVehicleID(playerid);
if (vehicleId != 0)
{
    AddVehicleComponent(vehicleId, 1010);
}
```

## توابع مرتبط

- [IsPlayerInVehicle](IsPlayerInVehicle): بررسی اینکه آیا بازیکن در وسیله نقلیه خاصی است.
- [IsPlayerInAnyVehicle](IsPlayerInAnyVehicle): بررسی اینکه آیا بازیکن در هر وسیله نقلیه‌ای است.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): بررسی اینکه بازیکن در کدام صندلی است.
- [GetVehicleModel](GetVehicleModel): دریافت ID مدل وسیله نقلیه.