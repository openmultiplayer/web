---
title: SetVehicleParamsSirenState
sidebar_label: SetVehicleParamsSirenState
description: آژیر یه ماشین رو روشن یا خاموش می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آژیر یه ماشین رو روشن یا خاموش می‌کنه.

## پارامترها

| نام          | توضیحات                   |
|--------------|-------------------------------|
| vehicleid    | ID ماشین.        |
| bool:enabled | **true**: روشن - **false**: خاموش |

## مثال‌ها

```c
SetVehicleParamsSirenState(vehicleid, true);
```

## توابع مرتبط

- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): وضعیت آژیر یه ماشین رو برمی‌گردونه (روشن/خاموش).
- [GetVehicleSirenState](GetVehicleSirenState): وضعیت آژیر ماشین رو دریافت می‌کنه.
- [GetPlayerSirenState](GetPlayerSirenState): وضعیت آژیر ماشین پلیر رو دریافت می‌کنه.