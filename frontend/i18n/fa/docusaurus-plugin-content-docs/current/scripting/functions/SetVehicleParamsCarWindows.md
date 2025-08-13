---
title: SetVehicleParamsCarWindows
sidebar_label: SetVehicleParamsCarWindows
description: امکان باز و بسته کردن شیشه‌های یه ماشین رو فراهم می‌کنه.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

امکان باز و بسته کردن شیشه‌های یه ماشین رو فراهم می‌کنه.

| نام             | توضیحات                                                               |
| --------------- | ------------------------------------------------------------------------- |
| vehicleid       | ID ماشینی که می‌خوای وضعیت شیشه‌ش رو تنظیم کنی                          |
| bool:frontLeft  | وضعیت شیشه راننده. 0 برای باز کردن، 1 برای بسته کردن.                  |
| bool:frontRight | وضعیت شیشه مسافر. 0 برای باز کردن، 1 برای بسته کردن.                 |
| bool:rearLeft   | وضعیت شیشه عقب چپ (اگه موجود باشه). 0 برای باز کردن، 1 برای بسته کردن.  |
| bool:rearRight  | وضعیت شیشه عقب راست (اگه موجود باشه). 0 برای باز کردن، 1 برای بسته کردن. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. یعنی ماشین وجود نداره.

## توابع مرتبط

- [SetVehicleParamsCarDoors](SetVehicleParamsCarDoors): درهای یه ماشین رو باز و بسته می‌کنه.
- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): وضعیت فعلی درهای یه ماشین رو دریافت می‌کنه.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): وضعیت فعلی شیشه‌های یه ماشین رو دریافت می‌کنه