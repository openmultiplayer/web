---
title: SetVehicleParamsCarDoors
sidebar_label: SetVehicleParamsCarDoors
description: امکان باز و بسته کردن درهای یه ماشین رو فراهم می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

امکان باز و بسته کردن درهای یه ماشین رو فراهم می‌کنه.

| نام             | توضیحات                                                             |
| --------------- | ----------------------------------------------------------------------- |
| vehicleid       | ID ماشینی که می‌خوای وضعیت درش رو تنظیم کنی                          |
| bool:frontLeft  | وضعیت در راننده. 1 برای باز کردن، 0 برای بسته کردن.                  |
| bool:frontRight | وضعیت در مسافر. 1 برای باز کردن، 0 برای بسته کردن.                 |
| bool:rearLeft   | وضعیت در عقب چپ (اگه موجود باشه). 1 برای باز کردن، 0 برای بسته کردن.  |
| bool:rearRight  | وضعیت در عقب راست (اگه موجود باشه). 1 برای باز کردن، 0 برای بسته کردن. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. یعنی ماشین وجود نداره.

## توابع مرتبط

- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): وضعیت فعلی درهای یه ماشین رو دریافت می‌کنه.
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): شیشه‌های یه ماشین رو باز و بسته می‌کنه.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): وضعیت فعلی شیشه‌های یه ماشین رو دریافت می‌کنه