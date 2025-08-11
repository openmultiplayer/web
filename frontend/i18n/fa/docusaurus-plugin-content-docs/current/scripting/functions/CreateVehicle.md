---
title: CreateVehicle
sidebar_label: CreateVehicle
description: وسیله نقلیه‌ای در دنیا ایجاد می‌کند.
tags: ["vehicle"]
---

## توضیحات

وسیله نقلیه‌ای در دنیا ایجاد می‌کند. می‌تواند در هر زمانی در اسکریپت به جای AddStaticVehicleEx استفاده شود.

| نام                                    | توضیحات                                                                                                               |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [modelid](../resources/vehicleid)      | مدل وسیله نقلیه.                                                                                                      |
| Float:spawnX                           | مختصات X برای وسیله نقلیه.                                                                                             |
| Float:spawnY                           | مختصات Y برای وسیله نقلیه.                                                                                             |
| Float:spawnZ                           | مختصات Z برای وسیله نقلیه.                                                                                             |
| Float:angle                            | زاویه جهت وسیله نقلیه.                                                                                                 |
| [colour1](../resources/vehiclecolorid) | ID رنگ اصلی.                                                                                                          |
| [colour2](../resources/vehiclecolorid) | ID رنگ فرعی.                                                                                                          |
| respawnDelay                           | تاخیر تا زمان respawn شدن ماشین بدون راننده بر حسب ثانیه. استفاده از -1 از respawn شدن وسیله نقلیه جلوگیری می‌کند. |
| bool:addSiren                          | مقدار پیش‌فرض 'false' دارد. وسیله نقلیه را قادر به داشتن آژیر می‌کند، بشرطی که وسیله نقلیه بوق داشته باشد.        |

## مقادیر بازگشتی

ID وسیله نقلیه ایجاد شده (1 تا MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) اگر وسیله نقلیه ایجاد نشد (رسیدن به حداکثر وسیله نقلیه یا ID مدل نامعتبر).

0 اگر وسیله نقلیه ایجاد نشد (ID های 538 یا 537 که قطار هستند).

## مثال‌ها

```c
public OnGameModeInit()
{
    // اضافه کردن Hydra (520) به بازی با زمان respawn 60 ثانیه
    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);
    return 1;
}
```

## نکات

:::warning

قطارها فقط با [AddStaticVehicle](AddStaticVehicle) و [AddStaticVehicleEx](AddStaticVehicleEx) قابل اضافه شدن هستند.

:::

## توابع مرتبط

- [DestroyVehicle](DestroyVehicle): حذف وسیله نقلیه.
- [AddStaticVehicle](AddStaticVehicle): اضافه کردن وسیله نقلیه ثابت.
- [AddStaticVehicleEx](AddStaticVehicleEx): اضافه کردن وسیله نقلیه ثابت با زمان respawn سفارشی.
- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): بررسی اینکه آیا آژیر وسیله نقلیه روشن یا خاموش است.
- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): تنظیم مدل وسیله نقلیه، موقعیت spawn، رنگ‌ها، تاخیر respawn و interior.
- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): دریافت موقعیت spawn و رنگ‌های وسیله نقلیه.
- [ChangeVehicleColours](ChangeVehicleColours): تغییر رنگ‌های اصلی و فرعی وسیله نقلیه.
- [GetVehicleColours](GetVehicleColours): دریافت رنگ‌های وسیله نقلیه.
- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): تنظیم تاخیر respawn وسیله نقلیه.
- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): دریافت تاخیر respawn وسیله نقلیه.

## کالبک‌های مرتبط

- [OnVehicleSpawn](../callbacks/OnVehicleSpawn): زمانی فراخوانی می‌شود که وسیله نقلیه respawn شود.
- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): زمانی فراخوانی می‌شود که آژیر وسیله نقلیه روشن/خاموش شود.

## منابع مرتبط

- [Vehicle Models](../resources/vehicleid): لیست کامل تمام مدل‌های وسیله نقلیه موجود در بازی.
- [Vehicle Colour IDs](../resources/vehiclecolorid): لیست تمام ID های رنگ وسیله نقلیه.