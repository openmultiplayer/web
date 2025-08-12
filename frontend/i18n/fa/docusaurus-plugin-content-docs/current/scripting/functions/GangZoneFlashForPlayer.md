---
title: GangZoneFlashForPlayer
sidebar_label: GangZoneFlashForPlayer
description: یه gangzone رو برای یه بازیکن چشمک می‌زنه.
tags: ["player", "gangzone"]
---

## توضیحات

یه gangzone رو برای یه بازیکن چشمک می‌زنه.

| نام         | توضیحات                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------ |
| playerid    | ID بازیکنی که میخوایم gangzone براش چشمک بزنه.                                                    |
| zoneid      | ID zone ای که باید چشمک بزنه.                                                                     |
| flashColour | رنگی که gang zone باهاش چشمک میزنه، به صورت integer یا hex در فرمت رنگی RGBA. Alpha transparency پشتیبانی میشه. |

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
```

## توابع مرتبط

- [GangZoneCreate](GangZoneCreate): ساختن یه gangzone.
- [GangZoneDestroy](GangZoneDestroy): حذف یه gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): نشون دادن یه gangzone به یه بازیکن.
- [GangZoneShowForAll](GangZoneShowForAll): نشون دادن یه gangzone به همه بازیکن‌ها.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): مخفی کردن یه gangzone برای یه بازیکن.
- [GangZoneHideForAll](GangZoneHideForAll): مخفی کردن یه gangzone برای همه بازیکن‌ها.
- [GangZoneFlashForAll](GangZoneFlashForAll): چشمک زدن یه gangzone برای همه بازیکن‌ها.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): متوقف کردن چشمک زدن gangzone برای یه بازیکن.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): متوقف کردن چشمک زدن gangzone برای همه بازیکن‌ها.