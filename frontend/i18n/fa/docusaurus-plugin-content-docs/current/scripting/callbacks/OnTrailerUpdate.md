---
title: OnTrailerUpdate
sidebar_label: OnTrailerUpdate
description: این کالبک زمانی فراخوانده می‌شود که بازیکن به‌روزرسانی trailer ارسال کند.
tags: ["vehicle"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن به‌روزرسانی trailer ارسال کند.

| نام       | توضیحات                                        |
| --------- | ---------------------------------------------- |
| playerid  | شناسه بازیکنی که به‌روزرسانی trailer ارسال کرده |
| vehicleid | Trailer در حال به‌روزرسانی                     |

## مقادیر برگشتی

0 - لغو ارسال به‌روزرسانی‌های trailer به سایر بازیکنان. به‌روزرسانی همچنان به بازیکن به‌روزرساننده ارسال می‌شود.

1 - پردازش به‌روزرسانی trailer به صورت عادی و همگام‌سازی آن بین همه بازیکنان.

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## نکته‌ها

:::warning

این کالبک خیلی مکرر در هر ثانیه برای هر trailer فراخوانده می‌شود. باید از پیاده‌سازی محاسبات فشرده یا عملیات فشرده نوشتن/خواندن فایل در این کالبک خودداری کنید.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnUnoccupiedVehicleUpdate](OnUnoccupiedVehicleUpdate): این کالبک زمانی فراخوانده می‌شود که موقعیت وسیله نقلیه بدون راننده توسط کلاینت همگام‌سازی شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [GetVehicleTrailer](../functions/GetVehicleTrailer): بررسی اینکه وسیله نقلیه کدام trailer را می‌کشد.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): بررسی اینکه آیا trailer به وسیله نقلیه متصل است یا نه.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): اتصال trailer به وسیله نقلیه.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): جدا کردن trailer از وسیله نقلیه.