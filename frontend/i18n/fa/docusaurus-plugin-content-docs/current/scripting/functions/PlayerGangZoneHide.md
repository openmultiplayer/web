---
title: PlayerGangZoneHide
sidebar_label: PlayerGangZoneHide
description: player gangzone رو پنهان می‌کنه
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

player gangzone رو پنهان می‌کنه.

| نام        | توضیح                                                      |
| ----------- | ---------------------------------------------------------------- |
| playerid    | ID بازیکنی که player gangzone به اون متصل شده.           |
| zoneid      | ID player gangzone برای پنهان کردن.                          |

## مقادیر بازگشتی

**1:** function با موفقیت اجرا شد. موفقیت حتی اگر player gangzone از قبل پنهان بوده باشه گزارش می‌شه.

**0:** اجرای function ناموفق بوده. gangzone مشخص شده وجود نداره.

## مثال‌ها

```c
// In moteghayyar baraye negahdari id gangzone estefade mishe
// ta betoonim dar tamame script azash estefade konim
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Gangzone ro besaz
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsValidPlayerGangZone(playerid, gGangZoneID[playerid]))
    {
        PlayerGangZoneHide(playerid, gGangZoneID[playerid]);
    }
}
```

## توابع مرتبط

- [CreatePlayerGangZone](CreatePlayerGangZone): player gangzone می‌سازه.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): player gangzone رو از بین می‌بره.
- [PlayerGangZoneShow](PlayerGangZoneShow): player gangzone رو نمایش می‌ده.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): flash player gangzone رو شروع می‌کنه.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): flash player gangzone رو متوقف می‌کنه.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): رنگ یک player gangzone رو دریافت می‌کنه.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): رنگ flash یک player gangzone رو دریافت می‌کنه.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): موقعیت یک gangzone رو دریافت می‌کنه که با مختصات minX, minY, maxX, maxY نمایش داده می‌شه.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): چک می‌کنه که آیا player gangzone معتبره یا نه.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): چک می‌کنه که آیا بازیکن در player gangzone هست یا نه.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): چک می‌کنه که آیا player gangzone قابل مشاهده است یا نه.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): چک می‌کنه که آیا player gangzone flash می‌کنه یا نه.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): callback رو وقتی که بازیکن وارد/خارج این ناحیه می‌شه فعال می‌کنه.