---
title: DestroyPlayerObject
sidebar_label: DestroyPlayerObject
description: آبجکت بازیکن ایجاد شده با CreatePlayerObject را نابود می‌کند.
tags: ["player", "object", "playerobject"]
---

## توضیحات

آبجکت بازیکن ایجاد شده با [CreatePlayerObject](CreatePlayerObject) را نابود می‌کند.

| نام     | توضیحات                                                                  |
| -------- | ------------------------------------------------------------------------ |
| playerid | شناسه بازیکنی که آبجکت بازیکن او باید نابود شود.                      |
| objectid | شناسه آبجکت بازیکن برای نابودی. توسط CreatePlayerObject برگردانده شده. |

## مقادیر بازگشتی

این تابع مقدار مشخصی برنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    DestroyPlayerObject(playerid, objectid);
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerObject](CreatePlayerObject): ایجاد آبجکت فقط برای یک بازیکن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی معتبر بودن آبجکت بازیکن مشخص.
- [MovePlayerObject](MovePlayerObject): حرکت دادن آبجکت بازیکن.
- [StopPlayerObject](StopPlayerObject): توقف حرکت آبجکت بازیکن.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت آبجکت بازیکن.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش آبجکت بازیکن.
- [GetPlayerObjectPos](GetPlayerObjectPos): مکان‌یابی آبجکت بازیکن.
- [GetPlayerObjectRot](GetPlayerObjectRot): بررسی چرخش آبجکت بازیکن.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): چسباندن آبجکت بازیکن به بازیکن.
- [CreateObject](CreateObject): ایجاد یک آبجکت.
- [DestroyObject](DestroyObject): نابودی یک آبجکت.
- [IsValidObject](IsValidObject): بررسی معتبر بودن آبجکت مشخص.
- [MoveObject](MoveObject): حرکت دادن یک آبجکت.
- [StopObject](StopObject): توقف حرکت یک آبجکت.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یک آبجکت.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یک آبجکت.
- [GetObjectPos](GetObjectPos): مکان‌یابی یک آبجکت.
- [GetObjectRot](GetObjectRot): بررسی چرخش یک آبجکت.
- [AttachObjectToPlayer](AttachObjectToPlayer): چسباندن آبجکت به بازیکن.