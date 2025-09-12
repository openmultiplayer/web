---
title: GetVehicleModelCount
sidebar_label: GetVehicleModelCount
description: تعداد مدل یه مدل وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

تعداد مدل یه مدل وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام    | توضیحات                                            |
|---------|--------------------------------------------------------|
| modelid | ID [مدل وسیله نقلیه](../resources/vehicleid). |

## مثال‌ها

```c
public OnGameModeInit()
{
    CreateVehicle(560, 2112.7607, -1308.3751, 23.6797, 90.0000, -1, -1, 100);
	CreateVehicle(560, 2104.5730, -1308.3313, 23.6797, 90.0000, -1, -1, 100);
	CreateVehicle(560, 2120.3616, -1308.4973, 23.6797, 90.0000, -1, -1, 100);

    new modelid = 560;
    printf("Vehicle model: %d - model count: %d", modelid, GetVehicleModelCount(modelid)); // Vehicle model: 560 - model count: 3
}
```

## توابع مرتبط

- [CreateVehicle](CreateVehicle): ساخت یه وسیله نقلیه.
- [GetVehicleModelsUsed](GetVehicleModelsUsed): دریافت تعداد مدل‌های وسیله نقلیه استفاده شده در سرور.