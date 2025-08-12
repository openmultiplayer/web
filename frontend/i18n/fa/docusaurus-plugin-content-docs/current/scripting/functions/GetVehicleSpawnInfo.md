---
title: GetVehicleSpawnInfo
sidebar_label: GetVehicleSpawnInfo
description: مکان spawn و رنگ‌های وسیله نقلیه رو دریافت می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

مکان spawn و رنگ‌های وسیله نقلیه رو دریافت می‌کنه.

## پارامترها

| نام          | توضیحات                                                                    |
|---------------|--------------------------------------------------------------------------------|
| vehicleid     | ID وسیله نقلیه.                                                         |
| &Float:spawnX | متغیر float برای ذخیره مختصات spawnX که به صورت reference پاس داده می‌شه. |
| &Float:spawnY | متغیر float برای ذخیره مختصات spawnY که به صورت reference پاس داده می‌شه. |
| &Float:spawnZ | متغیر float برای ذخیره مختصات spawnZ که به صورت reference پاس داده می‌شه. |
| &Float:angle  | متغیر float برای ذخیره مختصات angle که به صورت reference پاس داده می‌شه.  |
| &colour1      | متغیری برای ذخیره مقدار colour1 که به صورت reference پاس داده می‌شه.           |
| &colour2      | متغیری برای ذخیره مقدار colour2 که به صورت reference پاس داده می‌شه.           |

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    new 
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:angle,
        colour1,
        colour2;

    GetVehicleSpawnInfo(vehicleid, spawnX, spawnY, spawnZ, angle, colour1, colour2);
    return 1;
}
```

## توابع مرتبط

- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): تنظیم مدل وسیله نقلیه، مکان spawn، رنگ‌ها، تاخیر respawn و interior.