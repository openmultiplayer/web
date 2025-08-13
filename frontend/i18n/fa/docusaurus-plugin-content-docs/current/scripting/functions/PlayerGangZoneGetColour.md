---
title: PlayerGangZoneGetColour
sidebar_label: PlayerGangZoneGetColour
description: رنگ player gangzone را بگیر
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ player gangzone را می‌گیرد.

| نام      | توضیحات                                                   |
| -------- | -------------------------------------------------------- |
| playerid | ID بازیکنی که player gangzone به آن متصل است.           |
| zoneid   | ID player gangzone.                                      |

## مقدار بازگشتی

رنگ player gangzone.

**0:** اجرای تابع ناموفق بود. player gangzone برای بازیکن نمایش داده نشده.

## مثال‌ها

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Show the gangzone to player
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);

    new colour = PlayerGangZoneGetColour(playerid, gGangZoneID[playerid]);
    // colour = 0xFF0000FF
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerGangZone](CreatePlayerGangZone): player gangzone بساز.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): player gangzone را نابود کن.
- [PlayerGangZoneShow](PlayerGangZoneShow): player gangzone نمایش بده.
- [PlayerGangZoneHide](PlayerGangZoneHide): player gangzone را مخفی کن.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): چشمک زدن player gangzone را شروع کن.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): چشمک زدن player gangzone را متوقف کن.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): رنگ چشمک زدن player gangzone را بگیر.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): موقعیت gangzone را بگیر، نمایش داده شده توسط مختصات minX, minY, maxX, maxY.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): بررسی کن که آیا player gangzone معتبر است.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): بررسی کن که آیا بازیکن در player gangzone است.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): بررسی کن که آیا player gangzone قابل مشاهده است.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): بررسی کن که آیا player gangzone چشمک می‌زند.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): callback را فعال کن وقتی بازیکن وارد/خارج این zone می‌شود.