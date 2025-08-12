---
title: AttachPlayerObjectToPlayer
sidebar_label: AttachPlayerObjectToPlayer
description: مانند AttachObjectToPlayer اما برای اشیائی که برای بازیکن ایجاد شده‌اند.
tags: ["player", "object", "playerobject"]
---

## توضیحات

مانند [AttachObjectToPlayer](AttachObjectToPlayer) اما برای اشیائی که برای بازیکن ایجاد شده‌اند.

| نام             | توضیحات                                                           |
| --------------- | ----------------------------------------------------------------- |
| playerid        | ID بازیکنی که با شیء مرتبط است.                           |
| objectid        | objectid که می‌خواهید به بازیکن متصل کنید.                    |
| parentid        | ID بازیکنی که می‌خواهید به شیء متصل کنید.               |
| Float:offsetX   | فاصله بین بازیکن و شیء در جهت X.                      |
| Float:offsetY   | فاصله بین بازیکن و شیء در جهت Y.                      |
| Float:offsetZ   | فاصله بین بازیکن و شیء در جهت Z.                      |
| Float:rotationX | چرخش X.                                                      |
| Float:rotationY | چرخش Y.                                                      |
| Float:rotationZ | چرخش Z.                                                      |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    AttachPlayerObjectToPlayer(playerid, gPlayerObject[playerid], other_playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2.0);
    return 1;
}
```

## نکات

:::warning

این تابع در SA-MP 0.3 حذف شد.

:::

## توابع مرتبط

- [CreatePlayerObject](CreatePlayerObject): ایجاد یک شیء فقط برای یک بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): نابودی یک شیء بازیکن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی اینکه آیا یک شیء بازیکن معین معتبر است.
- [MovePlayerObject](MovePlayerObject): حرکت دادن یک شیء بازیکن.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت یک شیء بازیکن.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش یک شیء بازیکن.
- [GetPlayerObjectPos](GetPlayerObjectPos): یافتن موقعیت یک شیء بازیکن.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت یک شیء بازیکن.
- [GetPlayerObjectRot](GetPlayerObjectRot): بررسی چرخش یک شیء بازیکن.
- [SetPlayerAttachedObject](SetPlayerAttachedObject): اتصال یک شیء به بازیکن
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): حذف یک شیء متصل از بازیکن
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): بررسی اینکه آیا یک شیء در ایندکس مشخصی به بازیکن متصل است
- [CreateObject](CreateObject): ایجاد یک شیء.
- [DestroyObject](DestroyObject): نابودی یک شیء.
- [IsValidObject](IsValidObject): بررسی اینکه آیا یک شیء معین معتبر است.
- [MoveObject](MoveObject): حرکت دادن یک شیء.
- [StopObject](StopObject): متوقف کردن حرکت یک شیء.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یک شیء.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یک شیء.
- [GetObjectPos](GetObjectPos): یافتن موقعیت یک شیء.
- [GetObjectRot](GetObjectRot): بررسی چرخش یک شیء.
- [AttachObjectToPlayer](AttachObjectToPlayer): اتصال یک شیء به بازیکن.