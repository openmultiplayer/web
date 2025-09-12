---
title: SetVehicleRespawnDelay
sidebar_label: SetVehicleRespawnDelay
description: تأخیر respawn یه ماشین رو تنظیم می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

تأخیر respawn یه ماشین رو تنظیم می‌کنه.

## پارامترها

| نام          | توضیحات                            |
|--------------|----------------------------------------|
| vehicleid    | ID ماشین.                 |
| respawnDelay | تأخیر respawn (بر حسب ثانیه) که باید تنظیم بشه. |

## مثال‌ها

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    SetVehicleRespawnDelay(vehicleid, 120);
    return 1;
}
```

## توابع مرتبط

- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): تأخیر respawn یه ماشین رو دریافت می‌کنه.