---
title: GangZoneStopFlashForPlayer
sidebar_label: GangZoneStopFlashForPlayer
description: چشمک زدن یه gangzone رو برای یه بازیکن متوقف میکنه.
tags: ["player", "gangzone"]
---

## توضیحات

چشمک زدن یه gangzone رو برای یه بازیکن متوقف میکنه.

| نام      | توضیحات                                                 |
| -------- | ------------------------------------------------------ |
| playerid | ID بازیکنی که میخوایم چشمک زدن gangzone رو براش متوقف کنیم. |
| zoneid   | ID gangzonezone ای که باید چشمک زدنش متوقف بشه.         |

## برگشتی

این تابع هیچ مقدار خاصی برنمیگردونه.

## مثال‌ها

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneFlashForPlayer(playerid, gGangZoneId, 0xFF0000FF);
    return 1;
}

public OnPlayerEnterVehicle(playerid, vehicleid)
{
    GangZoneStopFlashForPlayer(playerid, gGangZoneId);
    return 1;
}
```

## توابع مرتبط

- [GangZoneCreate](GangZoneCreate): ساختن یه gangzone.
- [GangZoneDestroy](GangZoneDestroy): حذف یه gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): نشون دادن یه gangzone به یه بازیکن.
- [GangZoneShowForAll](GangZoneShowForAll): نشون دادن یه gangzone به همه بازیکن‌ها.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): مخفی کردن یه gangzone برای یه بازیکن.
- [GangZoneHideForAll](GangZoneHideForAll): مخفی کردن یه gangzone برای همه بازیکن‌ها.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): چشمک زدن یه gangzone برای یه بازیکن.
- [GangZoneFlashForAll](GangZoneFlashForAll): چشمک زدن یه gangzone برای همه بازیکن‌ها.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): متوقف کردن چشمک زدن gangzone برای همه بازیکن‌ها.