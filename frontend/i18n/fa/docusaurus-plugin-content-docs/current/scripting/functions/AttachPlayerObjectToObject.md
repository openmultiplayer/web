---
title: AttachPlayerObjectToObject
sidebar_label: AttachPlayerObjectToObject
description: می‌توانید از این تابع برای اتصال player-objectها به سایر player-objectها استفاده کنید.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

می‌توانید از این تابع برای اتصال player-objectها به سایر player-objectها استفاده کنید. اشیاء متصل شده شیء اصلی را دنبال خواهند کرد.

| نام               | توضیحات                                                               |
| ----------------- | --------------------------------------------------------------------- |
| playerid          | ID بازیکن.                                                           |
| objectid          | player-object که به player-object دیگری متصل می‌شود.                |
| parentid          | شیئی که شیء به آن متصل می‌شود.                                       |
| Float:OffsetX     | فاصله بین شیء اصلی و شیء در جهت X.                                |
| Float:OffsetY     | فاصله بین شیء اصلی و شیء در جهت Y.                                |
| Float:OffsetZ     | فاصله بین شیء اصلی و شیء در جهت Z.                                |
| Float:RotX        | چرخش X بین شیء و شیء اصلی.                                        |
| Float:RotY        | چرخش Y بین شیء و شیء اصلی.                                        |
| Float:RotZ        | چرخش Z بین شیء و شیء اصلی.                                        |
| bool:syncRotation | اگر روی `false` تنظیم شود، چرخش objectid با parentid تغییر نخواهد کرد. |

## مقدار بازگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع در اجرا ناکام بود. این یعنی شیء اول (objectid) وجود ندارد. هیچ بررسی داخلی برای تأیید وجود شیء دوم (parentid) انجام نمی‌شود.

## مثال‌ها

```c
new objectid = CreatePlayerObject(...);
new parentid = CreatePlayerObject(...);

AttachPlayerObjectToObject(playerid, objectid, parentid, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);
```

## نکات

:::tip

هر دو شیء باید قبل از تلاش برای اتصال آن‌ها ایجاد شوند.

:::

## توابع مرتبط

- [AttachObjectToObject](AttachObjectToObject): اتصال یک شیء به شیء دیگر.
- [AttachObjectToPlayer](AttachObjectToPlayer): اتصال یک شیء به بازیکن.
- [AttachObjectToVehicle](AttachObjectToVehicle): اتصال یک شیء به وسیله نقلیه.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): اتصال یک شیء بازیکن به بازیکن.
- [CreatePlayerObject](CreatePlayerObject): ایجاد یک شیء فقط برای یک بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): نابودی یک شیء بازیکن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی اینکه آیا یک شیء بازیکن معین معتبر است.
- [MovePlayerObject](MovePlayerObject): حرکت دادن یک شیء بازیکن.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت یک شیء بازیکن.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت یک شیء بازیکن.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش یک شیء بازیکن.
- [GetPlayerObjectPos](GetPlayerObjectPos): یافتن موقعیت یک شیء بازیکن.
- [GetPlayerObjectRot](GetPlayerObjectRot): بررسی چرخش یک شیء بازیکن.