---
title: AttachObjectToObject
sidebar_label: AttachObjectToObject
description: می‌توانید از این تابع برای اتصال اشیاء به سایر اشیاء استفاده کنید.
tags: ["object"]
---

## توضیحات

می‌توانید از این تابع برای اتصال اشیاء به سایر اشیاء استفاده کنید. اشیاء متصل شده شیء اصلی را دنبال خواهند کرد.

| نام               | توضیحات                                                                    |
| ----------------- | -------------------------------------------------------------------------- |
| objectid          | شیئی که به شیء دیگری متصل می‌شود.                                        |
| parentid          | شیئی که شیء به آن متصل می‌شود.                                           |
| Float:offsetX     | فاصله بین شیء اصلی و شیء در جهت X.                                      |
| Float:offsetY     | فاصله بین شیء اصلی و شیء در جهت Y.                                      |
| Float:offsetZ     | فاصله بین شیء اصلی و شیء در جهت Z.                                      |
| Float:rotationX   | چرخش X بین شیء و شیء اصلی.                                              |
| Float:rotationY   | چرخش Y بین شیء و شیء اصلی.                                              |
| Float:rotationZ   | چرخش Z بین شیء و شیء اصلی.                                              |
| bool:syncRotation | اگر روی `false` تنظیم شود، چرخش objectid با attachtoid تغییر نخواهد کرد. |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. این یعنی شیء اول (objectid) وجود ندارد. هیچ بررسی داخلی برای تأیید وجود شیء دوم (attachtoid) انجام نمی‌شود.

## مثال‌ها

```c
new gObjectId = CreateObject(...);
new gAttachToId = CreateObject(...);

AttachObjectToObject(gObjectId, gAttachToId, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, true);
```

## نکات

:::tip

هر دو شیء باید قبل از تلاش برای اتصال آن‌ها ایجاد شوند.

:::

:::tip

نسخه player-object از این تابع در SA-MP وجود ندارد.

اما [AttachPlayerObjectToObject](AttachPlayerObjectToObject) در open.mp وجود دارد

:::

## توابع مرتبط

- [AttachObjectToPlayer](AttachObjectToPlayer): اتصال یک شیء به بازیکن.
- [AttachObjectToVehicle](AttachObjectToVehicle): اتصال یک شیء به وسیله نقلیه.
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