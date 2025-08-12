---
title: GetPlayerObjectRot
sidebar_label: GetPlayerObjectRot
description: استفاده از این تابع برای دریافت چرخش فعلی object.
tags: ["player"]
---

## توضیحات

استفاده از این تابع برای دریافت چرخش فعلی object. چرخش به صورت reference در سه متغیر rotationX/rotationY/rotationZ ذخیره می‌شود.

| نام             | توضیحات                                                   |
| ---------------- | ------------------------------------------------------------- |
| playerid         | بازیکنی که این object به او مربوط است.                     |
| objectid         | objectid objectی که می‌خواهید چرخشش را دریافت کنید. |
| &Float:rotationX | متغیر برای ذخیره چرخش X، به صورت reference پاس داده می‌شود.    |
| &Float:rotationY | متغیر برای ذخیره چرخش Y، به صورت reference پاس داده می‌شود.    |
| &Float:rotationZ | متغیر برای ذخیره چرخش Z، به صورت reference پاس داده می‌شود.    |

## مقادیر برگشتی

چرخش object در متغیرهای مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    new Float:rotationX, Float:rotationY, Float:rotationZ;
    GetPlayerObjectRot(playerid, objectid, rotationX, rotationY, rotationZ);
    // rotationX = 0.0
    // rotationY = 0.0
    // rotationZ = 96.0
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerObject](CreatePlayerObject): ایجاد object برای فقط یک بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): نابود کردن player object.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی اینکه آیا player object خاصی معتبر است.
- [MovePlayerObject](MovePlayerObject): حرکت دادن player object.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت player object.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): پیدا کردن player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): متصل کردن player object به بازیکن.
- [CreateObject](CreateObject): ایجاد object.
- [DestroyObject](DestroyObject): نابود کردن object.
- [IsValidObject](IsValidObject): بررسی اینکه آیا object خاصی معتبر است.
- [MoveObject](MoveObject): حرکت دادن object.
- [StopObject](StopObject): متوقف کردن حرکت object.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت object.
- [SetObjectRot](SetObjectRot): تنظیم چرخش object.
- [GetObjectPos](GetObjectPos): پیدا کردن object.
- [GetObjectRot](GetObjectRot): بررسی چرخش object.
- [AttachObjectToPlayer](AttachObjectToPlayer): متصل کردن object به بازیکن.