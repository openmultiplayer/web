---
title: CreateObject
sidebar_label: CreateObject
description: در مختصات مشخص شده در دنیای بازی یک شیء ایجاد می‌کند.
tags: ["object"]
---

## توضیحات

در مختصات مشخص شده در دنیای بازی یک شیء ایجاد می‌کند.

| نام                | توضیحات                                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| modelid            | مدلی که باید ایجاد شود.                                                                                                   |
| Float:x            | مختصات X برای ایجاد شیء.                                                                                                  |
| Float:y            | مختصات Y برای ایجاد شیء.                                                                                                  |
| Float:z            | مختصات Z برای ایجاد شیء.                                                                                                  |
| Float:rotationX    | چرخش X شیء.                                                                                                              |
| Float:rotationY    | چرخش Y شیء.                                                                                                              |
| Float:rotationZ    | چرخش Z شیء.                                                                                                              |
| Float:drawDistance | (اختیاری) فاصله‌ای که San Andreas اشیاء را در آن رندر می‌کند. 0.0 باعث می‌شود اشیاء در فاصله پیش‌فرض خود رندر شوند. |

## مثال‌ها

```c
public OnGameModeInit()
{
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0); // شیء در فاصله پیش‌فرض رندر می‌شود.
    CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0); // شیء در فاصله 300.0 واحد رندر می‌شود.
    return 1;
}
```

## نکات

:::tip

حداکثر 1000 شیء (MAX_OBJECTS) وجود دارد. برای دور زدن این محدودیت، می‌توانید از پلاگین [streamer](https://github.com/samp-incognito/samp-streamer-plugin) استفاده کنید.

:::

## توابع مرتبط

- [DestroyObject](DestroyObject): از بین بردن یک شیء.
- [IsValidObject](IsValidObject): بررسی معتبر بودن یک شیء.
- [MoveObject](MoveObject): حرکت دادن یک شیء.
- [StopObject](StopObject): متوقف کردن حرکت یک شیء.
- [SetObjectPos](SetObjectPos): تنظیم موقعیت یک شیء.
- [SetObjectRot](SetObjectRot): تنظیم چرخش یک شیء.
- [GetObjectPos](GetObjectPos): پیدا کردن موقعیت یک شیء.
- [GetObjectRot](GetObjectRot): بررسی چرخش یک شیء.
- [AttachObjectToPlayer](AttachObjectToPlayer): چسباندن یک شیء به بازیکن.
- [SetObjectMaterialText](SetObjectMaterialText): جایگزین کردن تکسچر شیء با متن.
- [SetObjectMaterial](SetObjectMaterial): جایگزین کردن تکسچر شیء با تکسچر مدل دیگری از بازی.
- [CreatePlayerObject](CreatePlayerObject): ایجاد شیء فقط برای یک بازیکن.
- [DestroyPlayerObject](DestroyPlayerObject): از بین بردن شیء بازیکن.
- [IsValidPlayerObject](IsValidPlayerObject): بررسی معتبر بودن یک شیء بازیکن.
- [MovePlayerObject](MovePlayerObject): حرکت دادن شیء بازیکن.
- [StopPlayerObject](StopPlayerObject): متوقف کردن حرکت شیء بازیکن.
- [SetPlayerObjectPos](SetPlayerObjectPos): تنظیم موقعیت شیء بازیکن.
- [SetPlayerObjectRot](SetPlayerObjectRot): تنظیم چرخش شیء بازیکن.
- [GetPlayerObjectPos](GetPlayerObjectPos): پیدا کردن موقعیت شیء بازیکن.
- [GetPlayerObjectRot](GetPlayerObjectRot): بررسی چرخش شیء بازیکن.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): چسباندن شیء بازیکن به بازیکن.
- [SetPlayerObjectMaterialText](SetPlayerObjectMaterialText): جایگزین کردن تکسچر شیء بازیکن با متن.
- [SetPlayerObjectMaterial](SetPlayerObjectMaterial): جایگزین کردن تکسچر شیء بازیکن با تکسچر مدل دیگری از بازی.