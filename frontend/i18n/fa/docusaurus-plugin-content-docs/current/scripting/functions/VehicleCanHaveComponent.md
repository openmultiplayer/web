---
title: VehicleCanHaveComponent
sidebar_label: VehicleCanHaveComponent
description: آیا این کامپوننت روی مدل وسیله نقلیه مجاز هست؟
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آیا این کامپوننت روی مدل وسیله نقلیه مجاز هست؟

| نام                                      | توضیحات                   |
| ---------------------------------------- | ----------------------------- |
| [modelid](../resources/vehicleid)       | ID مدل وسیله نقلیه              |
| [component](../resources/carcomponentid) | ID کامپوننتی که می‌خوای چک کنی. |

## مقدار برگشتی

**true** - کامپوننت روی وسیله نقلیه مجاز هست.

**false** - کامپوننت روی وسیله نقلیه غیرمجاز هست.

## مثال‌ها

```c
new vehicleid = GetPlayerVehicleID(playerid);

if (VehicleCanHaveComponent(GetVehicleModel(vehicleid), 1010))
{
    SendClientMessage(playerid, 0x00FF00FF, "Nitro is legal on this vehicle.");
    // Nitro roye in vasile mojaz hast
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "Nitro is illegal on this vehicle.");
    // Nitro roye in vasile gheyre mojaz hast
}
```

## توابع مرتبط

- [AddVehicleComponent](AddVehicleComponent): یک کامپوننت به وسیله نقلیه اضافه کن.
- [RemoveVehicleComponent](RemoveVehicleComponent): یک کامپوننت رو از وسیله نقلیه حذف کن.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): چک کن که وسیله نقلیه چه کامپوننت‌هایی داره.
- [GetVehicleComponentType](GetVehicleComponentType): نوع کامپوننت رو از طریق ID چک کن.

## منابع مرتبط

- [Car Component IDs](../resources/carcomponentid)
