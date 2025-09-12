---
title: GetVehicleParamsCarWindows
sidebar_label: GetVehicleParamsCarWindows
description: وضعیت فعلی شیشه‌های یه وسیله نقلیه رو دریافت کنی.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

وضعیت فعلی شیشه‌های یه وسیله نقلیه رو دریافت کنی

| نام             | توضیحات                                                               |
| ---------------- | ------------------------------------------------------------------------- |
| vehicleid        | ID وسیله نقلیه                                                     |
| &bool:frontLeft  | integer برای ذخیره وضعیت شیشه راننده.                   |
| &bool:frontRight | integer برای ذخیره وضعیت شیشه مسافر.                |
| &bool:rearLeft   | integer برای ذخیره وضعیت شیشه عقب چپ (اگه موجود باشه).  |
| &bool:rearRight  | integer برای ذخیره وضعیت شیشه عقب راست (اگه موجود باشه). |

## مقادیر برگشتی

وضعیت شیشه‌های وسیله نقلیه در متغیرهای مشخص شده ذخیره می‌شه.

## نکات

:::tip

مقادیر برگردونده شده در هر متغیر به شرح زیر هستن:

**-1**: وضعیت شیشه تنظیم نشده (معمولاً بسته، مگر اینکه صراحتاً روی -1 تنظیم شده باشه)

**0**: باز

**1**: بسته

:::

## توابع مرتبط

- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): باز و بسته کردن شیشه‌های یه وسیله نقلیه.
- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): دریافت وضعیت فعلی درهای یه وسیله نقلیه.
- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): باز و بسته کردن درهای یه وسیله نقلیه.