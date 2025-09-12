---
title: IsPlayerObjectMoving
sidebar_label: IsPlayerObjectMoving
description: چک می‌کنه که آیا player objectid داده شده در حال حرکته یا نه.
tags: ["player", "object", "playerobject"]
---

## توضیحات

چک می‌کنه که آیا player objectid داده شده در حال حرکته یا نه.

| نام      | توضیحات                                                         |
| -------- | --------------------------------------------------------------- |
| playerid | ID بازیکنی که player-object ش چک می‌شه.                        |
| objectid | player objectid ای که می‌خوای چک کنی که در حال حرکته یا نه.     |

## مقادیر برگشتی

1 اگه player object در حال حرکت باشه، 0 اگه نباشه.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);
	
	if (IsPlayerObjectMoving(playerid, gPlayerObject[playerid]))
	{
		StopPlayerObject(playerid, gPlayerObject[playerid]);
	}
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerObject](CreatePlayerObject): ساخت یه آبجکت فقط برای یه بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): نابود کردن یه player object.
- [IsValidPlayerObject](IsValidPlayerObject): چک می‌کنه که آیا یه player object خاص معتبره یا نه.
- [MovePlayerObject](MovePlayerObject): حرکت دادن یه player object.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت یه player object.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت یه player object.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش یه player object.
- [GetPlayerObjectPos](GetPlayerObjectPos): مکان‌یابی یه player object.
- [GetPlayerObjectRot](GetPlayerObjectRot): چک کردن چرخش یه player object.
- [AttachPlayerObjectToPlayer](AttachObjectToPlayer): اتصال یه player object به بازیکن.
- [CreateObject](CreateObject): ساخت یه آبجکت.
- [DestroyObject](DestroyObject): نابود کردن یه آبجکت.
- [IsValidObject](IsValidObject): چک می‌کنه که آیا یه آبجکت خاص معتبره یا نه.
- [MoveObject](MoveObject): حرکت دادن یه آبجکت.
- [IsObjectMoving](IsObjectMoving): چک کردن اینکه آبجکت در حال حرکته یا نه.
- [StopObject](StopObject): متوقف کردن حرکت یه آبجکت.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یه آبجکت.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یه آبجکت.
- [GetObjectPos](GetObjectPos): مکان‌یابی یه آبجکت.
- [GetObjectRot](GetObjectRot): چک کردن چرخش یه آبجکت.
- [AttachObjectToPlayer](AttachObjectToPlayer): اتصال یه آبجکت به بازیکن.

## callback های مرتبط

- [OnPlayerObjectMoved](../callbacks/OnPlayerObjectMoved): وقتی player-object حرکتش متوقف می‌شه فراخوانی می‌شه.