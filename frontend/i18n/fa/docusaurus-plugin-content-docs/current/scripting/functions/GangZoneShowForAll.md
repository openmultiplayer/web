---
title: GangZoneShowForAll
sidebar_label: GangZoneShowForAll
description: یه gangzone رو با رنگ دلخواه به همه بازیکن‌ها نشون میده.
tags: ["gangzone"]
---

## توضیحات

یه gangzone رو با رنگ دلخواه به همه بازیکن‌ها نشون میده.

| نام    | توضیحات                                                                                          |
| ------ | ------------------------------------------------------------------------------------------------ |
| zoneid | ID گنگ‌زونی که میخوایم نشون بدیم (که از [GangZoneCreate](GangZoneCreate) برمیگرده).               |
| colour | رنگی که میخوایم gang zone رو باهاش نشون بدیم، به صورت integer یا hex در فرمت رنگی RGBA. Alpha transparency پشتیبانی میشه. |

## برگشتی

1: تابع با موفقیت اجرا شد. gang zone برای همه بازیکن‌ها نمایش داده شد.

0: اجرای تابع ناموفق بود. gangzone وجود نداره.

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
    if (IsPlayerAdmin(playerid))
    {
        GangZoneShowForAll(gGangZoneId, 0xFF0000FF);
    }
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