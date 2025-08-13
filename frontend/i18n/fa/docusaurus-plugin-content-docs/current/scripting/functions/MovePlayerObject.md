---
title: MovePlayerObject
sidebar_label: MovePlayerObject
description: آبجکت بازیکن را با سرعت تعیین شده منتقل کن.
tags: ["player"]
---

## توضیحات

آبجکت بازیکن را با سرعت تعیین شده منتقل می‌کند. همچنین از چرخش پشتیبانی می‌کند. بازیکنان/وسایل نقلیه روی آبجکت‌های در حال حرکت surf خواهند کرد.

| نام             | توضیحات                                               |
| --------------- | ----------------------------------------------------- |
| playerid        | ID بازیکنی که آبجکت-بازیکنش باید منتقل شود.          |
| objectid        | ID آبجکتی که باید منتقل شود.                         |
| Float:targetX   | مختصات X برای انتقال آبجکت.                          |
| Float:targetY   | مختصات Y برای انتقال آبجکت.                          |
| Float:targetZ   | مختصات Z برای انتقال آبجکت.                          |
| Float:speed     | سرعت انتقال آبجکت.                                   |
| Float:rotationX | چرخش نهایی X (اختیاری).                              |
| Float:rotationY | چرخش نهایی Y (اختیاری).                              |
| Float:rotationZ | چرخش نهایی Z (اختیاری).                              |

## مقدار بازگشتی

زمانی که برای انتقال آبجکت نیاز است به میلی‌ثانیه.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);
    return 1;
}
```

## نکات

:::tip

اگر از پارامترهای چرخش استفاده می‌کنی، آبجکت باید منتقل شود (X/Y/Z). آبجکت چرخش را از زمانی که شروع به حرکت می‌کند تا زمانی که متوقف می‌شود interpolate خواهد کرد.

:::

## توابع مرتبط

- [CreatePlayerObject](CreatePlayerObject): آبجکت فقط برای یک بازیکن بساز.
- [DestroyPlayerObject](DestroyPlayerObject): آبجکت بازیکن را نابود کن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی کن که آیا آبجکت بازیکن خاصی معتبر است.
- [StopPlayerObject](StopPlayerObject): آبجکت بازیکن را از حرکت متوقف کن.
- [IsObjectMoving](IsObjectMoving): بررسی کن که آیا آبجکت در حال حرکت است.
- [SetPlayerObjectPos](SetPlayerObjectPos): موقعیت آبجکت بازیکن را تنظیم کن.
- [SetPlayerObjectRot](SetPlayerObjectRot): چرخش آبجکت بازیکن را تنظیم کن.
- [GetPlayerObjectPos](GetPlayerObjectPos): آبجکت بازیکن را پیدا کن.
- [GetPlayerObjectRot](GetPlayerObjectRot): چرخش آبجکت بازیکن را بررسی کن.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): آبجکت بازیکن را به بازیکن متصل کن.
- [CreateObject](CreateObject): آبجکت بساز.
- [DestroyObject](DestroyObject): آبجکت را نابود کن.
- [IsValidObject](IsValidObject): بررسی کن که آیا آبجکت خاصی معتبر است.
- [MoveObject](MoveObject): آبجکت منتقل کن.
- [StopObject](StopObject): آبجکت را از حرکت متوقف کن.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): بررسی کن که آیا آبجکت بازیکن در حال حرکت است.
- [SetObjectPos](SetObjectPos): موقعیت آبجکت را تنظیم کن.
- [SetObjectRot](SetObjectRot): چرخش آبجکت را تنظیم کن.
- [GetObjectPos](GetObjectPos): آبجکت را پیدا کن.
- [GetObjectRot](GetObjectRot): چرخش آبجکت را بررسی کن.
- [AttachObjectToPlayer](AttachObjectToPlayer): آبجکت را به بازیکن متصل کن.