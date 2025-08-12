---
title: DetachTrailerFromVehicle
sidebar_label: DetachTrailerFromVehicle
description: اتصال بین خودرو و تریلر آن را در صورت وجود قطع می‌کند.
tags: ["vehicle"]
---

## توضیحات

اتصال بین خودرو و تریلر آن را در صورت وجود قطع می‌کند.

| نام      | توضیحات                   |
| --------- | ------------------------- |
| vehicleid | شناسه خودرو کشنده.        |

## مقادیر بازگشتی

این تابع مقدار مشخصی برنمی‌گرداند.

## مثال‌ها

```c
DetachTrailerFromVehicle(vehicleid);
```

## توابع مرتبط

- [AttachTrailerToVehicle](AttachTrailerToVehicle): چسباندن تریلر به خودرو.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): بررسی اتصال تریلر به خودرو.
- [GetVehicleTrailer](GetVehicleTrailer): بررسی اینکه خودرو چه تریلری را می‌کشد.