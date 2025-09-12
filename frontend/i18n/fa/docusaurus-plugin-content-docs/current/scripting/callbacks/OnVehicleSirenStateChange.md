---
title: OnVehicleSirenStateChange
sidebar_label: OnVehicleSirenStateChange
description: این کالبک زمانی فراخوانده می‌شود که آژیر وسیله نقلیه تغییر وضعیت دهد.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که آژیر وسیله نقلیه تغییر وضعیت دهد.

| نام       | توضیحات                                                   |
| --------- | --------------------------------------------------------- |
| playerid  | شناسه بازیکنی که آژیر را تغییر وضعیت داده است (راننده).    |
| vehicleid | شناسه وسیله نقلیه‌ای که آژیر آن تغییر وضعیت کرده است.      |
| newstate  | 0 اگر آژیر خاموش شده، 1 اگر آژیر روشن شده است.          |

## مقادیر برگشتی

1 - از دریافت این کالبک توسط gamemode جلوگیری می‌کند.

0 - نشان می‌دهد که این کالبک به gamemode منتقل خواهد شد.

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Siren ~G~on", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Siren ~r~off", 1000, 3);
    }
    return 1;
}
```

## نکته‌ها

:::tip

این کالبک فقط زمانی فراخوانده می‌شود که آژیر وسیله نقلیه روشن یا خاموش شود، نه زمانی که آژیر متناوب در استفاده است (نگه داشتن بوق).

:::

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): بررسی اینکه آیا آژیر وسیله نقلیه روشن یا خاموش است.