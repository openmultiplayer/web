---
title: SetObjectPos
sidebar_label: SetObjectPos
description: تغییر موقعیت یک آبجکت.
tags: ["object"]
---

## توضیحات

تغییر موقعیت یک آبجکت.

| نام      | توضیحات                                                                         |
| -------- | ------------------------------------------------------------------------------- |
| objectid | شناسه آبجکتی که قرار است موقعیت آن تنظیم شود. توسط CreateObject برگردانده می‌شود. |
| Float:x  | مختصات X برای قرار دادن آبجکت.                                                   |
| Float:y  | مختصات Y برای قرار دادن آبجکت.                                                   |
| Float:z  | مختصات Z برای قرار دادن آبجکت.                                                   |

## مقدار بازگشتی

این تابع همیشه **true** برمی‌گرداند، حتی اگر آبجکت مشخص شده وجود نداشته باشد.

## مثال‌ها

```c
SetObjectPos(objectid, 2001.195679, 1547.113892, 14.283400);
```

## توابع مرتبط

- [CreateObject](CreateObject): ایجاد یک آبجکت.
- [DestroyObject](DestroyObject): نابود کردن یک آبجکت.
- [IsValidObject](IsValidObject): بررسی اعتبار یک آبجکت خاص.
- [MoveObject](MoveObject): حرکت دادن یک آبجکت.
- [StopObject](StopObject): متوقف کردن حرکت یک آبجکت.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یک آبجکت.
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