---
title: GetPlayerObjectPos
sidebar_label: GetPlayerObjectPos
description: دریافت موقعیت یک player object (CreatePlayerObject).
tags: ["player", "object", "playerobject"]
---

## توضیحات

دریافت موقعیت یک player object ([CreatePlayerObject](CreatePlayerObject)).

| نام     | توضیحات                                                               |
| -------- | ------------------------------------------------------------------------- |
| playerid | ID بازیکنی که می‌خواهید موقعیت player objectش را دریافت کنید.          |
| objectid | ID objectی که می‌خواهید موقعیت فعلی‌اش را دریافت کنید.                   |
| &Float:x | متغیر float برای ذخیره مختصات X، به صورت reference پاس داده می‌شود. |
| &Float:y | متغیر float برای ذخیره مختصات Y، به صورت reference پاس داده می‌شود. |
| &Float:z | متغیر float برای ذخیره مختصات Z، به صورت reference پاس داده می‌شود. |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. بازیکن و/یا object وجود ندارند.

موقعیت object در متغیرهای مشخص شده ذخیره می‌شود.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    new Float:x, Float:y, Float:z;
    GetPlayerObjectPos(playerid, gPlayerObject[playerid], x, y, z);
    // x = 2001.195679
    // y = 1547.113892
    // z = 14.283400,
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
- [GetPlayerObjectRot](GetPlayerObjectRot): بررسی چرخش player object.
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