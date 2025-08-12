---
title: GetPlayerSurfingVehicleID
sidebar_label: GetPlayerSurfingVehicleID
description: دریافت ID وسیله نقلیه‌ای که بازیکن روی آن surfing می‌کند (چسبیده به سقف).
tags: ["player", "vehicle"]
---

## توضیحات

دریافت ID وسیله نقلیه‌ای که بازیکن روی آن surfing می‌کند (چسبیده به سقف).

| نام     | توضیحات                                                      |
| -------- | ---------------------------------------------------------------- |
| playerid | ID بازیکنی که می‌خواهید ID وسیله نقلیه surfingش را بدانید. |

## مقادیر برگشتی

ID وسیله نقلیه‌ای که بازیکن روی آن surfing می‌کند. اگر روی وسیله نقلیه surfing نکنند یا وسیله نقلیه‌ای که روی آن surfing می‌کنند راننده نداشته باشد، `INVALID_VEHICLE_ID`.

اگر بازیکن مشخص شده متصل نباشد، `INVALID_VEHICLE_ID` هم برمی‌گرداند.

## مثال‌ها

```c
new surfingVehicleId = GetPlayerSurfingVehicleID(playerid);
if (surfingVehicleId == INVALID_VEHICLE_ID)
{
	SendClientMessage(playerid, COLOR_RED, "You are not surfing.");
}
```

## توابع مرتبط

- [GetPlayerVehicleID](GetPlayerVehicleID): دریافت ID وسیله نقلیه‌ای که بازیکن در آن است.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): بررسی اینکه بازیکن در کدام صندلی است.
- [GetPlayerSurfingObjectID](GetPlayerSurfingObjectID): دریافت ID objectی که بازیکن روی آن surfing می‌کند.
- [GetPlayerSurfingOffsets](GetPlayerSurfingOffsets): دریافت offsetهای surfing بازیکن.