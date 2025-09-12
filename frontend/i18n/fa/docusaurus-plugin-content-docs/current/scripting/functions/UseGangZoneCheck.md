---
title: UseGangZoneCheck
sidebar_label: UseGangZoneCheck
description: callback رو وقتی بازیکن وارد/خارج این zone میشه فعال کن
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

callback رو وقتی بازیکن وارد/خارج این zone میشه فعال می‌کنه.

| نام         | توضیحات                                                    |
| ----------- | -------------------------------------------------------------- |
| zoneid      | ID zone ای که می‌خوای تشخیص منطقه براش فعال کنی.               |
| bool:enable | آیا تشخیص ورود باید شروع یا متوقف بشه؟ (`true`/`false`) |

## مقدار برگشتی

**1:** تابع با موفقیت اجرا شد.

**0:** تابع اجرا نشد. gangzone مشخص شده وجود نداره.

## مثال‌ها

```c
new gGangZoneID = INVALID_GANG_ZONE;

public OnGameModeInit()
{
    gGangZoneID = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

    // Enabled the callback when a player enters/leaves this zone
    // callback ro vaghti player vared/kharej in zone mishe faal kon
    UseGangZoneCheck(gGangZoneID, true);
}

public OnPlayerEnterGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID)
    {
        new string[64];
        format(string, sizeof(string), "You are entering gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}

public OnPlayerLeaveGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID)
    {
        new string[64];
        format(string, sizeof(string), "You are leaving gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

## Callback های مرتبط

Callback های زیر ممکنه مفید باشن، چون به نحوی با این تابع مرتبط هستن.

- [OnPlayerEnterGangZone](../callbacks/OnPlayerEnterGangZone): این callback وقتی بازیکن وارد gangzone میشه فراخوانی میشه.
- [OnPlayerLeaveGangZone](../callbacks/OnPlayerLeaveGangZone): این callback وقتی بازیکن از gangzone خارج میشه فراخوانی میشه.

## توابع مرتبط

توابع زیر ممکنه مفید باشن، چون به نحوی با این تابع مرتبط هستن.

- [GangZoneCreate](GangZoneCreate): یک gangzone بساز.
- [GangZoneDestroy](GangZoneDestroy): یک gangzone رو نابود کن.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): gangzone رو برای یک بازیکن نشون بده.
- [GangZoneShowForAll](GangZoneShowForAll): gangzone رو برای همه بازیکنا نشون بده.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): gangzone رو برای یک بازیکن مخفی کن.
- [GangZoneHideForAll](GangZoneHideForAll): gangzone رو برای همه بازیکنا مخفی کن.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): gangzone رو برای یک بازیکن چشمک بزن.
- [GangZoneFlashForAll](GangZoneFlashForAll): gangzone رو برای همه بازیکنا چشمک بزن.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): چشمک زدن gangzone رو برای یک بازیکن متوقف کن.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): چشمک زدن gangzone رو برای همه بازیکنا متوقف کن.
- [IsValidGangZone](IsValidGangZone): چک کن که آیا gangzone معتبر هست.
- [IsPlayerInGangZone](IsPlayerInGangZone): چک کن که آیا بازیکن توی gangzone هست.
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): چک کن که آیا gangzone برای بازیکن قابل مشاهده هست.
