---
title: GetVehicleParamsCarDoors
sidebar_label: GetVehicleParamsCarDoors
description: وضعیت فعلی درهای یه وسیله نقلیه رو دریافت کنی.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

وضعیت فعلی درهای یه وسیله نقلیه رو دریافت کنی

| نام             | توضیحات                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| vehicleid        | ID وسیله نقلیه                                                   |
| &bool:frontLeft  | integer برای ذخیره وضعیت در راننده.                  |
| &bool:frontRight | integer برای ذخیره وضعیت در مسافر.               |
| &bool:rearLeft   | integer برای ذخیره وضعیت در عقب چپ (اگه موجود باشه).  |
| &bool:rearRight  | integer برای ذخیره وضعیت در عقب راست (اگه موجود باشه). |

## مقادیر برگشتی

وضعیت درهای وسیله نقلیه در متغیرهای مشخص شده ذخیره می‌شه.

## نکات

:::tip

مقادیر برگردونده شده در هر متغیر به شرح زیر هستن:

**-1**: وضعیت در تنظیم نشده

**1**: باز

**0**: بسته

:::

## توابع مرتبط

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): باز و بسته کردن درهای یه وسیله نقلیه.
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): باز و بسته کردن شیشه‌های یه وسیله نقلیه.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): دریافت وضعیت فعلی شیشه‌های یه وسیله نقلیه