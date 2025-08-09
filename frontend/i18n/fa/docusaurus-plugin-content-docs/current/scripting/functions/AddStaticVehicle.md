---
title: AddStaticVehicle
sidebar_label: AddStaticVehicle
description: یک وسیله نقلیه 'استاتیک' (مدل‌ها از قبل برای بازیکنان بارگذاری می‌شوند) را به گیم مود اضافه می‌کند.
tags: ["vehicle"]
---

## توضیحات

یک وسیله نقلیه 'استاتیک' (مدل‌ها از قبل برای بازیکنان بارگذاری می‌شوند) را به گیم مود اضافه می‌کند.

| نام                                    | توضیحات                                                 |
| -------------------------------------- | ------------------------------------------------------- |
| modelid                                | [شناسه مدل](../resources/vehicleid) برای وسیله نقلیه.   |
| Float:spawnX                           | مختصات X برای وسیله نقلیه.                             |
| Float:spawnY                           | مختصات Y برای وسیله نقلیه.                             |
| Float:spawnZ                           | مختصات Z برای وسیله نقلیه.                             |
| Float:angle                            | جهت وسیله نقلیه - زاویه.                               |
| [colour1](../resources/vehiclecolorid) | شناسه رنگ اصلی. -1 برای تصادفی.                        |
| [colour2](../resources/vehiclecolorid) | شناسه رنگ فرعی. -1 برای تصادفی.                        |

## مقدار بازگشتی

شناسه وسیله نقلیه ایجاد شده (بین 1 و MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) اگر وسیله نقلیه ایجاد نشد (به حد مجاز وسایل نقلیه رسیده یا شناسه مدل نامعتبر ارسال شده).

## مثال‌ها

```c
public OnGameModeInit()
{
    // اضافه کردن یک Hydra به بازی
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## توابع مرتبط

- [AddStaticVehicleEx](AddStaticVehicleEx): اضافه کردن یک وسیله نقلیه استاتیک با زمان ریسپان سفارشی.
- [CreateVehicle](CreateVehicle): ایجاد یک وسیله نقلیه.
- [DestroyVehicle](DestroyVehicle): نابود کردن یک وسیله نقلیه.
- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): بررسی اینکه آژیر وسیله نقلیه روشن است یا خاموش.
- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): تنظیم مدل، مکان ظهور، رنگ‌ها، تأخیر ریسپان و اینتریور وسیله نقلیه.
- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): دریافت مکان ظهور و رنگ‌های وسیله نقلیه.
- [ChangeVehicleColours](ChangeVehicleColours): تغییر رنگ‌های اصلی و فرعی وسیله نقلیه.
- [GetVehicleColours](GetVehicleColours): دریافت رنگ‌های وسیله نقلیه.
- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): تنظیم تأخیر ریسپان وسیله نقلیه.
- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): دریافت تأخیر ریسپان وسیله نقلیه.

## کالبک‌های مرتبط

- [OnVehicleSpawn](../callbacks/OnVehicleSpawn): هنگامی که وسیله نقلیه ریسپان می‌شود فراخوانی می‌شود.
- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): هنگامی که آژیر وسیله نقلیه روشن/خاموش می‌شود فراخوانی می‌شود.

## منابع مرتبط

- [مدل‌های وسیله نقلیه](../resources/vehicleid): لیست جامع تمام مدل‌های وسیله نقلیه موجود در بازی.
- [شناسه‌های رنگ وسیله نقلیه](../resources/vehiclecolorid): لیست تمام شناسه‌های رنگ وسیله نقلیه.