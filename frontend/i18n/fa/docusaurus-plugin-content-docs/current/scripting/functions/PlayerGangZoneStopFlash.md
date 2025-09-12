---
title: PlayerGangZoneStopFlash
sidebar_label: PlayerGangZoneStopFlash
description: توقف چشمک زدن player gangzone
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چشمک زدن player gangzone رو متوقف می‌کنه.

| نام         | توضیحات                                                          |
| ----------- | ---------------------------------------------------------------- |
| playerid    | آی‌دی بازیکنی که player gangzone بهش متصل هست.                    |
| zoneid      | آی‌دی player gangzone که چشمک زدنش باید متوقف بشه.                |

## مقادیر بازگشتی

**1:** تابع با موفقیت اجرا شد. موفقیت حتی در صورتی گزارش می‌شه که player gangzone از قبل چشمک نمی‌زده.

**0:** تابع اجرا نشد. Gangzone مشخص شده وجود نداره.

## مثال‌ها

```c
// in variable baraye save kardane id ye gangzone estefade mishe
// ta betunim dar tamame script azash estefade konim
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Gangzone ro ijad mikonim
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Gangzone ro be player namayesh midim
    PlayerGangZoneShow(playerid, gGangZoneID[playerid]);

    // Player gangzone ro shoru be cheshmak zadan mikonim    
    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0xFF00FFFF);
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Check mikonim age gangzone vojud dare va dar hale cheshmak zadan hast
    // Age dorosteh, cheshmak zadane gangzone ro motavaqef mikonim
    if (IsValidPlayerGangZone(playerid, gGangZoneID[playerid]) && IsPlayerGangZoneFlashing(playerid, gGangZoneID[playerid]))
    {
        PlayerGangZoneStopFlash(playerid, gGangZoneID[playerid]);
    }
}
```

## توابع مرتبط

- [CreatePlayerGangZone](CreatePlayerGangZone): ایجاد player gangzone.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): حذف player gangzone.
- [PlayerGangZoneShow](PlayerGangZoneShow): نمایش player gangzone.
- [PlayerGangZoneHide](PlayerGangZoneHide): مخفی کردن player gangzone.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): شروع چشمک زدن player gangzone.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): دریافت رنگ یک player gangzone.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): دریافت رنگ چشمک زدن یک player gangzone.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): دریافت موقعیت gangzone، که با مختصات minX، minY، maxX، maxY نمایش داده می‌شه.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): بررسی اینکه آیا player gangzone معتبر هست یا نه.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): بررسی اینکه آیا بازیکن در player gangzone هست یا نه.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): بررسی اینکه آیا player gangzone قابل مشاهده هست یا نه.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): بررسی اینکه آیا player gangzone چشمک می‌زنه یا نه.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): فعال کردن callback وقتی که بازیکن وارد/خارج از این zone می‌شه.