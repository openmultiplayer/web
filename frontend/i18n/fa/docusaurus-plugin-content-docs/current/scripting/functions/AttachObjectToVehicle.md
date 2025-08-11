---
title: AttachObjectToVehicle
sidebar_label: AttachObjectToVehicle
description: اتصال یک شیء به وسیله نقلیه.
tags: ["object", "vehicle"]
---

## توضیحات

اتصال یک شیء به وسیله نقلیه.

| نام             | توضیحات                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| objectid        | ID شیئی که به وسیله نقلیه متصل می‌شود. توجه کنید که این یک object ID است، نه model ID. شیء ابتدا باید با CreateObject ایجاد شده باشد. |
| parentid        | ID وسیله نقلیه‌ای که شیء به آن متصل می‌شود.                                                                                                    |
| Float:offsetX   | جابجایی محور X از وسیله نقلیه برای اتصال شیء.                                                                                                   |
| Float:offsetY   | جابجایی محور Y از وسیله نقلیه برای اتصال شیء.                                                                                                   |
| Float:offsetZ   | جابجایی محور Z از وسیله نقلیه برای اتصال شیء.                                                                                                   |
| Float:rotationX | جابجایی چرخش X برای شیء.                                                                                                                          |
| Float:rotationY | جابجایی چرخش Y برای شیء.                                                                                                                          |
| Float:rotationZ | جابجایی چرخش Z برای شیء.                                                                                                                          |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
new objectid = CreateObject(...);
new vehicleid = GetPlayerVehicleID(playerid);
AttachObjectToVehicle(objectid, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
```

## نکات

:::tip

شیء باید ابتدا ایجاد شده باشد.

:::

:::warning

زمانی که وسیله نقلیه نابود یا respawn می‌شود، اشیاء متصل شده با آن نابود نخواهند شد؛ آن‌ها در موقعیتی که وسیله نقلیه ناپدید شده ثابت باقی می‌مانند و به وسیله نقلیه بعدی که vehicle ID که اشیاء به آن متصل بودند را بگیرد، متصل خواهند شد.

:::

## توابع مرتبط

- [AttachObjectToPlayer](AttachObjectToPlayer): اتصال یک شیء به بازیکن.
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