---
title: ShowVehicle
sidebar_label: ShowVehicle
description: وسیله نقلیه پنهان شده را نمایش می‌دهد.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده است.

:::

## توضیحات

وسیله نقلیه پنهان شده را نمایش می‌دهد.

## پارامترها

| نام       | توضیحات                                      |
|-----------|---------------------------------------------|
| vehicleid | شناسه وسیله نقلیه‌ای که باید نمایش داده شود. |

## مثال‌ها

```c
new g_Vehicle;

public OnGameModeInit()
{
    g_Vehicle = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);
    HideVehicle(g_Vehicle);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showvehicle", true))
    {
        if (IsVehicleHidden(g_Vehicle))
        {
            ShowVehicle(g_Vehicle);
        }
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [HideVehicle](HideVehicle): وسیله نقلیه را از بازی پنهان می‌کند.
- [IsVehicleHidden](IsVehicleHidden): بررسی می‌کند که آیا وسیله نقلیه پنهان است یا نه.