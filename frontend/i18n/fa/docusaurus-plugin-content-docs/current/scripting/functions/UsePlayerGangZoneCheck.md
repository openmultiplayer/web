---
title: UsePlayerGangZoneCheck
sidebar_label: UsePlayerGangZoneCheck
description: callback رو وقتی بازیکن وارد/خارج این zone میشه فعال کن
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

callback رو وقتی بازیکن وارد/خارج این zone میشه فعال می‌کنه.

| نام         | توضیحات                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| playerid    | ID بازیکنی که می‌خوای callback رو وقتی وارد/خارج این zone میشه براش فعال کنی. |
| zoneid      | ID player-zone ای که می‌خوای تشخیص منطقه براش فعال کنی.                                                       |
| bool:enable | آیا تشخیص ورود باید شروع یا متوقف بشه؟ (`true`/`false`)                                                |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. gangzone مشخص شده وجود نداره.

## مثال‌ها

```c
// This variable is used to store the id of the gangzone
// so that we can use it throught the script
// in variable baraye zakhire id gangzone estefade mishe
// ta betoonim dar tamam script azash estefade konim
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    // gangzone ro besaz
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Enabled the callback when a player enters/leaves this zone
    // callback ro vaghti player vared/kharej in zone mishe faal kon
    UsePlayerGangZoneCheck(playerid, gGangZoneID[playerid], true);
}

public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID[playerid])
    {
        new string[64];
        format(string, sizeof(string), "You are entering player gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}

public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID[playerid])
    {
        new string[64];
        format(string, sizeof(string), "You are leaving player gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

## Callback های مرتبط

Callback های زیر ممکنه مفید باشن، چون به نحوی با این تابع مرتبط هستن.

- [OnPlayerEnterPlayerGangZone](../callbacks/OnPlayerEnterPlayerGangZone): این callback وقتی بازیکن وارد player gangzone میشه فراخوانی میشه.
- [OnPlayerLeavePlayerGangZone](../callbacks/OnPlayerLeavePlayerGangZone): این callback وقتی بازیکن از player gangzone خارج میشه فراخوانی میشه.

## توابع مرتبط

توابع زیر ممکنه مفید باشن، چون به نحوی با این تابع مرتبط هستن.

- [CreatePlayerGangZone](CreatePlayerGangZone): player gangzone بساز.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): player gangzone رو نابود کن.
- [PlayerGangZoneShow](PlayerGangZoneShow): player gangzone رو نشون بده.
- [PlayerGangZoneHide](PlayerGangZoneHide): player gangzone رو مخفی کن.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): player gangzone رو شروع به چشمک زدن کن.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): چشمک زدن player gangzone رو متوقف کن.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): رنگ چشمک زدن player gangzone رو بدست بیار.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): رنگ player gangzone رو بدست بیار.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): موقعیت gangzone رو بدست بیار، که با مختصات minX, minY, maxX, maxY نمایش داده میشه.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): چک کن که آیا player gangzone معتبر هست.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): چک کن که آیا بازیکن توی player gangzone هست.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): چک کن که آیا player gangzone قابل مشاهده هست.
