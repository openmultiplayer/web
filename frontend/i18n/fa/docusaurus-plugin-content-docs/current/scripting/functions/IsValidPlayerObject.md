---
title: IsValidPlayerObject
sidebar_label: IsValidPlayerObject
description: چک می‌کنه که آیا ID object داده شده برای بازیکن داده شده معتبره یا نه.
tags: ["player", "object", "playerobject"]
---

## توضیحات

چک می‌کنه که آیا ID object داده شده برای بازیکن داده شده معتبره یا نه.

| نام      | توضیحات                                                  |
| -------- | -------------------------------------------------------- |
| playerid | ID بازیکنی که player-object ش باید validate بشه.        |
| objectid | ID object که باید validate بشه.                         |

## مقادیر برگشتی

**true** اگه object وجود داشته باشه، **false** اگه نداشته باشه.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
	// Check if an object is valid (exists) before we delete it
	if (IsValidPlayerObject(playerid, gPlayerObject[playerid]))
	{
		DestroyPlayerObject(playerid, gPlayerObject[playerid]);
	}
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerObject](CreatePlayerObject): ساخت یه object فقط برای یه بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): نابود کردن یه player object.
- [MovePlayerObject](MovePlayerObject): حرکت دادن یه player object.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت یه player object.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت یه player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش یه player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): مکان‌یابی یه player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): چک کردن چرخش یه player object.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): اتصال یه player object به بازیکن.
- [CreateObject](CreateObject): ساخت یه object.
- [DestroyObject](DestroyObject): نابود کردن یه object.
- [IsValidObject](IsValidObject): چک می‌کنه که آیا یه object خاص معتبره یا نه.
- [MoveObject](MoveObject): حرکت دادن یه object.
- [StopObject](StopObject): متوقف کردن حرکت یه object.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یه object.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یه object.
- [GetObjectPos](GetObjectPos): مکان‌یابی یه object.
- [GetObjectRot](GetObjectRot): چک کردن چرخش یه object.
- [AttachObjectToPlayer](AttachObjectToPlayer): اتصال یه object به بازیکن.