---
title: GangZoneHideForAll
sidebar_label: GangZoneHideForAll
description: GangZoneHideForAll یه gangzone رو از همه بازیکن‌ها مخفی میکنه.
tags: ["gangzone"]
---

## توضیحات

GangZoneHideForAll یه gangzone رو از همه بازیکن‌ها مخفی میکنه.

| نام    | توضیحات             |
| ------ | ------------------ |
| zoneid | zone ای که باید مخفی بشه. |

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

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hidezone", true))
    {
        GangZoneHideForAll(gGangZoneId);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [GangZoneCreate](GangZoneCreate): ساختن یه gangzone.
- [GangZoneDestroy](GangZoneDestroy): حذف یه gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): نشون دادن یه gangzone به یه بازیکن.
- [GangZoneShowForAll](GangZoneShowForAll): نشون دادن یه gangzone به همه بازیکن‌ها.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): مخفی کردن یه gangzone برای یه بازیکن.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): چشمک زدن یه gangzone برای یه بازیکن.
- [GangZoneFlashForAll](GangZoneFlashForAll): چشمک زدن یه gangzone برای همه بازیکن‌ها.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): متوقف کردن چشمک زدن gangzone برای یه بازیکن.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): متوقف کردن چشمک زدن gangzone برای همه بازیکن‌ها.