---
title: PlayerGangZoneGetFlashColour
sidebar_label: PlayerGangZoneGetFlashColour
description: رنگ flash یک player gangzone رو دریافت می‌کنه
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ flash یک player gangzone رو دریافت می‌کنه.

| نام        | توضیح                                                      |
| ----------- | ---------------------------------------------------------------- |
| playerid    | ID بازیکنی که player gangzone به اون متصل شده.           |
| zoneid      | ID player gangzone.                                   |

## مقادیر بازگشتی

رنگ flash player gangzone.

**0:** اجرای function ناموفق بوده. player gangzone برای بازیکن نمایش داده نمی‌شه.

## مثال‌ها

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Gangzone ro besaz
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Gangzone ro be player neshan bede
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);

    // Flash player gangzone ro shoroo kon    
    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0x45D1ABFF);

    new flashColour = PlayerGangZoneGetFlashColour(playerid, gGangZoneID[playerid]);
    // flashColour = 0x45D1ABFF
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerGangZone](CreatePlayerGangZone): player gangzone می‌سازه.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): player gangzone رو از بین می‌بره.
- [PlayerGangZoneShow](PlayerGangZoneShow): player gangzone رو نمایش می‌ده.
- [PlayerGangZoneHide](PlayerGangZoneHide): player gangzone رو پنهان می‌کنه.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): flash player gangzone رو شروع می‌کنه.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): flash player gangzone رو متوقف می‌کنه.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): رنگ یک player gangzone رو دریافت می‌کنه.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): موقعیت یک gangzone رو دریافت می‌کنه که با مختصات minX, minY, maxX, maxY نمایش داده می‌شه.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): چک می‌کنه که آیا player gangzone معتبره یا نه.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): چک می‌کنه که آیا بازیکن در player gangzone هست یا نه.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): چک می‌کنه که آیا player gangzone قابل مشاهده است یا نه.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): چک می‌کنه که آیا player gangzone flash می‌کنه یا نه.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): callback رو وقتی که بازیکن وارد/خارج این ناحیه می‌شه فعال می‌کنه.