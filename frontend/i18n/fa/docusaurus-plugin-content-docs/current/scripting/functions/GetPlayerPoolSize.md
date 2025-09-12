---
title: GetPlayerPoolSize
sidebar_label: GetPlayerPoolSize
description: دریافت بالاترین playerid که در حال حاضر در سرور استفاده می‌شود.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

دریافت بالاترین playerid که در حال حاضر در سرور استفاده می‌شود. توجه کنید که در SA:MP این تابع خراب است و حتی زمانی که هیچ بازیکنی نیست `0` برمی‌گرداند. fixes.inc و open.mp این را اصلاح می‌کنند تا `-1` برگرداند، اما همچنین این تابع را به نفع `MAX_PLAYERS` یا `foreach` منسوخ می‌کنند.

## مثال‌ها

```c
FreezeAll()
{
    // note that we assign the return value to a new variable (j) to avoid calling the function with each iteration
    for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
    {
        TogglePlayerControllable(i, 0);
    }
}
```

## توابع مرتبط

- [GetVehiclePoolSize](GetVehiclePoolSize): دریافت بالاترین vehicleid که در حال حاضر در سرور استفاده می‌شود.
- [GetMaxPlayers](GetMaxPlayers): دریافت حداکثر تعداد بازیکنان که می‌توانند به سرور بپیوندند.