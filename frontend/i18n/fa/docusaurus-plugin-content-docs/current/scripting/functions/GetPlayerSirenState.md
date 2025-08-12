---
title: GetPlayerSirenState
sidebar_label: GetPlayerSirenState
description: دریافت وضعیت آژیر وسیله نقلیه بازیکن.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت وضعیت آژیر وسیله نقلیه بازیکن.

## پارامترها

| نام     | توضیحات           |
|----------|-----------------------|
| playerid | ID بازیکن. |

## مقادیر برگشتی

وضعیت آژیر وسیله نقلیه را برمی‌گرداند.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/siren", true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new bool:sirenState = GetPlayerSirenState(playerid);

        SendClientMessage(playerid, 0xFFFF00FF, "Vehicle siren state: %s", sirenState ? "On" : "Off");
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): روشن یا خاموش کردن آژیر وسیله نقلیه.
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): روشن یا خاموش کردن آژیر وسیله نقلیه.
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): بررسی اینکه آیا آژیر وسیله نقلیه روشن یا خاموش است.
- [GetVehicleSirenState](GetVehicleSirenState): دریافت وضعیت آژیر وسیله نقلیه.