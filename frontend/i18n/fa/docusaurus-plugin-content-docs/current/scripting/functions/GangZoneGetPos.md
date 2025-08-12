---
title: GangZoneGetPos
sidebar_label: GangZoneGetPos
description: گرفتن موقعیت یه gangzone، که با مختصات minX, minY, maxX, maxY نمایش داده میشه
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

گرفتن موقعیت یه gangzone، که با مختصات minX, minY, maxX, maxY نمایش داده میشه.

| نام         | توضیحات                                                        |
| ----------- | -------------------------------------------------------------- |
| zoneid      | ID zone ای که میخوایم مختصاتاش رو بگیریم.                        |
| &Float:minX | مختصات X برای سمت غرب player gangzone.                         |
| &Float:minY | مختصات Y برای سمت جنوب player gangzone.                        |
| &Float:maxX | مختصات X برای سمت شرق player gangzone.                         |
| &Float:maxY | مختصات Y برای سمت شمال player gangzone.                        |

## برگشتی

این تابع همیشه **true** برمیگردونه.

## مثال‌ها

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

    new 
        Float:minX,
        Float:minY,
        Float:maxX,
        Float:maxY;
    
    GangZoneGetPos(gangZone, minX, minY, maxX, maxY);
    return 1;
}
```

## توابع مرتبط

- [GangZoneDestroy](GangZoneDestroy): حذف یه gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): نشون دادن یه gangzone به یه بازیکن.
- [GangZoneShowForAll](GangZoneShowForAll): نشون دادن یه gangzone به همه بازیکن‌ها.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): مخفی کردن یه gangzone برای یه بازیکن.
- [GangZoneHideForAll](GangZoneHideForAll): مخفی کردن یه gangzone برای همه بازیکن‌ها.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): چشمک زدن یه gangzone برای یه بازیکن.
- [GangZoneFlashForAll](GangZoneFlashForAll): چشمک زدن یه gangzone برای همه بازیکن‌ها.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): متوقف کردن چشمک زدن gangzone برای یه بازیکن.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): متوقف کردن چشمک زدن gangzone برای همه بازیکن‌ها.
- [IsValidGangZone](IsValidGangZone): چک کردن که gangzone معتبر هست یا نه.
- [IsPlayerInGangZone](IsPlayerInGangZone): چک کردن که بازیکن توی gangzone هست یا نه.
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): چک کردن که gangzone برای بازیکن قابل دیدن هست یا نه.
- [GangZoneGetFlashColourForPlayer](GangZoneGetFlashColourForPlayer): گرفتن رنگ چشمک زدن یه gangzone برای بازیکن.
- [IsGangZoneFlashingForPlayer](IsGangZoneFlashingForPlayer): چک کردن که gangzone برای بازیکن چشمک میزنه یا نه.