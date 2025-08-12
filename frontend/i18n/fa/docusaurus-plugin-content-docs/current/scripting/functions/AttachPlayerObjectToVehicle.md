---
title: AttachPlayerObjectToVehicle
sidebar_label: AttachPlayerObjectToVehicle
description: اتصال یک شیء بازیکن به وسیله نقلیه.
tags: ["player", "object", "playerobject", "vehicle"]
---

## توضیحات

اتصال یک شیء بازیکن به وسیله نقلیه.

| نام             | توضیحات                                         |
| --------------- | ------------------------------------------------ |
| playerid        | ID بازیکنی که شیء برای آن ایجاد شده. |
| objectid        | ID شیئی که به وسیله نقلیه متصل می‌شود.   |
| parentid        | ID وسیله نقلیه‌ای که شیء به آن متصل می‌شود.   |
| Float:offsetX   | جابجایی موقعیت X برای اتصال.            |
| Float:offsetY   | جابجایی موقعیت Y برای اتصال.            |
| Float:offsetZ   | جابجایی موقعیت Z برای اتصال.            |
| Float:rotationX | جابجایی چرخش X برای اتصال.            |
| Float:rotationY | جابجایی چرخش Y برای اتصال.            |
| Float:rotationZ | جابجایی چرخش Z برای اتصال.            |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER) // اگر بازیکن وارد وسیله نقلیه شد
    {
        // اتصال گاو بزرگ.
        new cowObject = CreatePlayerObject(playerid, 16442, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
        new vehicleid = GetPlayerVehicleID(playerid);

        AttachPlayerObjectToVehicle(playerid, cowObject, vehicleid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0);
    }
    return 1;
}
```

## نکات

:::tip

باید شیء را قبل از تلاش برای اتصال آن به وسیله نقلیه ایجاد کنید.

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
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): اتصال یک شیء بازیکن به بازیکن
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