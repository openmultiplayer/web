---
title: SetObjectRot
sidebar_label: SetObjectRot
description: تنظیم چرخش یک آبجکت در سه محور (X، Y و Z).
tags: ["object"]
---

## توضیحات

تنظیم چرخش یک آبجکت در سه محور (X، Y و Z).

| نام             | توضیحات                                  |
| --------------- | ---------------------------------------- |
| objectid        | شناسه آبجکتی که قرار است چرخش آن تنظیم شود. |
| Float:rotationX | چرخش X.                                 |
| Float:rotationY | چرخش Y.                                 |
| Float:rotationZ | چرخش Z.                                 |

## مقدار بازگشتی

این تابع همیشه ۱ برمی‌گرداند، حتی اگر آبجکت وجود نداشته باشد.

## مثال‌ها

```c
public OnGameModeInit()
{
    new objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    SetObjectRot(objectid, 0.0, 0.0, 180.0);
    return 1;
}
```

## توابع مرتبط

- [CreateObject](CreateObject): ایجاد یک آبجکت.
- [DestroyObject](DestroyObject): نابود کردن یک آبجکت.
- [IsValidObject](IsValidObject): بررسی اعتبار یک آبجکت خاص.
- [MoveObject](MoveObject): حرکت دادن یک آبجکت.
- [StopObject](StopObject): متوقف کردن حرکت یک آبجکت.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یک آبجکت.
- [GetObjectPos](GetObjectPos): پیدا کردن موقعیت یک آبجکت.
- [GetObjectRot](GetObjectRot): بررسی چرخش یک آبجکت.
- [AttachObjectToPlayer](AttachObjectToPlayer): متصل کردن یک آبجکت به یک بازیکن.
- [CreatePlayerObject](CreatePlayerObject): ایجاد یک آبجکت فقط برای یک بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): نابود کردن یک آبجکت بازیکن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی اعتبار یک آبجکت بازیکن خاص.
- [MovePlayerObject](MovePlayerObject): حرکت دادن یک آبجکت بازیکن.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت یک آبجکت بازیکن.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت یک آبجکت بازیکن.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش یک آبجکت بازیکن.
- [GetPlayerObjectPos](GetPlayerObjectPos): پیدا کردن موقعیت یک آبجکت بازیکن.
- [GetPlayerObjectRot](GetPlayerObjectRot): بررسی چرخش یک آبجکت بازیکن.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): متصل کردن یک آبجکت بازیکن به یک بازیکن.