---
title: PlayerGangZoneGetPos
sidebar_label: PlayerGangZoneGetPos
description: موقعیت یک gangzone رو دریافت می‌کنه که با مختصات minX, minY, maxX, maxY نمایش داده می‌شه
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

موقعیت یک gangzone رو دریافت می‌کنه که با مختصات minX, minY, maxX, maxY نمایش داده می‌شه.

| نام        | توضیح                                                 |
| ----------- | ----------------------------------------------------------- |
| playerid    | ID بازیکنی که player gangzone به اون متصل شده.      |
| zoneid      | ID zone ای که می‌خوایم مختصاتش رو دریافت کنیم. |
| &Float:minX | مختصات X برای سمت غربی player gangzone.  |
| &Float:minY | مختصات Y برای سمت جنوبی player gangzone. |
| &Float:maxX | مختصات X برای سمت شرقی player gangzone.  |
| &Float:maxY | مختصات Y برای سمت شمالی player gangzone. |

## مقادیر بازگشتی

این function همیشه **true** بر می‌گردونه.

## مثال‌ها

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Gangzone ro besaz
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    new 
        Float:minX,
        Float:minY,
        Float:maxX,
        Float:maxY;
    
    PlayerGangZoneGetPos(playerid, gGangZoneID[playerid], minX, minY, maxX, maxY);
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
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): رنگ flash یک player gangzone رو دریافت می‌کنه.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): رنگ یک player gangzone رو دریافت می‌کنه.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): چک می‌کنه که آیا player gangzone معتبره یا نه.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): چک می‌کنه که آیا بازیکن در player gangzone هست یا نه.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): چک می‌کنه که آیا player gangzone قابل مشاهده است یا نه.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): چک می‌کنه که آیا player gangzone flash می‌کنه یا نه.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): callback رو وقتی که بازیکن وارد/خارج این ناحیه می‌شه فعال می‌کنه.