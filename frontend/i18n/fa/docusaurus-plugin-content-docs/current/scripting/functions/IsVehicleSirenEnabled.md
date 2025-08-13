---
title: IsVehicleSirenEnabled
sidebar_label: IsVehicleSirenEnabled
description: چک می‌کنه که آژیر ماشین روشنه یا خاموش.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آژیر ماشین روشنه یا خاموش.

## پارامترها

| نام       | توضیحات                        |
|-----------|---------------------------------|
| vehicleid | ID ماشینی که باید چک بشه.       |

## مقادیر برگشتی

**true** - آژیر ماشین روشنه.

**false** - آژیر ماشین خاموشه.

## مثال‌ها

```c
if (IsVehicleSirenEnabled(vehicleid))
{
    // Vehicle siren is on
}
else
{
    // Vehicle siren is off
}
```

## توابع مرتبط

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): روشن یا خاموش کردن آژیر ماشین.
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): روشن یا خاموش کردن آژیر ماشین.
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): چک کردن اینکه آژیر ماشین روشنه یا خاموش.