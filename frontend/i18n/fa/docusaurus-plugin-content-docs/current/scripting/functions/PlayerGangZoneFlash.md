---
title: PlayerGangZoneFlash
sidebar_label: PlayerGangZoneFlash
description: چشمک زدن player gangzone را شروع کن
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چشمک زدن player gangzone را شروع می‌کند.

| نام         | توضیحات                                                      |
| ----------- | ----------------------------------------------------------- |
| playerid    | ID بازیکنی که player gangzone به آن متصل است.              |
| zoneid      | ID player gangzone برای شروع چشمک زدن.                     |
| flashColour | رنگی که player gangzone با آن چشمک خواهد زد.                |

## مقدار بازگشتی

**1:** تابع با موفقیت اجرا شد. موفقیت حتی اگر player gangzone از قبل چشمک می‌زد گزارش می‌شود.

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

    // Show the gangzone player
    PlayerGangZoneShow(playerid, gGangZoneID[playerid]);

    // Start player gangzone flash    
    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0xFF00FFFF);
}
```

## توابع مرتبط

- [CreatePlayerGangZone](CreatePlayerGangZone): player gangzone بساز.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): player gangzone را نابود کن.
- [PlayerGangZoneShow](PlayerGangZoneShow): player gangzone نمایش بده.
- [PlayerGangZoneHide](PlayerGangZoneHide): player gangzone را مخفی کن.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): چشمک زدن player gangzone را متوقف کن.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): رنگ player gangzone را بگیر.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): رنگ چشمک زدن player gangzone را بگیر.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): موقعیت gangzone را بگیر، نمایش داده شده توسط مختصات minX, minY, maxX, maxY.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): بررسی کن که آیا player gangzone معتبر است.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): بررسی کن که آیا بازیکن در player gangzone است.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): بررسی کن که آیا player gangzone قابل مشاهده است.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): بررسی کن که آیا player gangzone چشمک می‌زند.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): callback را فعال کن وقتی بازیکن وارد/خارج این zone می‌شود.