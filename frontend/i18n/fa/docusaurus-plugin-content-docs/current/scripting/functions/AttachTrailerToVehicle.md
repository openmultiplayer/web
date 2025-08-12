---
title: AttachTrailerToVehicle
sidebar_label: AttachTrailerToVehicle
description: اتصال یک وسیله نقلیه به وسیله نقلیه دیگر به عنوان تریلر.
tags: ["vehicle"]
---

## توضیحات

اتصال یک وسیله نقلیه به وسیله نقلیه دیگر به عنوان تریلر.

| نام       | توضیحات                                               |
| --------- | ------------------------------------------------- |
| trailerid | ID وسیله نقلیه‌ای که کشیده خواهد شد.        |
| vehicleid | ID وسیله نقلیه‌ای که تریلر را خواهد کشید. |

## مقدار بازگشتی

این تابع همیشه **true** بازمی‌گرداند، حتی اگر هیچیک از vehicle IDهای ارسالی معتبر نباشند.

## مثال‌ها

```c
new vehicleId = CreateVehicle(403, 657.8788, 1721.9125, 7.7199, 41.0000, -1, -1, 100);
new trailerId = CreateVehicle(435, 651.8154, 1716.3301, 7.7700, 41.0000, -1, -1, 100);

AttachTrailerToVehicle(trailerId, vehicleId);
```

## نکات

:::warning

این فقط اگر هر دو وسیله نقلیه برای بازیکن stream شده باشند کار می‌کند (بررسی [IsVehicleStreamedIn](IsVehicleStreamedIn)).

:::

## توابع مرتبط

- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): جدا کردن تریلر از وسیله نقلیه.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): بررسی اینکه آیا تریلر به وسیله نقلیه متصل است.
- [GetVehicleTrailer](GetVehicleTrailer): بررسی اینکه وسیله نقلیه چه تریلری را می‌کشد.