---
title: SetPlayerObjectPos
sidebar_label: SetPlayerObjectPos
description: موقعیت یک player-object رو به مختصات مشخص شده تنظیم می‌کنه.
tags: ["player", "object", "playerobject"]
---

## توضیحات

موقعیت یک player-object رو به مختصات مشخص شده تنظیم می‌کنه.

| نام      | توضیحات                                                                            |
| -------- | ---------------------------------------------------------------------------------- |
| playerid | آیدی پلیری که قراره موقعیت player-object اش تنظیم بشه                              |
| objectid | آیدی player-object ای که قراره موقعیتش تنظیم بشه. توسط CreatePlayerObject برگردونده می‌شه |
| Float:x  | مختصات X که قراره object اونجا قرار بگیره                                          |
| Float:y  | مختصات Y که قراره object اونجا قرار بگیره                                          |
| Float:z  | مختصات Z که قراره object اونجا قرار بگیره                                          |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. پلیر و/یا object وجود نداره.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    return 1;
}

// bad az chand vaghat
SetPlayerObjectPos(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 14.283400);
```

## توابع مرتبط

- [CreatePlayerObject](CreatePlayerObject): یک object فقط برای یک پلیر می‌سازه.
- [DestroyPlayerObject](DestroyPlayerObject): یک player object رو نابود می‌کنه.
- [IsValidPlayerObject](IsValidPlayerObject): چک می‌کنه که آیا یک player object خاص معتبره یا نه.
- [MovePlayerObject](MovePlayerObject): یک player object رو حرکت می‌ده.
- [StopPlayerObject](StopPlayerObject): یک player object رو از حرکت متوقف می‌کنه.
- [SetPlayerObjectRot](SetPlayerObjectRot): چرخش یک player object رو تنظیم می‌کنه.
- [GetPlayerObjectPos](GetPlayerObjectPos): موقعیت یک player object رو پیدا می‌کنه.
- [GetPlayerObjectRot](GetPlayerObjectRot): چرخش یک player object رو چک می‌کنه.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): یک player object رو به یک پلیر وصل می‌کنه.
- [CreateObject](CreateObject): یک object می‌سازه.
- [DestroyObject](DestroyObject): یک object رو نابود می‌کنه.
- [IsValidObject](IsValidObject): چک می‌کنه که آیا یک object خاص معتبره یا نه.
- [MoveObject](MoveObject): یک object رو حرکت می‌ده.
- [StopObject](StopObject): یک object رو از حرکت متوقف می‌کنه.
- [SetObjectPos](SetObjectPos): موقعیت یک object رو تنظیم می‌کنه.
- [SetObjectRot](SetObjectRot): چرخش یک object رو تنظیم می‌کنه.
- [GetObjectPos](GetObjectPos): موقعیت یک object رو پیدا می‌کنه.
- [GetObjectRot](GetObjectRot): چرخش یک object رو چک می‌کنه.
- [AttachObjectToPlayer](AttachObjectToPlayer): یک object رو به یک پلیر وصل می‌کنه.