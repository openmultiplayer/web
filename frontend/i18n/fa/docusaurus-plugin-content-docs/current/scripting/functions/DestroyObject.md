---
title: DestroyObject
sidebar_label: DestroyObject
description: آبجکتی که با CreateObject ایجاد شده را نابود (حذف) می‌کند.
tags: ["object"]
---

## توضیحات

آبجکتی که با CreateObject ایجاد شده را نابود (حذف) می‌کند.

| نام     | توضیحات                                                    |
| -------- | ---------------------------------------------------------- |
| objectid | شناسه آبجکت برای نابودی. توسط CreateObject برگردانده شده. |

## مقادیر بازگشتی

این تابع مقدار مشخصی برنمی‌گرداند.

## مثال‌ها

```c
public OnObjectMoved(objectid)
{
    DestroyObject(objectid);
    return 1;
}
```

## توابع مرتبط

- [CreateObject](CreateObject): ایجاد یک آبجکت.
- [IsValidObject](IsValidObject): بررسی معتبر بودن آبجکت مشخص.
- [MoveObject](MoveObject): حرکت دادن یک آبجکت.
- [StopObject](StopObject): توقف حرکت یک آبجکت.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یک آبجکت.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یک آبجکت.
- [GetObjectPos](GetObjectPos): مکان‌یابی یک آبجکت.
- [GetObjectRot](GetObjectRot): بررسی چرخش یک آبجکت.
- [AttachObjectToPlayer](AttachObjectToPlayer): چسباندن آبجکت به بازیکن.
- [CreatePlayerObject](CreatePlayerObject): ایجاد آبجکت فقط برای یک بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): نابودی آبجکت بازیکن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی معتبر بودن آبجکت بازیکن مشخص.
- [MovePlayerObject](MovePlayerObject): حرکت دادن آبجکت بازیکن.
- [StopPlayerObject](StopPlayerObject): توقف حرکت آبجکت بازیکن.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت آبجکت بازیکن.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش آبجکت بازیکن.
- [GetPlayerObjectPos](GetPlayerObjectPos): مکان‌یابی آبجکت بازیکن.
- [GetPlayerObjectRot](GetPlayerObjectRot): بررسی چرخش آبجکت بازیکن.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): چسباندن آبجکت بازیکن به بازیکن.