---
title: SetPlayerObjectRot
sidebar_label: SetPlayerObjectRot
description: چرخش یک object رو در محور های X، Y و Z تنظیم می‌کنه.
tags: ["player", "object", "playerobject"]
---

## توضیحات

چرخش یک object رو در محور های X، Y و Z تنظیم می‌کنه.

| نام             | توضیحات                                      |
| --------------- | -------------------------------------------- |
| playerid        | آیدی پلیری که قراره player-object اش بچرخه   |
| objectid        | آیدی player-object ای که قراره بچرخه         |
| Float:rotationX | چرخش X که قراره تنظیم بشه                   |
| Float:rotationY | چرخش Y که قراره تنظیم بشه                   |
| Float:rotationZ | چرخش Z که قراره تنظیم بشه                   |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    SetPlayerObjectRot(playerid, gPlayerObject[playerid], 0.0, 0.0, 180.0);
    return 1;
}
```

## نکات

:::tip

برای چرخوندن نرم یک object، [MovePlayerObject](MovePlayerObject) رو ببین.

:::

## توابع مرتبط

- [CreatePlayerObject](CreatePlayerObject): یک object فقط برای یک پلیر می‌سازه.
- [DestroyPlayerObject](DestroyPlayerObject): یک player object رو نابود می‌کنه.
- [IsValidPlayerObject](IsValidPlayerObject): چک می‌کنه که آیا یک player object خاص معتبره یا نه.
- [MovePlayerObject](MovePlayerObject): یک player object رو حرکت می‌ده.
- [StopPlayerObject](StopPlayerObject): یک player object رو از حرکت متوقف می‌کنه.
- [SetPlayerObjectPos](SetPlayerObjectPos): موقعیت یک player object رو تنظیم می‌کنه.
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