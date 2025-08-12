---
title: GangZoneStopFlashForAll
sidebar_label: GangZoneStopFlashForAll
description: چشمک زدن یه gangzone رو برای همه بازیکن‌ها متوقف میکنه.
tags: ["gangzone"]
---

## توضیحات

چشمک زدن یه gangzone رو برای همه بازیکن‌ها متوقف میکنه.

| نام    | توضیحات                                                     |
| ------ | ----------------------------------------------------------- |
| zoneid | ID zone ای که باید چشمک زدنش متوقف بشه. که از GangZoneCreate برمیگرده. |

## برگشتی

1: تابع با موفقیت اجرا شد. موفقیت گزارش میشه حتی اگه gang zone از قبل چشمک نمی‌زده.

0: اجرای تابع ناموفق بود. gangzone مشخص شده وجود نداره.

## مثال‌ها

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GangZoneFlashForAll(gGangZoneId, COLOR_RED);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneStopFlashForAll(gGangZoneId);
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
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): متوقف کردن چشمک زدن gangzone برای یه بازیکن.