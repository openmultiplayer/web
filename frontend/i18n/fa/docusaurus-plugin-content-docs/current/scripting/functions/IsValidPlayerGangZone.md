---
title: IsValidPlayerGangZone
sidebar_label: IsValidPlayerGangZone
description: چک کردن اینکه player gangzone معتبره یا نه
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک کردن اینکه player gangzone معتبره یا نه.

| نام         | توضیحات                                                      |
| ----------- | ------------------------------------------------------------ |
| playerid    | ID بازیکنی که player gangzone بهش متصله.                     |
| zoneid      | ID player gangzone.                                          |

## مقادیر برگشتی

**true** - player gangzone معتبره.

**false** - player gangzone معتبر نیست.

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

public OnPlayerSpawn(playerid)
{
    // Check if this gangzone exists
    if(IsValidPlayerGangZone(playerid, gGangZoneID[playerid]))
    {
        PlayerGangZoneDestroy(playerid, gGangZoneID[playerid]);
        gGangZoneID[playerid] = INVALID_GANG_ZONE;
    }
}
```

## توابع مرتبط

- [CreatePlayerGangZone](CreatePlayerGangZone): ساخت player gangzone.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): نابود کردن player gangzone.
- [PlayerGangZoneShow](PlayerGangZoneShow): نمایش player gangzone.
- [PlayerGangZoneHide](PlayerGangZoneHide): مخفی کردن player gangzone.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): شروع چشمک زدن player gangzone.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): متوقف کردن چشمک زدن player gangzone.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): دریافت رنگ چشمک زدن player gangzone.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): دریافت رنگ player gangzone.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): دریافت موقعیت gangzone، که با مختصات minX، minY، maxX، maxY نمایش داده می‌شه.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): چک کردن اینکه بازیکن در player gangzone هست یا نه.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): چک کردن اینکه player gangzone قابل مشاهده هست یا نه.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): چک کردن اینکه player gangzone چشمک می‌زنه یا نه.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): فعال کردن callback وقتی بازیکن وارد/خارج این zone می‌شه.