---
title: AddStaticVehicleEx
sidebar_label: AddStaticVehicleEx
description: یک وسیله نقلیه 'استاتیک' (مدل‌ها از قبل برای بازیکنان بارگذاری می‌شوند) را به گیم مود اضافه می‌کند.
tags: ["vehicle"]
---

## توضیحات

یک وسیله نقلیه 'استاتیک' (مدل‌ها از قبل برای بازیکنان بارگذاری می‌شوند) را به گیم مود اضافه می‌کند.

تنها در یک مورد با AddStaticVehicle متفاوت است: امکان تنظیم زمان ریسپان را برای زمانی که وسیله نقلیه توسط راننده خالی از سکنه باشد فراهم می‌کند.

| نام                                    | توضیحات                                                                                                        |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| modelid                                | [شناسه مدل](../resources/vehicleid) برای وسیله نقلیه.                                                           |
| Float:spawnX                           | مختصات X برای وسیله نقلیه.                                                                                     |
| Float:spawnY                           | مختصات Y برای وسیله نقلیه.                                                                                     |
| Float:spawnZ                           | مختصات Z برای وسیله نقلیه.                                                                                     |
| Float:angle                            | زاویه جهت وسیله نقلیه.                                                                                         |
| [colour1](../resources/vehiclecolorid) | شناسه رنگ اصلی.                                                                                               |
| [colour2](../resources/vehiclecolorid) | شناسه رنگ فرعی.                                                                                               |
| respawnDelay                           | تأخیر تا ریسپان خودرو بدون راننده، بر حسب ثانیه.                                                                |
| bool:addSiren                          | مقدار پیش‌فرض 'false' دارد. وسیله نقلیه را قادر به داشتن آژیر می‌کند، به شرطی که وسیله نقلیه بوق داشته باشد. |

## مقدار بازگشتی

شناسه وسیله نقلیه ایجاد شده (1 - MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) اگر وسیله نقلیه ایجاد نشد (به حد مجاز وسایل نقلیه رسیده یا شناسه مدل نامعتبر ارسال شده).

## مثال‌ها

```c
public OnGameModeInit()
{
    // اضافه کردن یک Hydra (520) به بازی که 15 ثانیه پس از ترک آن ریسپان می‌شود
    AddStaticVehicleEx(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);

    return 1;
}
```

## توابع مرتبط

- [AddStaticVehicle](AddStaticVehicle): اضافه کردن یک وسیله نقلیه استاتیک.
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