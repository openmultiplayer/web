---
title: IsValidObject
sidebar_label: IsValidObject
description: چک می‌کنه که آیا object با ID داده شده وجود داره یا نه.
tags: ["object"]
---

## توضیحات

چک می‌کنه که آیا object با ID داده شده وجود داره یا نه.

| نام      | توضیحات                                            |
| -------- | -------------------------------------------------- |
| objectid | ID object که باید وجودش چک بشه.                   |

## مقادیر برگشتی

**true** - object وجود داره.

**false** - object وجود نداره.

## مثال‌ها

```c
new objectid;

public OnGameModeInit()
{
    objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    return 1;
}

public OnGameModeExit()
{
	if (IsValidObject(objectid))
	{
		DestroyObject(objectid);
	}
    return 1;
}
```

## نکات

:::warning

این برای چک کردن وجود object هست، نه برای اینکه model معتبر باشه.

:::

## توابع مرتبط

- [CreateObject](CreateObject): ساخت یه object.
- [DestroyObject](DestroyObject): نابود کردن یه object.
- [MoveObject](MoveObject): حرکت دادن یه object.
- [StopObject](StopObject): متوقف کردن حرکت یه object.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یه object.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یه object.
- [GetObjectPos](GetObjectPos): مکان‌یابی یه object.
- [GetObjectRot](GetObjectRot): چک کردن چرخش یه object.
- [AttachObjectToPlayer](AttachObjectToPlayer): اتصال یه object به بازیکن.
- [CreatePlayerObject](CreatePlayerObject): ساخت یه object فقط برای یه بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): نابود کردن یه player object.
- [IsValidPlayerObject](IsValidPlayerObject): چک می‌کنه که آیا یه player object خاص معتبره یا نه.
- [MovePlayerObject](MovePlayerObject): حرکت دادن یه player object.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت یه player object.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت یه player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش یه player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): مکان‌یابی یه player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): چک کردن چرخش یه player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): اتصال یه player object به بازیکن.