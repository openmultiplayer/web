---
title: IsPlayerGangZoneFlashing
sidebar_label: IsPlayerGangZoneFlashing
description: چک می‌کنه که آیا player gangzone چشمک می‌زنه یا نه
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا player gangzone چشمک می‌زنه یا نه.

| نام         | توضیحات                                                      |
| ----------- | ------------------------------------------------------------ |
| playerid    | ID بازیکنی که player gangzone بهش متصله.                     |
| zoneid      | ID player gangzone.                                          |

## مقادیر برگشتی

**true** - player gangzone چشمک می‌زنه.

**false** - player gangzone چشمک نمی‌زنه.

## مثال‌ها

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Show the gangzone to player
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    // Start player gangzone flash    
    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0x45D1ABFF);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerGangZoneFlashing(playerid, gGangZoneID[playerid]))
    {
        PlayerGangZoneStopFlash(playerid, gGangZoneID[playerid]);
    }
    return 1;
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
- [IsValidPlayerGangZone](IsValidPlayerGangZone): چک کردن اینکه player gangzone معتبره یا نه.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): چک کردن اینکه بازیکن در player gangzone هست یا نه.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): چک کردن اینکه player gangzone قابل مشاهده هست یا نه.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): فعال کردن callback وقتی بازیکن وارد/خارج این zone می‌شه.