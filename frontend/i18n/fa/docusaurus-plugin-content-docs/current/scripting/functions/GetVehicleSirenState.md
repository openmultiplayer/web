---
title: GetVehicleSirenState
sidebar_label: GetVehicleSirenState
description: وضعیت آژیر وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

وضعیت آژیر وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام      | توضیحات            |
|-----------|------------------------|
| vehicleid | ID وسیله نقلیه. |

## مقادیر برگشتی

وضعیت آژیر وسیله نقلیه رو برمی‌گردونه.

## مثال‌ها

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new bool:sirenState = GetVehicleSirenState(vehicleid);

    SendClientMessage(playerid, 0xFFFF00FF, "Vehicle siren state: %s", sirenState ? "On" : "Off");
    return 1;
}
```

## توابع مرتبط

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): روشن یا خاموش کردن آژیر یه وسیله نقلیه.
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): روشن یا خاموش کردن آژیر یه وسیله نقلیه.
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): بررسی اینکه آیا آژیر یه وسیله نقلیه روشن یا خاموشه.
- [GetPlayerSirenState](GetPlayerSirenState): دریافت وضعیت آژیر وسیله نقلیه بازیکن.