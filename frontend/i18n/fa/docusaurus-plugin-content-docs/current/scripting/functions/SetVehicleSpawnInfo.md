---
title: SetVehicleSpawnInfo
sidebar_label: SetVehicleSpawnInfo
description: مدل ماشین، مکان spawn، رنگ‌ها، تأخیر respawn و interior رو تنظیم می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

مدل ماشین، مکان spawn، رنگ‌ها، تأخیر respawn و interior رو تنظیم می‌کنه.

## پارامترها

| نام               | توضیحات                                                 |
|-------------------|-------------------------------------------------------------|
| vehicleid         | ID ماشین.                                      |
| modelid           | id [مدل ماشین](../resources/vehicleid) که باید تنظیم بشه.          |
| Float:spawnX      | مختصات X که باید تنظیم بشه.                                    |
| Float:spawnY      | مختصات Y که باید تنظیم بشه.                                    |
| Float:spawnZ      | مختصات Z که باید تنظیم بشه.                                    |
| Float:angle       | زاویه که باید تنظیم بشه.                                           |
| colour1           | [رنگ ماشین](../resources/vehiclecolorid) 1 که باید تنظیم بشه. |
| colour2           | [رنگ ماشین](../resources/vehiclecolorid) 2 که باید تنظیم بشه. |
| respawnDelay = -2 | تأخیر respawn ماشین که باید تنظیم بشه.                           |
| interior = -2     | id interior که باید تنظیم بشه.                                     |

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    SetVehicleSpawnInfo(vehicleid, 522, 2096.0417, -1314.1062, 24.0078, 0.0000, 1, 7);
    return 1;
}
```

## توابع مرتبط

- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): مکان spawn و رنگ‌های ماشین رو دریافت می‌کنه.