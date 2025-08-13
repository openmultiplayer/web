---
title: IsTrailerAttachedToVehicle
sidebar_label: IsTrailerAttachedToVehicle
description: چک می‌کنه که آیا یه ماشین trailer داره یا نه.
tags: ["vehicle"]
---

## توضیحات

چک می‌کنه که آیا یه ماشین trailer داره یا نه. از GetVehicleTrailer استفاده کن تا ID ماشین trailer رو دریافت کنی (اگه داشته باشه).

| نام       | توضیحات                                       |
| --------- | --------------------------------------------- |
| vehicleid | ID ماشینی که باید برای trailer چک بشه.        |

## مقادیر برگشتی

**true** - ماشین یه trailer وصل شده داره.

**false** - ماشین هیچ trailer وصل شده نداره.

## مثال‌ها

```c
if (IsTrailerAttachedToVehicle(vehicleid))
{
    printf("Vehicle %i has a trailer!", vehicleid);
}
```

## توابع مرتبط

- [GetVehicleTrailer](GetVehicleTrailer): چک کردن اینکه ماشین چه trailer ای رو می‌کشه.
- [AttachTrailerToVehicle](AttachTrailerToVehicle): وصل کردن یه trailer به ماشین.
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): جدا کردن یه trailer از ماشین.