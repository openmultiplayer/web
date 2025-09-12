---
title: GetVehicleModelsUsed
sidebar_label: GetVehicleModelsUsed
description: تعداد مدل‌های وسیله نقلیه استفاده شده در سرور رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

تعداد مدل‌های وسیله نقلیه استفاده شده در سرور رو دریافت می‌کنه.

## مثال‌ها

```c
public OnGameModeInit()
{
    printf("Used vehicle models: %d", GetVehicleModelsUsed());
}
```

## توابع مرتبط

- [GetVehicleModelCount](GetVehicleModelCount): تعداد مدل یه مدل وسیله نقلیه رو دریافت می‌کنه.