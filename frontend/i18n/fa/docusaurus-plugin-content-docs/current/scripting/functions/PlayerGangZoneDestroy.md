---
title: PlayerGangZoneDestroy
sidebar_label: PlayerGangZoneDestroy
description: player gangzone را نابود کن
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

player gangzone را نابود می‌کند.

| نام      | توضیحات                                                       |
| -------- | ------------------------------------------------------------ |
| playerid | ID بازیکنی که player gangzone برایش نابود خواهد شد.          |
| zoneid   | ID player gangzone برای نابود کردن.                         |

## مقدار بازگشتی

**1:** تابع با موفقیت اجرا شد.

**0:** اجرای تابع ناموفق بود. gangzone مشخص شده وجود ندارد.

## مثال‌ها

```c
// This variable is used to store the id of the gangzone
// so that we can use it throught the script
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
}

public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // Check for the existence of gangzone and if it exists, destroy it
    if (IsValidPlayerGangZone(playerid, gGangZoneID[playerid]))
    {
        PlayerGangZoneDestroy(playerid, gGangZoneID[playerid]);
        gGangZoneID[playerid] = INVALID_GANG_ZONE;
    }
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerGangZone](CreatePlayerGangZone): player gangzone بساز.
- [PlayerGangZoneShow](PlayerGangZoneShow): player gangzone را در یک رنگ نمایش بده.
- [PlayerGangZoneHide](PlayerGangZoneHide): player gangzone را مخفی کن.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): چشمک زدن player gangzone را شروع کن.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): چشمک زدن player gangzone را متوقف کن.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): رنگ player gangzone را بگیر.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): رنگ چشمک زدن player gangzone را بگیر.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): موقعیت gangzone را بگیر، نمایش داده شده توسط مختصات minX, minY, maxX, maxY.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): بررسی کن که آیا player gangzone معتبر است.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): بررسی کن که آیا بازیکن در player gangzone است.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): بررسی کن که آیا player gangzone قابل مشاهده است.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): بررسی کن که آیا player gangzone چشمک می‌زند.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): callback را فعال کن وقتی بازیکن وارد/خارج این zone می‌شود.