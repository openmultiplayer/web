---
title: GetVehicleTrailer
sidebar_label: GetVehicleTrailer
description: ID تریلری که به یه وسیله نقلیه وصل شده رو دریافت می‌کنه.
tags: ["vehicle"]
---

## توضیحات

ID تریلری که به یه وسیله نقلیه وصل شده رو دریافت می‌کنه.

| نام      | توضیحات                                  |
| --------- | -------------------------------------------- |
| vehicleid | ID وسیله نقلیه‌ای که می‌خوای تریلرش رو بگیری. |

## مقادیر برگشتی

ID وسیله نقلیه تریلر یا 0 اگه هیچ تریلری وصل نباشه.

## مثال‌ها

```c
new
	trailerId = GetVehicleTrailer(vehicleid);
DetachTrailerFromVehicle(trailerId);
```

## نکات

:::warning

این تابع برای قطارها کار نمی‌کنه.

:::

## توابع مرتبط

- [AttachTrailerToVehicle](AttachTrailerToVehicle): وصل کردن تریلر به وسیله نقلیه.
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): جدا کردن تریلر از وسیله نقلیه.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): بررسی اینکه آیا تریلر به وسیله نقلیه وصله یا نه.