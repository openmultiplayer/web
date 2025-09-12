---
title: CreatePlayerObject
sidebar_label: CreatePlayerObject
description: شیئی ایجاد می‌کند که فقط برای یک بازیکن قابل مشاهده است.
tags: ["player", "object", "playerobject"]
---

## توضیحات

شیئی ایجاد می‌کند که فقط برای یک بازیکن قابل مشاهده است.

| نام                | توضیحات                                                                                                                                                                                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid           | ID بازیکنی که برایش شیء ایجاد شود.                                                                                                                                                                             |
| modelid            | مدلی که باید ایجاد شود.                                                                                                                                                                                        |
| Float:x            | مختصات X برای ایجاد شیء.                                                                                                                                                                                       |
| Float:y            | مختصات Y برای ایجاد شیء.                                                                                                                                                                                       |
| Float:z            | مختصات Z برای ایجاد شیء.                                                                                                                                                                                       |
| Float:rotationX    | چرخش X شیء.                                                                                                                                                                                                   |
| Float:rotationY    | چرخش Y شیء.                                                                                                                                                                                                   |
| Float:rotationZ    | چرخش Z شیء.                                                                                                                                                                                                   |
| Float:drawDistance | فاصله‌ای که اشیاء برای بازیکنان ظاهر می‌شوند. 0.0 باعث می‌شود شیء در فاصله پیش‌فرض خود رندر شود. عدم استفاده از این پارامتر باعث می‌شود اشیاء در فاصله پیش‌فرض خود رندر شوند. |

## مقادیر بازگشتی

ID شیئی که ایجاد شد، یا INVALID_OBJECT_ID اگر به حداکثر اشیاء (MAX_OBJECTS) رسیده باشد.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    // یا به طور جایگزین، با استفاده از پارامتر DrawDistance برای نمایش از دورترین فاصله ممکن:
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DestroyPlayerObject(playerid, gPlayerObject[playerid]);
    return 1;
}
```

## توابع مرتبط

- [DestroyPlayerObject](DestroyPlayerObject): حذف شیء بازیکن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی معتبر بودن یک شیء بازیکن.
- [MovePlayerObject](MovePlayerObject): حرکت دادن شیء بازیکن.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت شیء بازیکن.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت شیء بازیکن.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش شیء بازیکن.
- [GetPlayerObjectPos](GetPlayerObjectPos): پیدا کردن موقعیت شیء بازیکن.
- [GetPlayerObjectRot](GetPlayerObjectRot): بررسی چرخش شیء بازیکن.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): چسباندن شیء بازیکن به بازیکن.
- [CreateObject](CreateObject): ایجاد یک شیء.
- [DestroyObject](DestroyObject): حذف یک شیء.
- [IsValidObject](IsValidObject): بررسی معتبر بودن یک شیء.
- [MoveObject](MoveObject): حرکت دادن یک شیء.
- [StopObject](StopObject): متوقف کردن حرکت یک شیء.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یک شیء.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یک شیء.
- [GetObjectPos](GetObjectPos): پیدا کردن موقعیت یک شیء.
- [GetObjectRot](GetObjectRot): بررسی چرخش یک شیء.
- [AttachObjectToPlayer](AttachObjectToPlayer): چسباندن یک شیء به بازیکن.