---
title: AttachObjectToPlayer
sidebar_label: AttachObjectToPlayer
description: اتصال یک شیء به بازیکن.
tags: ["object", "player"]
---

## توضیحات

اتصال یک شیء به بازیکن.

| نام             | توضیحات                                                           |
| --------------- | ----------------------------------------------------------------- |
| objectid        | ID شیئی که به بازیکن متصل می‌شود.                               |
| parentid        | ID بازیکنی که شیء به آن متصل می‌شود.                            |
| Float:offsetX   | فاصله بین بازیکن و شیء در جهت X.                               |
| Float:offsetY   | فاصله بین بازیکن و شیء در جهت Y.                               |
| Float:offsetZ   | فاصله بین بازیکن و شیء در جهت Z.                               |
| Float:rotationX | چرخش X بین شیء و بازیکن.                                       |
| Float:rotationY | چرخش Y بین شیء و بازیکن.                                       |
| Float:rotationZ | چرخش Z بین شیء و بازیکن.                                       |

## مقدار بازگشتی

این تابع همیشه **false** بازمی‌گرداند.

## مثال‌ها

```c
new gMyObject;
gMyObject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
AttachObjectToPlayer(gMyObject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2);
```

## توابع مرتبط

- [AttachObjectToVehicle](AttachObjectToVehicle): اتصال یک شیء به وسیله نقلیه.
- [AttachObjectToObject](AttachObjectToObject): اتصال یک شیء به شیء دیگر.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): اتصال یک شیء بازیکن به بازیکن.
- [CreateObject](CreateObject): ایجاد یک شیء.
- [DestroyObject](DestroyObject): نابودی یک شیء.
- [IsValidObject](IsValidObject): بررسی اینکه آیا یک شیء معین معتبر است.
- [MoveObject](MoveObject): حرکت دادن یک شیء.
- [StopObject](StopObject): متوقف کردن حرکت یک شیء.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یک شیء.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یک شیء.
- [GetObjectPos](GetObjectPos): یافتن موقعیت یک شیء.
- [GetObjectRot](GetObjectRot): بررسی چرخش یک شیء.
- [CreatePlayerObject](CreatePlayerObject): ایجاد یک شیء فقط برای یک بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): نابودی یک شیء بازیکن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی اینکه آیا یک شیء بازیکن معین معتبر است.
- [MovePlayerObject](MovePlayerObject): حرکت دادن یک شیء بازیکن.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت یک شیء بازیکن.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت یک شیء بازیکن.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش یک شیء بازیکن.
- [GetPlayerObjectPos](GetPlayerObjectPos): یافتن موقعیت یک شیء بازیکن.
- [GetPlayerObjectRot](GetPlayerObjectRot): بررسی چرخش یک شیء بازیکن.