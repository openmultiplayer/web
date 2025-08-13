---
title: ToggleVehicleSirenEnabled
sidebar_label: ToggleVehicleSirenEnabled
description: آژیر یک وسیله نقلیه رو روشن یا خاموش کن.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آژیر یک وسیله نقلیه رو روشن یا خاموش می‌کنه.

## پارامترها

| نام          | توضیحات                   |
|--------------|-------------------------------|
| vehicleid    | ID وسیله نقلیه.        |
| bool:enabled | **true**: روشن - **false**: خاموش |

## مثال‌ها

```c
ToggleVehicleSirenEnabled(vehicleid, true);
```

## توابع مرتبط

- [GetVehicleSirenState](GetVehicleSirenState): وضعیت آژیر وسیله نقلیه رو بدست میاره.
- [GetPlayerSirenState](GetPlayerSirenState): وضعیت آژیر وسیله نقلیه بازیکن رو بدست میاره.
