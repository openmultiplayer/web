---
title: GangZoneShowForPlayer
sidebar_label: GangZoneShowForPlayer
description: نشون دادن یه gangzone به یه بازیکن.
tags: ["player", "gangzone"]
---

## توضیحات

نشون دادن یه gangzone به یه بازیکن. اول باید با [GangZoneCreate](GangZoneCreate) ساخته بشه.

| نام      | توضیحات                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------ |
| playerid | ID بازیکنی که میخوایم gangzone رو براش نشون بدیم.                                                 |
| zoneid   | ID gang zone ای که میخوایم برای بازیکن نشون بدیم. که از [GangZoneCreate](GangZoneCreate) برمیگرده |
| colour   | رنگی که میخوایم gang zone رو باهاش نشون بدیم، به صورت integer یا hex در فرمت رنگی RGBA. Alpha transparency پشتیبانی میشه. |

## برگشتی

**1** اگه gangzone نمایش داده شد، در غیر این صورت **0** (وجود نداره).

## مثال‌ها

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1082.962, -2787.229, 2942.549, -1859.51);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneShowForPlayer(playerid, gGangZoneId, 0xFFFF0096);
    return 1;
}
```

## توابع مرتبط

- [GangZoneCreate](GangZoneCreate): ساختن یه gangzone.
- [GangZoneDestroy](GangZoneDestroy): حذف یه gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): نشون دادن یه gangzone به یه بازیکن.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): مخفی کردن یه gangzone برای یه بازیکن.
- [GangZoneHideForAll](GangZoneHideForAll): مخفی کردن یه gangzone برای همه بازیکن‌ها.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): چشمک زدن یه gangzone برای یه بازیکن.
- [GangZoneFlashForAll](GangZoneFlashForAll): چشمک زدن یه gangzone برای همه بازیکن‌ها.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): متوقف کردن چشمک زدن gangzone برای یه بازیکن.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): متوقف کردن چشمک زدن gangzone برای همه بازیکن‌ها.