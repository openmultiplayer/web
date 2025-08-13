---
title: PlayerPlaySound
sidebar_label: PlayerPlaySound
description: پخش صدای مشخص شده برای یک بازیکن
tags: ["player"]
---

## توضیحات

صدای مشخص شده رو برای یک بازیکن پخش می‌کنه.

برای library ای که تمام صداها رو لیست می‌کنه، [اینجا](https://github.com/WoutProvost/samp-sound-array) رو چک کن.

| نام      | توضیحات                                                       |
| -------- | ------------------------------------------------------------- |
| playerid | آی‌دی بازیکنی که براش صدا پخش می‌شه.                           |
| soundid  | [صدایی](../resources/sound-ids) که باید پخش بشه.               |
| Float:x  | مختصات X برای جایی که صدا پخش می‌شه. (0.0 برای بدون موقعیت)    |
| Float:y  | مختصات Y برای جایی که صدا پخش می‌شه. (0.0 برای بدون موقعیت)    |
| Float:z  | مختصات Z برای جایی که صدا پخش می‌شه. (0.0 برای بدون موقعیت)    |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یعنی بازیکن متصل نیست.

## مثال‌ها

```c
// Sedaye moshtzan player (baraye dastorat mesl /slap khoob hast). Seda aromiesh khahed bud, chon manba 10 meter balatar az player hast.
PlayerPlaySound(playerid, 1130, 0.0, 0.0, 10.0);
```

## نکات

:::tip

فقط در صورتی از مختصات استفاده کن که می‌خوای صدا در یک موقعیت مشخص پخش بشه. همه مختصات رو 0.0 قرار بده تا صدا به طور معمولی پخش بشه.

:::

## توابع مرتبط

- [PlayCrimeReportForPlayer](PlayCrimeReportForPlayer): پخش گزارش جرم برای یک بازیکن.
- [PlayAudioStreamForPlayer](PlayAudioStreamForPlayer): پخش یک stream صوتی برای یک بازیکن.
- [StopAudioStreamForPlayer](StopAudioStreamForPlayer): توقف stream صوتی فعلی برای یک بازیکن.

## منابع مرتبط

- [آی‌دی‌های صدا](../resources/sound-ids)